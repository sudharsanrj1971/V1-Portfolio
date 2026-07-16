import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ ok: true, service: "DEV_OS Portfolio", version: "1.0.0" }); }
