import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";
import { signToken } from "@/app/lib/jwt";

export async function POST(req) {
  const body = await req.json();
  const name = (body.name || " ").trim();
  const email = (body.email || "").trim().toLowerCase();
  const password = body.password || " ";

  // (Form Validation ) - stop early if invalid
  if (!name || !email || !password) {
    return NextResponse.json({ error: "Invalid Input" }, { status: 400 });
  }

  await dbConnect();

  const isAlreadyExists = await User.findOne({ email }).lean();
  if (isAlreadyExists)
    return NextResponse.json(
      { error: "Email Already Exists." },
      { status: 409 },
    );

  const passwordHash = await bcrypt.hash(password, 10); // OWASP: min 10 work factor. [web:35]

  const user = await User.create({ name, email, passwordHash });

  // (Session Managment - Stateless JWT)
  const token = await signToken({ sub: String(user._id) });
  const res = NextResponse.json({
    ok: true,
    user: { id: String(user._id), name, email },
  });
  res.cookies.set("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
