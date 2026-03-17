import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();
  const features = t("serviceItems");

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
            <Badge className="site-eyebrow border-cyan-200/50 bg-cyan-200/15 shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all duration-300 hover:border-cyan-200/80 hover:bg-cyan-200/25 hover:text-cyan-50 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
              {t("services.badge")}
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="flex max-w-2xl flex-col gap-3">
            <h2 className="site-section-title text-white">
              {t("services.title")}
            </h2>
            <p className="site-section-description text-white/70">
              {t("services.description")}
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
                      <p className="site-card-title text-white transition-colors duration-300 group-hover:text-white/95">
                        {feature.title}
                      </p>
                      <p className="site-card-text text-zinc-200 transition-colors duration-300 group-hover:text-white/80">
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