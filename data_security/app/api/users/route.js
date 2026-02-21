import { NextResponse } from "next/server";
import { getUsers } from "@/lib/dataAccess";

export async function GET() {
  const users = await getUsers();

  return NextResponse.json(users);
}
