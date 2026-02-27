import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini SDK
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();

    // 1. Define tools in Gemini's format
    const tools = [
      {
        functionDeclarations: [
          {
            name: "getTime",
            description:
              "Get the current server time. Call this when the user asks for the time.",
            // Parameters are optional in Gemini if the function takes no arguments
          },
        ],
      },
    ];

    // 2. Select the model (Flash is perfect for fast tool calling)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      tools: tools,
    });

    // 3. Send the user's message
    const chat = model.startChat();
    const result = await chat.sendMessage(message);
    const response = result.response;

    // 4. Check if Gemini decided to call a function
    const functionCalls = response.functionCalls();

    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];

      if (call.name === "getTime") {
        // Call your local Next.js backend tool
        // Note: In production, it's safer to use an absolute URL or call the logic directly
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const toolResponse = await fetch(`${baseUrl}/api/tools/getTime`, {
          method: "POST",
        });

        const data = await toolResponse.json();

        return Response.json({
          aiUsedTool: true,
          toolName: call.name,
          toolResult: data,
          rawAIResponse: "Function call initiated by Gemini",
        });
      }
    }

    // 5. If no tool was called, return the standard text response
    return Response.json({
      aiUsedTool: false,
      rawAIResponse: response.text(),
    });
  } catch (error) {
    console.error("AI Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
