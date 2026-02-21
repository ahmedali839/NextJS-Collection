import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req) {
  const body = await req.json();

  const { email, password } = body;

  const validatedValues = UserSchema.safeParse(body);
  if (!validatedValues.success) {
    return Response.json({ error: validatedValues.error }, { status: 400 });
  }

  // // Alternative Validation
  //   if (!email || !password) {
  //     return Response.json(
  //       { error: "Validation of Email or Password failed." },
  //       { status: 400 },
  //     );
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     return Response.json(
  //       { error: "Email Validation Failed." },
  //       { status: 400 },
  //     );
  //   }
  //   if (password.length < 6) {
  //     return Response.json(
  //       { error: "Password Length must be more than 6 characters." },
  //       { status: 400 },
  //     );
  //   }

  console.log("Val", validatedValues);

  return Response.json(
    { message: "Login Successfully.", email },

    { status: 200 },
  );
}
