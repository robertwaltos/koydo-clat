import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "clat-ug", questions: [], message: "Questions endpoint stub" });
}
