import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-[#d1d5db] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🍃</span>
            <span className="text-xl font-bold text-[#fdf6e3]">
              Leaf &amp; Bloom
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#9ca3af]">
            Artisan teas from the world&apos;s finest gardens, delivered fresh
            to your door with care and craftsmanship.
          </p>
          <div className="flex gap-4 mt-5">
            {["𝕏", "𝑓", "📷", "📌"].map((icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center text-sm hover:bg-[#4a7c59] transition-colors duration-200"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-[#fdf6e3] font-semibold mb-4 tracking-wide">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            {["Green Teas", "Black Teas", "Herbal Blends", "Oolong & White", "Gift Sets"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="/menu"
                    className="hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[#fdf6e3] font-semibold mb-4 tracking-wide">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About Us", href: "/about" },
              { label: "Sustainability", href: "/about" },
              { label: "Blog", href: "/" },
              { label: "Careers", href: "/" },
              { label: "Press", href: "/" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#fdf6e3] font-semibold mb-4 tracking-wide">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span>📍</span>
              <span>42 Garden Lane, London, UK</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>+44 20 7946 0321</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <span>hello@leafandbloom.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🕐</span>
              <span>Mon–Fri, 9am–6pm GMT</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#3d3d3d] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6b7280]">
        <p>© {new Date().getFullYear()} Leaf &amp; Bloom. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">
            Terms of Service
          </Link>
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">
            Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
