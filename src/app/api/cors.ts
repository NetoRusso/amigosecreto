import { NextResponse } from "next/server";

export function setCors() {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, ...setCors() });
}