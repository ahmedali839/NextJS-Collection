import { cacheLife } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

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

export async function getTimeData() {
  // simulate a slow database / API response
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json({
    time: new Date().toISOString(),
    randomNumber: Math.floor(Math.random() * 1000),
  });
}

export async function getProcessedMedia() {
  console.log("Starting Heavy Image Analysis....");

  // Simulate a heavy image processing / heavy API request / heavy Database
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock Data: In a real app, this would be the API response
  const rawImages = [
    {
      id: 1,
      theme: "Modeern Ofice",
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
    {
      id: 2,
      theme: "Neural Networks",
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    {
      id: 3,
      theme: "Abstract Code",
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
  ];

  // Simulate "Heavy" processing (AI tagging)
  return rawImages.map((img) => ({
    ...img,
    aiCategory: `AI-Generated Category for ${img.theme.replace(" ", "-")}`,
    processedAt: new Date().toISOString(),
  }));
}
