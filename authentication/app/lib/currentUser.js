import { cookies } from "next/headers";
import { cache } from "react";
import dbConnect from "./db";
import User from "../models/User";
import { verifyToken } from "./jwt";

export const getCurrentUser = cache(async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (error) {
    return null;
  }
  await dbConnect();

  const user = await User.findById(payload.sub).lean();
  if (!user) return null;

  // DTO's (don't leak passwordHash)
  return { id: String(user._id), name: user.name, email: user.email };
});
