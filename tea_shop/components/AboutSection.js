import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#fdf6e3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual side */}
        <div className="relative flex justify-center">
          {/* Background circle */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#4a7c59] to-[#6aab7e] flex items-center justify-center shadow-2xl">
            <span className="text-9xl">🫖</span>
          </div>
          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <div>
              <div className="text-xs text-[#6b7280]">Garden to Cup</div>
              <div className="text-sm font-bold text-[#2d5a3a]">100% Natural</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <div>
              <div className="text-xs text-[#6b7280]">Customer Rating</div>
              <div className="text-sm font-bold text-[#2d5a3a]">4.9 / 5.0</div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <span className="text-[#4a7c59] font-semibold tracking-widest uppercase text-sm">
            Our Story
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#2d5a3a] leading-tight mb-6">
            Rooted in Passion, <br />
            <span className="text-[#c9a84c]">Steeped in Tradition</span>
          </h2>
          <p className="text-[#6b7280] leading-relaxed mb-5 text-lg">
            Leaf &amp; Bloom was born from a simple belief: everyone deserves a
            truly exceptional cup of tea. Founded in 2010 by two tea lovers
            after an inspiring journey through the tea gardens of Darjeeling and
            Kyoto, we set out to bring those experiences home.
          </p>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            Today we partner with over 30 family-run estates across 15 countries,
            ensuring each harvest meets our uncompromising standards for taste,
            sustainability, and farmer welfare.
          </p>
          <Link
            href="/about"
            className="inline-block px-7 py-3 rounded-full bg-[#4a7c59] text-white font-semibold hover:bg-[#2d5a3a] transition-colors duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
