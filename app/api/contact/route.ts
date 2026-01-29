import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Log the submission (in production, you would send an email or save to database)
        console.log("Contact form submission:", {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
        });

        // TODO: Integrate with email service (e.g., SendGrid, AWS SES, or Gemini AI for email generation)
        // For now, we'll just return success

        return NextResponse.json(
            { success: true, message: "Message received successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An error occurred processing your request" },
            { status: 500 }
        );
    }
}
