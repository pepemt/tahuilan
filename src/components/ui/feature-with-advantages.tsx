import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";

const features = [
  {
    title: "Business Websites",
    description:
      "Professional websites that build trust and establish your business online.",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to turn visitors into clients.",
  },
  {
    title: "Portfolio Websites",
    description:
      "Showcase your work with a clean, modern, and credible portfolio.",
  },
  {
    title: "Website Redesign",
    description:
      "Transform outdated websites into fast, modern, mobile-first experiences.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improve speed and Core Web Vitals so your site performs better.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function Feature() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge className="inline-flex items-center rounded-full border border-cyan-200/50 bg-cyan-200/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all duration-300 hover:border-cyan-200/80 hover:bg-cyan-200/25 hover:text-cyan-50 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
              Services
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Websites built for real businesses
            </h2>
            <p className="text-base leading-7 text-white/60 md:text-lg">
              Running a business is already hard. We make your website simple,
              fast, and professional.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid w-full grid-cols-1 gap-x-10 gap-y-10 pt-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
              >
                <GlowCard
                  glowColor="purple"
                  customSize
                  className="group !aspect-auto !grid-rows-none !p-5 !gap-0 flex items-start transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 group-hover:bg-white/10"
                    >
                      <Check className="h-3.5 w-3.5 text-white/90" />
                    </motion.div>

                    <div className="flex flex-col gap-2">
                      <p className="text-base font-medium text-white transition-colors duration-300 group-hover:text-white/95">
                        {feature.title}
                      </p>
                      <p className="text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export { Feature };