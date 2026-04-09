import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "clat-ug", status: "ok", message: "Dashboard endpoint stub" });
}
