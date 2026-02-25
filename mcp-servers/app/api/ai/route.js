import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  const tools = [
    {
      type: "function",
      function: {
        name: "getTime",
        description: "Get current server time",
        parameters: {
          type: "object",
          properties: {},
        },
      },
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }],
    tools,
    tool_choice: "auto",
  });
  console.log(response);

  const toolCall = response.choices[0].message.tool_calls?.[0];

  if (toolCall) {
    // Call our backend tool
    const toolResponse = await fetch(
      "http://localhost:3000/api/tools/getTime",
      {
        method: "POST",
      },
    );

    const data = await toolResponse.json();

    return Response.json({
      aiUsedTool: true,
      toolResult: data,
      rawAIResponse: response.choices[0].message,
    });
  }

  return Response.json({
    aiUsedTool: false,
    rawAIResponse: response.choices[0].message,
  });
}
