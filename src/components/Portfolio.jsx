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
          <span className="site-eyebrow">
            {t("portfolio.badge")}
          </span>
          <h2 className="site-section-title mt-4 text-white bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            {t("portfolio.title")}
          </h2>
          <p className="site-section-description mt-5 max-w-2xl mx-auto">
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
