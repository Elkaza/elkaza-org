import { NextRequest, NextResponse } from "next/server";

const MAX_BODY_BYTES = 16_384;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 4_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const requestLog = new Map<string, number[]>();

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
    company?: unknown;
};

export async function POST(request: NextRequest) {
    try {
        const clientId = getClientId(request);
        if (isRateLimited(clientId)) {
            return clientError("rate_limited", 429);
        }

        const contentLength = Number(request.headers.get("content-length") ?? 0);
        if (contentLength > MAX_BODY_BYTES) {
            return clientError("payload_too_large", 413);
        }

        const rawBody = await request.text();
        if (rawBody.length > MAX_BODY_BYTES) {
            return clientError("payload_too_large", 413);
        }

        const payload = parsePayload(rawBody);
        if (!payload) {
            return clientError("invalid_request", 400);
        }

        const name = normalizeField(payload.name);
        const email = normalizeField(payload.email);
        const subject = normalizeField(payload.subject);
        const message = normalizeField(payload.message);
        const honeypot = normalizeField(payload.company);

        if (honeypot) {
            return clientError("invalid_request", 400);
        }

        if (!name || !email || !subject || !message) {
            return clientError("required", 400);
        }

        if (
            name.length > MAX_NAME_LENGTH ||
            email.length > MAX_EMAIL_LENGTH ||
            subject.length > MAX_SUBJECT_LENGTH ||
            message.length > MAX_MESSAGE_LENGTH
        ) {
            return clientError("payload_too_large", 413);
        }

        if (!isValidEmail(email)) {
            return clientError("invalid_email", 400);
        }

        return clientError("unavailable", 503);
    } catch {
        const errorId = crypto.randomUUID();
        console.error("Contact form request failed", { errorId });
        return NextResponse.json(
            { errorCode: "server_error" },
            { status: 500 }
        );
    }
}

function parsePayload(rawBody: string): ContactPayload | null {
    try {
        const parsed = JSON.parse(rawBody);
        return parsed && typeof parsed === "object" ? parsed : null;
    } catch {
        return null;
    }
}

function normalizeField(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientId(request: NextRequest) {
    return (
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown"
    );
}

function isRateLimited(clientId: string) {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;
    const recent = (requestLog.get(clientId) ?? []).filter((timestamp) => timestamp >= windowStart);
    recent.push(now);
    requestLog.set(clientId, recent);

    return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function clientError(errorCode: string, status: number) {
    return NextResponse.json({ errorCode }, { status });
}
