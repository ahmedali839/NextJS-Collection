// import { NextResponse } from "next/server";
// import dbConnect from "@/app/lib/db";
// import User from "@/app/models/User";
// import { signToken } from "@/app/lib/jwt";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   console.log(await req);
//   const body = await req.json();
//   const email = (body.email || "").trim().toLowerCase();
//   const password = body.password || "";

//   if (!email || !password) {
//     return NextResponse.json({ error: "InValid input" }, { status: 400 });
//   }

//   await dbConnect();

//   /// (Authorization) - verify credentials
//   const user = await User.findOne({ email });
//   if (!user) {
//     return NextResponse.json(
//       { error: "InValid Credentials email" },
//       { status: 401 },
//     );
//   }

//   const ok = await bcrypt.compare(password, user.passwordHash);
//   if (!ok)
//     return NextResponse.json(
//       { error: "InValid Credentials password" },
//       { status: 401 },
//     );

//   const token = await signToken({ sub: String(user._id) });

//   const res = NextResponse.json({
//     ok: true,
//     user: { id: String(user._id), name: user.name, email: user.email },
//   });

//   res.cookies.set("token", token, {
//     httpOnly: true,
//     sameSite: "lax",
//     secure: process.env.NODE_ENV === "production",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 7,
//   });

//   return res;
// }
// // 
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";
import { signToken } from "@/app/lib/jwt";
import bcrypt from "bcryptjs";

console.log("MONGODB_URI?", !!process.env.MONGODB_URI);
console.log("JWT_SECRET?", !!process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const body = await req.json();
    const email = (body.email || "").trim().toLowerCase();
    const password = body.password || "";

    if (!email || !password) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    const token = await signToken({ sub: String(user._id) });

    const res = NextResponse.json({
      ok: true,
      user: { id: String(user._id), name: user.name, email: user.email },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err) {
    console.error("LOGIN_ROUTE_ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
