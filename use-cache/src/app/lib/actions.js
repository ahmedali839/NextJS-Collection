"use server";

import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

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
  await new Promise((resolve) => setTimeout(resolve, 10000));

  // Mock Data: In a real app, this would be the API response
  const rawImages = [
    { id: 1, theme: "Modeern Ofice", url: "" },
    { id: 2, theme: "Neural Networks", url: "" },
    { id: 3, theme: "Abstract Code", url: "" },
  ];

  // Simulate "Heavy" processing (AI tagging)
  return rawImages.map((img) => ({
    ...img,
    aiCategory: `AI-Generated Category for ${img.theme.replace(" ", "-")}`,
    processedAt: new Date().toISOString(),
  }));
}

export async function refreshAboutCache() {
  revalidateTag("about-page", "max");
}
