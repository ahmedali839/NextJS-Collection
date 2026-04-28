export const metadata = {
  title: "About Us — Leaf & Bloom",
  description: "Our story, mission, and the people behind Leaf & Bloom.",
};

const milestones = [
  { year: "2010", event: "Founded in a small London kitchen after an inspiring trip to Darjeeling." },
  { year: "2012", event: "Opened our first flagship tearoom in Notting Hill." },
  { year: "2015", event: "Launched online shop and began shipping across Europe." },
  { year: "2018", event: "Partnered with 30 ethical farms across 15 countries." },
  { year: "2021", event: "Achieved carbon-neutral certification and zero-waste packaging." },
  { year: "2024", event: "Served over 10,000 happy sippers worldwide." },
];

const team = [
  { emoji: "👩‍🌾", name: "Amara Chen", role: "Co-Founder & Head of Sourcing", bio: "Amara spent 8 years travelling through China, Japan, and India building relationships with the farmers behind every leaf." },
  { emoji: "👨‍🍳", name: "Lucas Ferreira", role: "Co-Founder & Master Blender", bio: "Lucas trained under a traditional Taiwanese tea master and brings 15 years of blending expertise to every Leaf & Bloom creation." },
  { emoji: "👩‍🔬", name: "Dr. Sofia Reyes", role: "Quality & Sustainability Director", bio: "Sofia oversees our lab testing programme and drives our commitment to ethical, environmentally responsible sourcing." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      {/* Hero */}
      <div
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #2d5a3a 0%, #6aab7e 100%)" }}
      >
        <span className="text-6xl block mb-4">🌿</span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#fdf6e3] mb-4">
          Our Story
        </h1>
        <p className="text-[#d4edd9] text-lg max-w-2xl mx-auto">
          Born from a love of tea and a journey around the world&apos;s finest
          gardens, Leaf &amp; Bloom is more than a shop — it&apos;s a community.
        </p>
      </div>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-[#4a7c59] font-semibold tracking-widest uppercase text-sm">
          Our Mission
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#2d5a3a] mb-6">
          Tea That Tells a Story
        </h2>
        <p className="text-[#6b7280] text-lg leading-relaxed">
          We believe the best cup of tea starts long before the kettle boils. It
          starts in the soil, with the farmer&apos;s hands, and with the integrity of
          everyone in the supply chain. Our mission is to bring you extraordinary
          tea while making the world a little more just and a little more green.
        </p>
      </section>

      {/* Timeline */}
      <section className="bg-[#2d5a3a] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#fdf6e3] mb-14">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-[#c9a84c] pl-10 space-y-10">
            {milestones.map(({ year, event }) => (
              <div key={year} className="relative">
                <span className="absolute -left-[2.85rem] top-0 w-5 h-5 rounded-full bg-[#c9a84c] border-2 border-[#2d5a3a]" />
                <span className="text-[#c9a84c] font-bold text-lg block mb-1">
                  {year}
                </span>
                <p className="text-[#d4edd9] leading-relaxed">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#2d5a3a] mb-14">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(({ emoji, name, role, bio }) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#4a7c59] to-[#6aab7e] flex items-center justify-center text-4xl mb-5">
                  {emoji}
                </div>
                <h3 className="text-xl font-bold text-[#2d5a3a] mb-1">{name}</h3>
                <p className="text-sm text-[#c9a84c] font-semibold mb-4">{role}</p>
                <p className="text-[#6b7280] text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
