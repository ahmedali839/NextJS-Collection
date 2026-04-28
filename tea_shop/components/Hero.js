import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2d5a3a 0%, #4a7c59 40%, #6aab7e 100%)",
      }}
    >
      {/* Decorative leaf blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-20 bg-[#c9a84c] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-15 bg-[#fdf6e3] blur-3xl" />

      {/* Floating tea emoji decorations */}
      <span className="absolute top-10 left-10 text-5xl opacity-30 select-none animate-bounce">🍃</span>
      <span className="absolute top-1/3 right-12 text-4xl opacity-20 select-none animate-pulse">☕</span>
      <span className="absolute bottom-16 left-1/4 text-3xl opacity-25 select-none">🌿</span>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/50 text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
          Artisan Tea Since 2010
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-[#fdf6e3] leading-tight mb-6 drop-shadow-lg">
          Sip the Story <br />
          <span className="text-[#c9a84c]">of Every Leaf</span>
        </h1>

        <p className="text-lg md:text-xl text-[#d4edd9] mb-10 max-w-2xl mx-auto leading-relaxed">
          Hand-picked from the world&apos;s finest gardens, our teas are crafted to
          bring you comfort, clarity, and a moment of pure bliss in every cup.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="px-8 py-4 rounded-full bg-[#c9a84c] text-[#2d5a3a] font-bold text-lg hover:bg-[#e0bc6a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Our Teas
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-full border-2 border-[#fdf6e3] text-[#fdf6e3] font-bold text-lg hover:bg-[#fdf6e3] hover:text-[#2d5a3a] transition-all duration-300"
          >
            Our Story
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "50+", label: "Tea Varieties" },
            { value: "15", label: "Countries" },
            { value: "10K+", label: "Happy Sippers" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-[#c9a84c]">{value}</div>
              <div className="text-sm text-[#d4edd9] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-14 fill-[#fdf6e3]"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
