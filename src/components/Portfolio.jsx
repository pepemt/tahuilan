import ScrollXCarouselDemo from "./ui/scroll-x-carousel-demo";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-slate-950 py-14 px-6 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-cyan-200/45 bg-cyan-200/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.35)]">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-zinc-300 mt-5 max-w-2xl mx-auto">
            Some examples of projects and experiences we build for real businesses.
          </p>
        </div>
        <ScrollXCarouselDemo />
      </div>
    </section>
  );
}
