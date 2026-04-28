"use client";
import { useState } from "react";

const faqs = [
  { q: "Do you ship internationally?", a: "Yes! We ship to over 40 countries. Shipping rates and times vary by destination." },
  { q: "How do I store my tea?", a: "Store your tea in a cool, dark, airtight container away from strong odours. Most teas keep best for 12–24 months." },
  { q: "Can I return or exchange tea?", a: "Due to the nature of food products we cannot accept returns, but if there's an issue with your order please contact us and we'll make it right." },
  { q: "Do you offer wholesale?", a: "Absolutely! We work with cafés, restaurants, and retailers. Email wholesale@leafandbloom.com for our trade catalogue." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  }

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      {/* Hero */}
      <div
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2d5a3a 0%, #4a7c59 100%)" }}
      >
        <span className="text-5xl block mb-4">✉️</span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#fdf6e3] mb-4">
          Get in Touch
        </h1>
        <p className="text-[#d4edd9] text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Whether it&apos;s a question about your order,
          a wholesale enquiry, or just to chat about tea — drop us a line.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact info */}
        <div>
          <h2 className="text-3xl font-bold text-[#2d5a3a] mb-8">Contact Info</h2>
          <div className="space-y-6">
            {[
              { emoji: "📍", label: "Address", value: "42 Garden Lane, Notting Hill, London W11 1QQ, UK" },
              { emoji: "📞", label: "Phone", value: "+44 20 7946 0321" },
              { emoji: "✉️", label: "Email", value: "hello@leafandbloom.com" },
              { emoji: "🕐", label: "Hours", value: "Monday – Friday, 9:00 am – 6:00 pm GMT" },
            ].map(({ emoji, label, value }) => (
              <div key={label} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <span className="text-3xl">{emoji}</span>
                <div>
                  <div className="font-semibold text-[#2d5a3a] mb-0.5">{label}</div>
                  <div className="text-[#6b7280]">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <h3 className="text-2xl font-bold text-[#2d5a3a] mt-14 mb-6">FAQs</h3>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="bg-white rounded-2xl shadow-sm overflow-hidden group"
              >
                <summary className="px-5 py-4 font-semibold text-[#2d5a3a] cursor-pointer list-none flex items-center justify-between hover:bg-[#e8f5eb] transition-colors">
                  {q}
                  <span className="text-[#4a7c59] text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="px-5 pb-4 text-[#6b7280] text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 h-fit">
          <h2 className="text-3xl font-bold text-[#2d5a3a] mb-8">Send a Message</h2>

          {sent ? (
            <div className="text-center py-12">
              <span className="text-6xl block mb-4">🍃</span>
              <h3 className="text-2xl font-bold text-[#2d5a3a] mb-2">Message Sent!</h3>
              <p className="text-[#6b7280]">
                Thank you, {form.name}! We&apos;ll get back to you within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                { name: "subject", label: "Subject (optional)", type: "text", placeholder: "Order enquiry" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold text-[#2d5a3a] mb-1.5">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    required={name !== "subject"}
                    className="w-full px-4 py-3 rounded-xl border border-[#d1d5db] focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59]/20 outline-none transition-all text-[#2d5a3a]"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-[#2d5a3a] mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can we help you today?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#d1d5db] focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59]/20 outline-none transition-all resize-none text-[#2d5a3a]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#4a7c59] text-white font-semibold text-lg hover:bg-[#2d5a3a] transition-colors duration-200"
              >
                Send Message 🍃
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
