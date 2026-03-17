import { FeatureSteps } from "./ui/feature-section";

const features = [
  {
    step: "Step 01",
    title: "Tell us about your business",
    content:
      "Share your goals, audience, and brand style so we can create a website that fits your business.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 02",
    title: "We design your website",
    content:
      "We create a custom design that reflects your brand and helps turn visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 03",
    title: "You review and request changes",
    content:
      "Review your website, share feedback, and request adjustments until everything feels right.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 04",
    title: "We launch your website",
    content:
      "We launch your fast, polished, and mobile-friendly website so your business is ready to stand out online.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-black px-6 py-24 scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
            How It Works
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl lg:text-5xl bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            How we build your website
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
            From first idea to final launch, we make the process simple, clear,
            and focused on your business.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <FeatureSteps
          features={features}
          className="!px-0 !pt-0"
          title=""
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
      </div>
    </section>
  );
}