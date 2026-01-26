export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });
  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data ? data[0] : [];
}

export async function getNumber() {
  const number = Math.random();
  return number;
}

import { unstable_cache } from "next/cache";

// This function generates a random number
const getNumberInternal = async () => {
  return Math.random();
};

// Wrap it to cache the result
export const getCachedNumber = unstable_cache(
  getNumberInternal,
  ["my-number-key"], // Unique key for this cache
  { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
);
