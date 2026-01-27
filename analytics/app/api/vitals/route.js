import { NextResponse } from "next/server";

export async function POST(request) {
  const text = await request.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  // You will see this in the terminal running `npm run dev`
  console.log("[API /api/vitals] received:", data);

  return NextResponse.json({ ok: true });
}
