import React from 'react';

export default function OTelCheatSheet() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-black text-blue-600">🔭 OTel Cheat Sheet</h1>
          <p className="mt-2 text-lg text-gray-500 font-medium">
            Your Next.js Flight Recorder. Stop guessing with <code className="bg-gray-200 px-1 rounded text-sm">console.log</code> and see exactly what's slow.
          </p>
        </header>

        {/* Step 1 & 2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Step 1 */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-3">1️⃣ Install & Setup</h2>
            <code className="block bg-gray-900 text-pink-400 p-3 rounded-lg text-sm font-mono mb-3">
              npm i @vercel/otel @opentelemetry/api
            </code>
            <p className="text-sm text-gray-600 mb-2">Create <strong>instrumentation.ts</strong> in the ROOT folder:</p>
            <code className="block bg-gray-900 text-blue-300 p-3 rounded-lg text-xs font-mono whitespace-pre-wrap">
              {`import { registerOTel } from '@vercel/otel';\n\nexport function register() {\n  registerOTel({ serviceName: 'my-app' });\n}`}
            </code>
          </section>

          {/* Step 2 */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-3">2️⃣ Connect to Honeycomb</h2>
            <p className="text-sm text-gray-600 mb-3">Add this to your <strong>.env.local</strong> to see the visual graphs:</p>
            <code className="block bg-gray-900 text-green-400 p-3 rounded-lg text-xs font-mono whitespace-pre-wrap leading-relaxed">
              NEXT_OTEL_VERBOSE=1{'\n'}
              OTEL_EXPORTER_OTLP_ENDPOINT="https://api.honeycomb.io"{'\n'}
              OTEL_EXPORTER_OTLP_HEADERS="x-honeycomb-team=YOUR_API_KEY"
            </code>
          </section>

        </div>

        {/* Step 3 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-3">3️⃣ Track Specific Code (Manual Spans)</h2>
          <p className="text-sm text-gray-600 mb-3">Use this template inside any API route to measure exact execution time:</p>
          <pre className="bg-gray-900 text-blue-300 p-4 rounded-xl overflow-x-auto text-sm font-mono">
{`import { trace } from '@opentelemetry/api';

export async function GET() {
  const tracer = trace.getTracer('custom-tracer');

  return await tracer.startActiveSpan('MySlowDatabaseQuery', async (span) => {
    try {
      // Your code goes here...
      span.setAttribute("user.id", 123); // Tag data for debugging
      return Response.json({ success: true });
    } finally {
      span.end(); // ALWAYS end the timer!
    }
  });
}`}
          </pre>
        </section>

        {/* Step 4 */}
        <section className="bg-blue-600 text-white p-6 rounded-xl shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">4️⃣ Run it!</h2>
            <p className="text-blue-100 text-sm">
              Start your server with <code className="bg-blue-800 px-1 rounded">npm run dev</code> and check Honeycomb.io.
            </p>
          </div>
          <div className="text-3xl">🚀</div>
        </section>

      </div>
    </div>
  );
}