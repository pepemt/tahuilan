import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.process"), href: "#process" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  const languageButtonLabel = lang === "en" ? "🇲🇽 ES" : "🇺🇸 EN";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-white font-bold text-lg tracking-tight"
        >
          tahuilan<span className="text-green-500">.</span>com
        </a>

        <div className="hidden md:flex items-center gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            {t("nav.cta")}
          </a>
          <button
            onClick={toggleLanguage}
            className="text-xs border border-white/20 bg-white/10 px-3 py-2 rounded-full font-medium text-white uppercase transition-colors hover:bg-white/20"
            aria-label={`Cambiar idioma a ${lang === "en" ? "ES" : "EN"}`}
          >
            <span className="inline-flex items-center gap-1">{languageButtonLabel}</span>
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium text-center hover:bg-zinc-200 transition-colors mt-2"
            >
              {t("nav.cta")}
            </a>
            <button
              onClick={toggleLanguage}
              className="text-sm border border-white/20 bg-white/10 px-4 py-2 rounded-full font-medium text-white uppercase text-center transition-colors hover:bg-white/20"
            >
              <span className="inline-flex items-center gap-1">
                {languageButtonLabel}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
