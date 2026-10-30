import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import { CONFIG, IMG, SOCIALS, display, gothic } from "./shared";

/** Linktree de Swagger: la página para poner en la bio de sus redes. */
export default function ElysiumLinksPage() {
  const item = (i) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.25 + i * 0.08, ease: "easeOut" },
  });

  return (
    <main
      className="relative min-h-[100svh] overflow-hidden bg-[#070606] px-4 py-14 text-[#f5efe9] selection:bg-[#e3192b]"
      style={{ fontFamily: "'Geist Variable', Inter, sans-serif" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(227,25,43,.28), transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(227,25,43,.12), transparent 70%)",
        }}
      />
      <img
        src={`${IMG}/logo.jpg`}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(140vw,900px)] -translate-x-1/2 -translate-y-1/2 opacity-[.06] mix-blend-lighten"
      />

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-full bg-[#e3192b]/30 blur-2xl" />
          <img
            src={`${IMG}/logo.jpg`}
            alt={`Logo de ${CONFIG.program}`}
            className="relative h-32 w-32 rounded-full border-2 border-[#e3192b] object-cover shadow-[0_0_40px_rgba(227,25,43,.45)]"
          />
        </motion.div>

        <motion.h1 {...item(0)} className="mt-6 text-5xl" style={gothic}>
          {CONFIG.program}
        </motion.h1>
        <motion.p {...item(1)} className="mt-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#e3192b]">
          Coaching online 1:1 · by {CONFIG.coach}
        </motion.p>
        <motion.p {...item(2)} className="mt-3 max-w-[34ch] text-sm text-[#b3a9a3]">
          Estudiante de Ciencias del Deporte y competidor. Esto no es para tibios.
        </motion.p>

        <div className="mt-9 flex w-full flex-col gap-3">
          {/* Destacado: la landing del programa */}
          <motion.a
            {...item(3)}
            href="/Elysium"
            className="group relative flex items-center gap-4 overflow-hidden rounded-md border border-[#e3192b] bg-[#e3192b]/15 p-3 pr-5 text-left shadow-[0_0_40px_rgba(227,25,43,.25)] transition-all hover:-translate-y-0.5 hover:bg-[#e3192b]/25"
          >
            <img
              src={`${IMG}/escenario.jpg`}
              alt=""
              className="h-16 w-16 flex-none rounded object-cover object-[center_30%]"
            />
            <span className="flex-1">
              <span className="block text-2xl uppercase leading-none" style={display}>
                Conoce el programa
              </span>
              <span className="mt-1 block text-xs text-[#b3a9a3]">
                Entrenamiento, nutrición y seguimiento
              </span>
            </span>
            <ArrowUpRight className="h-5 w-5 flex-none text-[#e3192b] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>

          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              {...item(4 + i)}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-md border border-white/10 bg-[#110d0d]/80 p-3 pr-5 text-left backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#e3192b]/70 hover:shadow-[0_10px_30px_-10px_rgba(227,25,43,.5)]"
            >
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded bg-black/50 text-[#f5efe9] transition-colors group-hover:bg-[#e3192b]">
                <Icon name={s.name} className="h-7 w-7" />
              </span>
              <span className="flex-1">
                <span className="block text-2xl uppercase leading-none" style={display}>
                  {s.label}
                </span>
                <span className="mt-1 block text-xs text-[#b3a9a3]">{s.handle}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 flex-none text-[#6e6462] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e3192b]" />
            </motion.a>
          ))}
        </div>

        <motion.a
          {...item(4 + SOCIALS.length)}
          href="https://tahuilan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 text-[11px] uppercase tracking-[0.18em] text-[#6e6462]"
        >
          Created by{" "}
          <span className="font-bold text-[#f5efe9] transition-colors group-hover:text-[#ff2d3d]">
            tahuilan.com
          </span>
        </motion.a>
      </div>
    </main>
  );
}
