export const metadata = {
  title: "Our Teas — Leaf & Bloom",
  description: "Browse our full collection of artisan teas.",
};

const categories = ["All", "Green", "Black", "Herbal", "Oolong", "White", "Gift Sets"];

const allTeas = [
  { id: 1, emoji: "🍵", name: "Sencha Serenity", origin: "Japan", price: "$12.99", category: "Green", tag: "Bestseller", description: "Vibrant Japanese green tea with a grassy, umami-rich taste and a clean, refreshing finish." },
  { id: 2, emoji: "🌹", name: "Rose Darjeeling", origin: "India", price: "$14.99", category: "Black", tag: "New", description: "Delicate Darjeeling first-flush leaves blended with sun-dried rose petals for a floral brew." },
  { id: 3, emoji: "🧡", name: "Rooibos Sunset", origin: "South Africa", price: "$10.99", category: "Herbal", tag: "Caffeine-Free", description: "Sweet, earthy, naturally caffeine-free with hints of vanilla and caramel." },
  { id: 4, emoji: "🫖", name: "Oolong Mist", origin: "Taiwan", price: "$15.99", category: "Oolong", tag: "Premium", description: "Lightly oxidised high-mountain oolong with a creamy, orchid-like aroma." },
  { id: 5, emoji: "🌿", name: "Peppermint Pure", origin: "Morocco", price: "$9.99", category: "Herbal", tag: "Herbal", description: "Intensely fresh Moroccan spearmint and peppermint leaves." },
  { id: 6, emoji: "☁️", name: "Earl Grey Classic", origin: "Sri Lanka", price: "$11.99", category: "Black", tag: "Classic", description: "Bright Ceylon black tea scented with cold-pressed bergamot oil." },
  { id: 7, emoji: "🌸", name: "Silver Needle", origin: "Fujian, China", price: "$19.99", category: "White", tag: "Rare", description: "Delicate white tea buds with a sweet, melon-like flavour and velvety mouthfeel." },
  { id: 8, emoji: "🍂", name: "Autumn Chai", origin: "India", price: "$13.99", category: "Black", tag: "Spiced", description: "Bold Assam black tea spiced with cinnamon, cardamom, ginger, and clove." },
  { id: 9, emoji: "🌼", name: "Chamomile Dreams", origin: "Egypt", price: "$10.99", category: "Herbal", tag: "Relaxing", description: "Pure whole chamomile flowers for the most calming bedtime ritual." },
  { id: 10, emoji: "🍋", name: "Lemon Ginger Zest", origin: "India", price: "$11.99", category: "Herbal", tag: "Wellness", description: "Invigorating blend of organic ginger root, lemon peel, and a hint of black pepper." },
  { id: 11, emoji: "🟢", name: "Gunpowder Green", origin: "Zhejiang, China", price: "$12.99", category: "Green", tag: "Bold", description: "Hand-rolled green tea pearls that unfurl in hot water, releasing a bold, smoky character." },
  { id: 12, emoji: "🎁", name: "Discovery Gift Set", origin: "Various", price: "$39.99", category: "Gift Sets", tag: "Gift", description: "A curated collection of 6 bestselling teas in a beautiful keepsake box — perfect for any tea lover." },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      {/* Page hero */}
      <div
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2d5a3a 0%, #4a7c59 100%)" }}
      >
        <span className="text-5xl mb-4 block">🍵</span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#fdf6e3] mb-4">
          Our Tea Collection
        </h1>
        <p className="text-[#d4edd9] text-lg max-w-xl mx-auto">
          Hand-selected from 15 countries, every tea tells its own beautiful story.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category chips (decorative — no client-side filter to keep this server component) */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-5 py-2 rounded-full border-2 border-[#4a7c59] text-[#4a7c59] font-semibold text-sm hover:bg-[#4a7c59] hover:text-white cursor-pointer transition-all duration-200"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tea grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allTeas.map((tea) => (
            <div
              key={tea.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="h-36 flex items-center justify-center bg-gradient-to-br from-[#e8f5eb] to-[#f5f0e8]">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {tea.emoji}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-[#2d5a3a] text-base">{tea.name}</h3>
                    <p className="text-xs text-[#6aab7e] font-medium">{tea.origin}</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#e8f5eb] text-[#4a7c59]">
                    {tea.tag}
                  </span>
                </div>
                <p className="text-[#6b7280] text-xs leading-relaxed mb-4">{tea.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#c9a84c]">{tea.price}</span>
                  <button className="px-3 py-1.5 rounded-full bg-[#4a7c59] text-white text-xs font-semibold hover:bg-[#2d5a3a] transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
