import { FeatureSteps } from "./ui/feature-section";
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Process() {
  const { t } = useLanguage();
  const features = [
    {
      ...t("process.steps.0"),
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    },
    {
      ...t("process.steps.1"),
      image:
        "https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop",
    },
    {
      ...t("process.steps.2"),
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      ...t("process.steps.3"),
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <motion.section
      id="process"
      className="relative bg-black px-6 py-24 scroll-mt-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div className="mx-auto max-w-6xl" variants={sectionVariants}>
        <motion.div className="mb-8 text-center" variants={sectionHeaderVariants}>
          <span className="site-eyebrow border-cyan-200/25 bg-cyan-200/10 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
            {t("process.badge")}
          </span>

          <h2 className="site-section-title mx-auto mt-4 max-w-3xl bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            {t("process.title")}
          </h2>

          <p className="site-section-description mx-auto mt-5 max-w-2xl">
            {t("process.description")}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto max-w-7xl"
        variants={sectionHeaderVariants}
      >
        <FeatureSteps
          features={features}
          className="!px-0 !pt-0"
          title=""
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
      </motion.div>
    </motion.section>
  );
}