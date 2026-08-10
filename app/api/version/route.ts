import { NextResponse } from "next/server";
import { getBuildCommit } from "@/app/lib/buildInfo";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    {
      commit: getBuildCommit(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
