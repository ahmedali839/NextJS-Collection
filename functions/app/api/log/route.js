import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "functions";
const collectionName = "functions";

let client;

function getClient() {
  if (!uri) {
    throw new Error("MONGODB_URI is not set. Add it to functions/.env and restart dev server.");
  }

  if (!client) {
    client = new MongoClient(uri);
  }

  return client;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { postId } = body ?? {};

    if (!postId) {
      return new Response(JSON.stringify({ error: "Post ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const mongoClient = getClient();
    await mongoClient.connect();

    const db = mongoClient.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertOne({
      postId,
      timestamp: new Date(),
      userAgent: req.headers.get("user-agent") || null,
    });

    console.log(
      JSON.stringify({ message: "Logged successfully", id: String(result.insertedId) }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );


    return new Response(
      JSON.stringify({ message: "Logged successfully", id: String(result.insertedId) }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Logging error:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
