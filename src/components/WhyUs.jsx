import { Palette, Zap, Smartphone, Sparkles, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    { icon: Palette, ...t("whyUs.reasons.0") },
    { icon: Zap, ...t("whyUs.reasons.1") },
    { icon: Smartphone, ...t("whyUs.reasons.2") },
    { icon: Sparkles, ...t("whyUs.reasons.3") },
    { icon: MessageCircle, ...t("whyUs.reasons.4") },
  ];

  return (
    <motion.section
      className="relative bg-black py-28 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="mx-auto max-w-6xl" variants={containerVariants}>
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <span className="inline-flex items-center rounded-full border border-cyan-200/50 bg-cyan-200/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all duration-300 hover:border-cyan-200/80 hover:bg-cyan-200/25 hover:text-cyan-50 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            {t("whyUs.badge")}
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            {t("whyUs.title")}
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-zinc-300">
            {t("whyUs.description")}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}