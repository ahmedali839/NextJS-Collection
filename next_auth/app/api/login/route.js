import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    return Response.json({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    return Response.json(
      {
      error: "You must be signed in to view the protected content on this page.",
      },
      { status: 401 }
    );
  }
}