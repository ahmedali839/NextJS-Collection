"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="py-20 px-6 bg-[#c9a84c]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-3xl">📬</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2d5a3a] mb-4">
          Join the Tea Circle
        </h2>
        <p className="text-[#2d5a3a]/80 mb-8 text-lg">
          Get exclusive brewing tips, first access to new arrivals, and a
          <strong> 10% discount</strong> on your first order.
        </p>

        {submitted ? (
          <div className="bg-[#2d5a3a] text-[#fdf6e3] rounded-2xl px-8 py-5 font-semibold text-lg inline-block">
            🍃 Welcome to the circle! Check your inbox.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-full bg-white text-[#2d5a3a] placeholder-[#6b7280] outline-none focus:ring-2 focus:ring-[#2d5a3a] font-medium"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#2d5a3a] text-white font-semibold hover:bg-[#1e3d28] transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
