const benefits = [
  {
    emoji: "🌱",
    title: "Ethically Sourced",
    description:
      "Every leaf is sourced directly from small-batch farms with fair-trade agreements and sustainable farming practices.",
  },
  {
    emoji: "🔬",
    title: "Lab-Tested Quality",
    description:
      "All our teas undergo rigorous quality and safety testing so you can steep with total peace of mind.",
  },
  {
    emoji: "📦",
    title: "Fresh to Your Door",
    description:
      "We seal each order in airtight, eco-friendly packaging and ship within 24 hours to preserve peak freshness.",
  },
  {
    emoji: "♻️",
    title: "Zero-Waste Packaging",
    description:
      "Our packaging is 100% recyclable or compostable, because we love the planet as much as we love tea.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-[#2d5a3a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm">
            Why Leaf &amp; Bloom
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#fdf6e3]">
            Tea Done Right
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ emoji, title, description }) => (
            <div
              key={title}
              className="group bg-[#fdf6e3]/10 border border-[#fdf6e3]/15 rounded-3xl p-8 text-center hover:bg-[#fdf6e3]/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{emoji}</div>
              <h3 className="text-lg font-bold text-[#c9a84c] mb-3">{title}</h3>
              <p className="text-[#d4edd9] text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
