// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export async function POST(req) {
//   const { message } = await req.json();

//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//     tools: [
//       {
//         functionDeclarations: [
//           {
//             name: "getTime",
//             description: "Get Current server time",
//             parameters: {
//               type: "OBJECT",
//               properties: {},
//             },
//           },
//         ],
//       },
//     ],
//   });

//   const chat = model.startChat();
//   const result = await chat.sendMessage(message);
//   const response = result.response;
//   const functionCall = response.functionCalls()?.[0];

//   if (functionCall?.name === "getTime") {
//     // Call backend Tool
//     const toolRes = await fetch("https://localhost:3000/api/tools/getTime", {
//       method: "POST",
//     });

//     const toolData = await toolRes.json();

//     // Send tool result back to Gemini
//     const final = await chat.sendMessage({
//       functionResponse: {
//         name: "getTime",
//         response: toolData,
//       },
//     });

//     return Response.json({
//       aiUsedTool: true,
//       result: final.response.text(),
//     });
//   }

//   return Response.json({
//     aiUsedTool: false,
//     result: response.text(),
//   });
// }






// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// export async function POST(req) {
//   try {
//     const { message } = await req.json();

//     // Step 1: Send user message with tool definition
//     const response = await ai.models.generateContent({
//     //   model: "gemini-1.5-flash",
//       model: "gemini-1.5-",
//       contents: message,

//       tools: [
//         {
//           functionDeclarations: [
//             {
//               name: "getTime",
//               description: "Get current server time",
//               parameters: {
//                 type: "object",
//                 properties: {},
//               },
//             },
//           ],
//         },
//       ],
//     });

//     const functionCall = response.functionCalls?.[0];

//     // Step 2: If AI wants to call tool
//     if (functionCall?.name === "getTime") {
//       // Call your backend tool
//       const toolRes = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/tools/getTime`,
//         {
//           method: "POST",
//         }
//       );

//       const toolData = await toolRes.json();

//       // Step 3: Send tool result back to Gemini
//       const finalResponse = await ai.models.generateContent({
//         model: "gemini-1.5-flash",
//         contents: [
//           {
//             role: "user",
//             parts: [{ text: message }],
//           },
//           {
//             role: "tool",
//             parts: [
//               {
//                 functionResponse: {
//                   name: "getTime",
//                   response: toolData,
//                 },
//               },
//             ],
//           },
//         ],
//       });

//       return Response.json({
//         aiUsedTool: true,
//         result: finalResponse.text,
//       });
//     }

//     // Step 4: If no tool used
//     return Response.json({
//       aiUsedTool: false,
//       result: response.text,
//     });

//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "AI failed" }, { status: 500 });
//   }
// }

// // with OPENAPI keys
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
          properties: {}
        }
      }
    }
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: message }
    ],
    tools,
    tool_choice: "auto"
  });

  const toolCall = response.choices[0].message.tool_calls?.[0];

  if (toolCall) {
    // Call our backend tool
    const toolResponse = await fetch("http://localhost:3000/api/tools/getTime", {
      method: "POST"
    });

    const data = await toolResponse.json();

    return Response.json({
      aiUsedTool: true,
      toolResult: data,
      rawAIResponse: response.choices[0].message
    });
  }

  return Response.json({
    aiUsedTool: false,
    rawAIResponse: response.choices[0].message
  });
}