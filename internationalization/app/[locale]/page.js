import fs from "fs";
import path from "path";

async function getMessages(locale) {
  const filePath = path.join(process.cwd(), "messages", `${locale}.json`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function Home({ params }) {
  const messages = await getMessages(params.locale);

  return (
    <div>
      <h1>{messages.greeting}</h1>
      <p>{messages.description}</p>
    </div>
  );
}
