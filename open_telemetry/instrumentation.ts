// instrumentation.ts (Must be in your project ROOT)
import { registerOTel } from "@vercel/otel";

export function register() {
  console.log("-----------------------------------------");
  console.log("🚀 INSTRUMENTATION IS ACTIVATED!");
  console.log("-----------------------------------------");
  registerOTel({
    serviceName: "nextjs-ahmed-practise",
  });
}
