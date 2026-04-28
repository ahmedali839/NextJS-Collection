"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our Teas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2d5a3a] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl">🍃</span>
          <span className="text-2xl font-bold text-[#fdf6e3] tracking-wide group-hover:text-[#c9a84c] transition-colors duration-300">
            Leaf &amp; Bloom
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link text-[#fdf6e3] hover:text-[#c9a84c] font-medium transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="px-5 py-2 rounded-full bg-[#c9a84c] text-[#2d5a3a] font-semibold hover:bg-[#e0bc6a] transition-colors duration-200 shadow"
          >
            Shop Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#fdf6e3] focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#2d5a3a] border-t border-[#4a7c59] px-6 pb-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[#fdf6e3] hover:text-[#c9a84c] font-medium py-1 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="inline-block text-center px-5 py-2 rounded-full bg-[#c9a84c] text-[#2d5a3a] font-semibold hover:bg-[#e0bc6a] transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}
