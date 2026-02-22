"use server";

import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z
    .string({ invalid_type_error: "Invalid Email" })
    .email("Invalid Email"),
});

export async function updateUserAction(prevState, formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const validated = UserSchema.safeParse(data);

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
    };
  }

  console.log("Updating data:", validated.data);

  return { success: true, errors: {} };
}
