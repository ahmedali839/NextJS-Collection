import Link from "next/link";

const teas = [
  {
    id: 1,
    emoji: "🍵",
    name: "Sencha Serenity",
    origin: "Japan",
    price: "$12.99",
    tag: "Bestseller",
    tagColor: "bg-[#c9a84c] text-[#2d5a3a]",
    description:
      "A vibrant Japanese green tea with a grassy, umami-rich taste and a clean, refreshing finish.",
  },
  {
    id: 2,
    emoji: "🌹",
    name: "Rose Darjeeling",
    origin: "India",
    price: "$14.99",
    tag: "New Arrival",
    tagColor: "bg-[#4a7c59] text-white",
    description:
      "Delicate Darjeeling first-flush leaves blended with sun-dried rose petals for a floral, muscatel brew.",
  },
  {
    id: 3,
    emoji: "🧡",
    name: "Rooibos Sunset",
    origin: "South Africa",
    price: "$10.99",
    tag: "Caffeine-Free",
    tagColor: "bg-[#6b3a2a] text-white",
    description:
      "Sweet, earthy, and naturally caffeine-free — the perfect evening cup with hints of vanilla and caramel.",
  },
  {
    id: 4,
    emoji: "🫖",
    name: "Oolong Mist",
    origin: "Taiwan",
    price: "$15.99",
    tag: "Premium",
    tagColor: "bg-[#2d5a3a] text-white",
    description:
      "A lightly oxidised high-mountain oolong with a creamy, orchid-like aroma and a long, sweet aftertaste.",
  },
  {
    id: 5,
    emoji: "🌿",
    name: "Peppermint Pure",
    origin: "Morocco",
    price: "$9.99",
    tag: "Herbal",
    tagColor: "bg-[#6aab7e] text-[#2d5a3a]",
    description:
      "Intensely fresh Moroccan spearmint and peppermint leaves that cool and invigorate with every sip.",
  },
  {
    id: 6,
    emoji: "☁️",
    name: "Earl Grey Classic",
    origin: "Sri Lanka",
    price: "$11.99",
    tag: "Classic",
    tagColor: "bg-[#c9a84c]/80 text-[#2d5a3a]",
    description:
      "Bright Ceylon black tea scented with cold-pressed bergamot oil — timeless, aromatic, and bold.",
  },
];

export default function FeaturedTeas() {
  return (
    <section className="py-24 px-6 bg-[#fdf6e3]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#4a7c59] font-semibold tracking-widest uppercase text-sm">
            Curated Collection
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#2d5a3a]">
            Featured Teas
          </h2>
          <p className="mt-4 text-[#6b7280] max-w-xl mx-auto text-lg">
            Each variety is hand-selected by our tea masters for exceptional
            quality, aroma, and flavour.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teas.map((tea) => (
            <div
              key={tea.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Card top */}
              <div className="h-44 flex items-center justify-center bg-gradient-to-br from-[#e8f5eb] to-[#f5f0e8]">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {tea.emoji}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#2d5a3a]">
                      {tea.name}
                    </h3>
                    <p className="text-sm text-[#6aab7e] font-medium">
                      {tea.origin}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${tea.tagColor}`}
                  >
                    {tea.tag}
                  </span>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
                  {tea.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#c9a84c]">
                    {tea.price}
                  </span>
                  <button className="px-4 py-2 rounded-full bg-[#4a7c59] text-white text-sm font-semibold hover:bg-[#2d5a3a] transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block px-8 py-4 rounded-full border-2 border-[#4a7c59] text-[#4a7c59] font-semibold hover:bg-[#4a7c59] hover:text-white transition-all duration-300"
          >
            View All Teas →
          </Link>
        </div>
      </div>
    </section>
  );
}
