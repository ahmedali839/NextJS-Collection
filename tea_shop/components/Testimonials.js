const testimonials = [
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    emoji: "🧘",
    stars: 5,
    quote:
      "I start every morning with Leaf & Bloom's Sencha Serenity. It grounds me like nothing else. The freshness is incomparable — you can really taste the quality.",
  },
  {
    name: "James Whitfield",
    role: "Author & Tea Enthusiast",
    emoji: "✍️",
    stars: 5,
    quote:
      "I've tried teas from all over the world, but the Rose Darjeeling from Leaf & Bloom is something special. Incredibly nuanced with just the right floral note.",
  },
  {
    name: "Sophie Laurent",
    role: "Barista & Café Owner",
    emoji: "☕",
    stars: 5,
    quote:
      "I stock Leaf & Bloom exclusively in my café. My customers ask for it by name every day. The packaging is beautiful and the teas always arrive perfectly fresh.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#f0f7f1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#4a7c59] font-semibold tracking-widest uppercase text-sm">
            What Sippers Say
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#2d5a3a]">
            Loved by Tea Lovers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, emoji, stars, quote }) => (
            <div
              key={name}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-[#c9a84c] text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#6b7280] leading-relaxed italic flex-1 mb-6">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4a7c59] to-[#6aab7e] flex items-center justify-center text-2xl">
                  {emoji}
                </div>
                <div>
                  <div className="font-bold text-[#2d5a3a]">{name}</div>
                  <div className="text-sm text-[#6b7280]">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
