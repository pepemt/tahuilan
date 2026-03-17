import { Palette, Zap, Smartphone, Sparkles, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Clean, contemporary designs that make your business look credible and professional.",
  },
  {
    icon: Zap,
    title: "Fast Websites",
    description:
      "Optimized for speed so visitors stay engaged instead of leaving your site.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Fully responsive layouts that look perfect on phones, tablets, and desktops.",
  },
  {
    icon: Sparkles,
    title: "Professional Experience",
    description:
      "Thoughtful interactions and polished visuals that build trust with your audience.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Simple and transparent communication throughout the entire project.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-black py-28 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center rounded-full border border-cyan-200/50 bg-cyan-200/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all duration-300 hover:border-cyan-200/80 hover:bg-cyan-200/25 hover:text-cyan-50 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            Why Choose Us
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            Built for businesses that want to stand out
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-zinc-300">
            We focus on what matters most: creating websites that make your
            business look professional, fast, and trustworthy online.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative overflow-hidden flex gap-4 items-start rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-[-2px] hover:border-cyan-200/50 hover:bg-cyan-200/14 hover:shadow-[0_0_28px_rgba(56,189,248,0.42)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-200/15 border border-cyan-200/30 transition-colors group-hover:bg-cyan-200/25">
                <r.icon className="h-5 w-5 text-cyan-200" />
              </div>

              <div className="relative">
                <h3 className="text-white font-medium mb-1 transition-colors duration-300 group-hover:text-cyan-100">
                  {r.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}