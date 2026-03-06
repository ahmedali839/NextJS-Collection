<<<<<<< HEAD
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
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* You can leave this empty or keep your other settings here */
};

export default nextConfig;
>>>>>>> cdca64550d105b317f2c207d8401ba840bd07442
