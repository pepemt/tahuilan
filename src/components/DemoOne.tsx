import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DemoOne() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden px-4">
      <WebGLShader />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto w-full max-w-4xl"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="rounded-[28px] border border-white/10 bg-black/35 p-2 backdrop-blur-xl shadow-[0_18px_80px_-46px_rgba(255,255,255,0.45)]"
        >
          <main className="rounded-[24px] border border-white/10 bg-black/35 px-6 py-12 md:px-10 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                variants={itemVariants}
                className="text-balance text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {t("hero.title")}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base md:text-lg"
              >
                {t("hero.subtitle")}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-center backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="text-xs font-medium text-green-400">
                    {t("hero.badge")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex w-full justify-center sm:w-auto"
                >
                  <span className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/15 px-8 py-3 text-sm font-semibold text-white backdrop-blur-xl shadow-[0_14px_35px_-20px_rgba(255,255,255,0.45)] transition-all duration-300 hover:border-white/30 hover:bg-white/20 sm:w-auto">
                    {t("hero.ctaPrimary")}
                  </span>
                </motion.a>

                <motion.a
                  href="#portfolio"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:w-auto"
                >
                  {t("hero.ctaSecondary")}
                </motion.a>
              </motion.div>
            </div>
          </main>
        </motion.div>
      </motion.div>
    </section>
  );
}