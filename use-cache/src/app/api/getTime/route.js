const { NextResponse } = require("next/server");

export async function GET() {
  console.log("Date: ", new Date().toISOString());

  return NextResponse.json({
    time: new Date().toISOString(),
    randomNumber: Math.random().toString(10).substring(2, 8)});
}
