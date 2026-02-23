import fs from "fs";
import path from "path";
import Link from "next/link";

// Function to load translation file
async function getMessages(locale) {
  if (!locale) locale = "en"; // fallback
  const filePath = path.join(process.cwd(), "messages", `${locale}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`No translation file found for locale: ${locale}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function About({ params }) {
  const { locale } = await params; // ✅ destructure locale properly
  const messages = await getMessages(locale);

  return (
    <div style={{ padding: "40px" }}>
      <h1>{messages.about || "About Page"}</h1>
      <Link href={`/${locale}`}>Go Back Home</Link>
    </div>
  );
}
