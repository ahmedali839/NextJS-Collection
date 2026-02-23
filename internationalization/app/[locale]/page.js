import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getMessages(locale) {
  if (!locale) locale = "ur"; // fallback

  const filePath = path.join(process.cwd(), "messages", `${locale}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`No translation file found for locale: ${locale}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function Home({ params }) {
  const { locale } = await params; // ✅ destructure locale properly
  const messages = await getMessages(locale);

  return (
    <div style={{ padding: "40px" }}>
      <h1>{messages.greeting}</h1>
      <p>{messages.description}</p>
      <br />
      <Link href={`/${params.locale}/about`}>Go to About Page</Link>
      <br />
      <br />
      <Link href="/en">English</Link> | <Link href="/ur">Urdu</Link>
    </div>
  );
}
