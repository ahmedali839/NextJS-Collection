"use server";

export async function createPost(previousState, formData) {
  // 1. Simulate a 2-second delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 2. Return new state (success message or data)
  return { message: "Post created successfully!" };
}
