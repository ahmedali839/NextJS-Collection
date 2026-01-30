import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import Note from "@/app/models/Note";
import { getCurrentUser } from "@/app/lib/currentUser";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const notes = await Note.find({ userId: user.id })
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({
    notes: notes.map((n) => ({
      id: String(n._id),
      title: n.title,
      body: n.body,
    })),
  });
}

export async function POST(req) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const title = (body.title || "").trim();
  const noteBody = (body.body || "").trim();

  if (!title) {
    return NextResponse.json({ error: "Title Required" }, { status: 400 });
  }

  await dbConnect();
  const created = await Note.create({
    userId: user.id,
    title,
    body: noteBody,
  });

  return NextResponse.json({
    ok: true,
    note: {
      id: String(created._id),
      title: created.title,
      body: created.body,
    },
  });
}
// ahmed-df

// import { NextResponse } from "next/server";
// import dbConnect from "@/app/lib/db";
// import Note from "@/app/models/Note";
// import { verifyToken } from "@/app/lib/jwt";

// async function requireUserId(req) {
//   // const token = req.cookies.get("token")?.value;
//   const cookieStore = await cookies();
//   const token = cookieStore.get("token")?.value;
//   if (!token) return null;
//   try {
//     const payload = await verifyToken(token);
//     return payload.sub;
//   } catch {
//     return null;
//   }
// }

// export async function GET(req) {
//   const userId = await requireUserId(req);
//   if (!userId)
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   await dbConnect();
//   const notes = await Note.find({ userId }).sort({ createdAt: -1 }).lean();
//   return NextResponse.json({
//     notes: notes.map((n) => ({
//       id: String(n._id),
//       title: n.title,
//       body: n.body,
//     })),
//   });
// }

// export async function POST(req) {
//   const userId = await requireUserId(req);
//   if (!userId)
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   const body = await req.json();
//   const title = (body.title || "").trim();
//   if (!title)
//     return NextResponse.json({ error: "Title required" }, { status: 400 });

//   await dbConnect();
//   const created = await Note.create({
//     userId,
//     title,
//     body: (body.body || "").trim(),
//   });
//   return NextResponse.json({
//     ok: true,
//     note: { id: String(created._id), title: created.title, body: created.body },
//   });
// }
