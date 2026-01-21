"use server";

// Simulated database
let likeCount = 0;

export async function incrementLike() {
  // Simulate network delay (like a real API call)
  await new Promise((resolve) => setTimeout(resolve, 500));

  likeCount++;
  return likeCount;
}
export async function getLikeCount() {
  return likeCount;
}
