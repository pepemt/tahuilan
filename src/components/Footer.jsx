import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const footerVariants = {
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

export default function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      className="relative bg-black border-t border-zinc-900 py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-bold text-lg tracking-tight">
              tahuilan<span className="text-green-500">.</span>com
            </span>
            <p className="text-zinc-500 text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              {t("footer.home")}
            </a>
            <a
              href="#services"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              {t("footer.services")}
            </a>
            <a
              href="#portfolio"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              {t("footer.portfolio")}
            </a>
            <a
              href="#contact"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              {t("footer.contact")}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} tahuilan.com. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
