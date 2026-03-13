import React from "react";

const testTypes = [
  {
    title: "Unit Testing",
    description: "Involves testing individual units (or blocks of code) in isolation. In React, a unit can be a single function, hook, or component.",
  },
  {
    title: "Component Testing",
    description: "A more focused version of unit testing where the primary subject is React components. This involves testing how components render, interact with props, and behave in response to user events.",
  },
  {
    title: "Integration Testing",
    description: "Involves testing how multiple units work together. This can be a combination of components, hooks, and functions.",
  },
  {
    title: "End-to-End (E2E) Testing",
    description: "Involves testing user flows in an environment that simulates real user scenarios, like the browser. This means testing specific tasks (e.g., signup flow) in a production-like environment.",
  },
  {
    title: "Snapshot Testing",
    description: "Involves capturing the rendered output of a component and saving it to a snapshot file. When tests run, the current output is compared against the saved snapshot to indicate unexpected changes.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 font-sans dark:bg-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        
        {/* Header Section */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Types of Tests
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            A quick breakdown of common testing methodologies in React.
          </p>
        </div>

        {/* Content Grid/List */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {testTypes.map((test, index) => (
            <div 
              key={index} 
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {test.title}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {test.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}