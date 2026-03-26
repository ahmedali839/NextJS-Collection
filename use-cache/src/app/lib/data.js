import { cacheLife } from "next/cache";
import { cookies } from "next/headers";

export async function getBillingData() {
  // 1. Private cache enabled
  "use cache: private";
  
  // 2. Cache lifetime
  cacheLife("minutes");

  console.log("🔒 Vault Filling Billing data for individual users...");

  const cookieStore = await cookies();
  const BillingToken = cookieStore.get("billing-token")?.value;

  if (!BillingToken) {
    return { error: "Access Denied. NO Secure Token Found" };
  }

  const arrayOfValidTokens = [
    { token: "ahmed123", owner: "Ahmed", balance: "$24,777,000" },
    { token: "shery123", owner: "Shery", balance: "$27,777,000" },
    { token: "ali123", owner: "Ali", balance: "$20,777,000" },
  ];

  const userData = arrayOfValidTokens.find((t) => t.token === BillingToken);

  if (!userData) {
    return { error: "Access Denied. Invalid Token" };
  }

  // Simulate a heavy database / API response
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return {
    user: userData,
    lastDecrypted: new Date().toLocaleTimeString(),
  };
}