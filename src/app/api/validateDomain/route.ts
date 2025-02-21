import { NextResponse } from "next/server";
import dns from "dns";
import { promisify } from "util";

const resolveMx = promisify(dns.resolveMx);

const trustedDomains = ["gmail.com", "outlook.com", "hotmail.com", "yahoo.com"];

export async function POST(request: Request) {
  const { email } = await request.json();
  const domain = email.split("@")[1];

  if (trustedDomains.includes(domain)) {
    return NextResponse.json({ valid: true });
  }

  try {
    const mxRecords = await resolveMx(domain);
    return NextResponse.json({ valid: mxRecords.length > 0 });
  } catch {
    return NextResponse.json({ valid: false });
  }
}

export async function GET() {
  return Response.json({ message: "API funcionando!" });
}

