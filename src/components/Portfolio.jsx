import ScrollXCarouselDemo from "./ui/scroll-x-carousel-demo";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="portfolio"
      className="relative bg-slate-950 py-14 px-6 scroll-mt-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div className="max-w-7xl mx-auto" variants={sectionVariants}>
        <motion.div className="text-center mb-16" variants={sectionHeaderVariants}>
          <span className="inline-flex items-center rounded-full border border-cyan-200/45 bg-cyan-200/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.35)]">
            {t("portfolio.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            {t("portfolio.title")}
          </h2>
          <p className="text-zinc-300 mt-5 max-w-2xl mx-auto">
            {t("portfolio.description")}
          </p>
        </motion.div>
        <motion.div variants={sectionHeaderVariants}>
          <ScrollXCarouselDemo />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
