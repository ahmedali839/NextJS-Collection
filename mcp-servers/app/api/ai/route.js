// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req) {
//   const { message } = await req.json();

//   const tools = [
//     {
//       type: "function",
//       function: {
//         name: "getTime",
//         description: "Get current server time",
//         parameters: {
//           type: "object",
//           properties: {},
//         },
//       },
//     },
//   ];
//   console.log("message: ", openai);

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: message }],
//     tools,
//     tool_choice: "auto",
//   });
//   console.log(response);

//   const toolCall = response.choices[0].message.tool_calls?.[0];

//   if (toolCall) {
//     // Call our backend tool
//     const toolResponse = await fetch(
//       "http://localhost:3000/api/tools/getTime",
//       {
//         method: "POST",
//       },
//     );

//     const data = await toolResponse.json();

//     return Response.json({
//       aiUsedTool: true,
//       toolResult: data,
//       rawAIResponse: response.choices[0].message,
//     });
//   }

//   return Response.json({
//     aiUsedTool: false,
//     rawAIResponse: response.choices[0].message,
//   });
// }

import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENROUTER_API_KEY" },
        { status: 500 },
      );
    }

    // Basic MCP-like tool: “getTime”
    const tools = [
      {
        type: "function",
        function: {
          name: "getTime",
          description: "Get current server time",
          parameters: { type: "object", properties: {} },
        },
      },
    ];

    // Call OpenRouter with Llama 3.2 (free)
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "MCP Llama Demo",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.2-3b-instruct:free",
        messages: [{ role: "user", content: message }],
        // tool-like info goes in system prompt for now
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: err.error || "Llama API error" },
        { status: res.status },
      );
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "";

    if (message.toLowerCase().includes("gettime")) {
      const toolRes = await fetch("http://localhost:3000/api/tools/getTime", {
        method: "POST",
      });
      const toolData = await toolRes.json();

      return NextResponse.json(
        {
          aiUsedTool: true,
          toolResult: toolData,
          rawAIResponse: content,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        aiUsedTool: false,
        rawAIResponse: content,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Llama route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
