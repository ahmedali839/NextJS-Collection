import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2",
    );
    // core backend in next.js for frontend
    if (!response.ok) {
      return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
    }

    const data = await response.json();
    console.log("backend response: ", data);

    return NextResponse.json({ data });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "UnExpected Error.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
