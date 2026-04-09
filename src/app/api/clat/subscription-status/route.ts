import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "clat-ug", subscribed: false, message: "Subscription status endpoint stub" });
}
