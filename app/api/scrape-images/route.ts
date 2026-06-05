import { NextResponse } from "next/server";
export async function GET() {
  return new Response("Not Found", { status: 404 });
}
