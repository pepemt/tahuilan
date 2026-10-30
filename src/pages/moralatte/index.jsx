import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/400-italic.css";
import { EXTRAS, FAVORITES, MENU } from "./menu";

/**
 * Moralatte · coffee, matcha, croissant.
 * Datos de contacto aquí; el menú y los favoritos viven en ./menu.js.
 */
const CONFIG = {
  name: "Moralatte",
  tagline: ["coffee", "matcha", "croissant"],
  address: "Calle Kelvin",
  // TODO: confirmar horario, Instagram y WhatsApp con la cafetería.
  hours: "",
  instagram: "",
  maps: "https://www.google.com/maps/search/?api=1&query=Moralatte+Calle+Kelvin+CDMX",
};

const IMG = "/images/moralatte";

const C = {
  cream: "#f6f1ea",
  paper: "#fdfaf5",
  green: "#1f4a35",
  sage: "#8d9b80",
  brown: "#6b4e38",
  wood: "#b8895c",
  ink: "#2a221d",
  muted: "#7d7168",
};

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const wrap = "mx-auto w-[min(calc(100%-32px),1180px)] md:w-[min(calc(100%-64px),1180px)]";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.32em]";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const MARQUEE = [
  "Matcha ceremonial",
  "Croissants recién horneados",
  "Chai latte",
  "Café de especialidad",
  "Pan de temporada",
  "Ten un lindo día",
];

/** Foto con forma de arco, como los arcos de la fachada. */
function Arch({ src, alt, className = "", position = "center" }) {
  return (
    <div className={`overflow-hidden rounded-t-full ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 hover:scale-105"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

function SectionHead({ kicker, title, children, center }) {
  return (
    <motion.div {...reveal} className={`mb-12 ${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className={eyebrow} style={{ color: C.sage }}>
        {kicker}
      </p>
      <h2
        className="mt-3 text-[clamp(38px,6vw,64px)] leading-[1.02]"
        style={{ ...serif, color: C.green }}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-[17px] leading-relaxed ${center ? "mx-auto" : ""} max-w-[52ch]`} style={{ color: C.muted }}>
          {children}
        </p>
      )}
    </motion.div>
  );
}

const price = (n) => (n ? `$${n}` : "");

/** Un pizarrón del menú: marco de madera y papel claro, como los de la barra. */
function MenuBoard({ section, index }) {
  return (
    <motion.article
      {...reveal}
      transition={{ ...reveal.transition, delay: (index % 3) * 0.08 }}
      id={`menu-${section.id}`}
      className="mb-6 break-inside-avoid rounded-sm p-[10px] shadow-[0_18px_40px_-24px_rgba(60,40,20,.45)]"
      style={{ background: `linear-gradient(135deg, ${C.wood}, #a2744a)` }}
    >
      <div className="rounded-[2px] px-6 py-7 md:px-8" style={{ background: C.paper }}>
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-4xl font-bold uppercase tracking-tight" style={{ ...serif, color: C.ink }}>
            {section.title}
          </h3>
          {section.sizes && (
            <div className="flex gap-0 pb-1 text-[11px] font-semibold tracking-[0.18em]" style={{ color: C.muted }}>
              <span className="w-12 text-right">CH</span>
              <span className="w-12 text-right">GDE</span>
            </div>
          )}
        </div>
        <ul className="mt-5 space-y-3">
          {section.items.map((item) => (
            <li key={item.name} className="flex items-baseline gap-3 text-[15px]" style={{ color: C.ink }}>
              <span className="font-semibold uppercase tracking-wide" style={serif}>
                {item.name}
              </span>
              {section.sizes && (
                <>
                  <span className="min-w-4 flex-1 border-b border-dotted" style={{ borderColor: "#cdbfae" }} />
                  <span className="w-12 text-right tabular-nums" style={serif}>
                    {price(item.ch)}
                  </span>
                  <span className="w-12 text-right font-bold tabular-nums" style={serif}>
                    {price(item.gde)}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function MoralattePage() {
  return (
    <main
      className="min-h-screen overflow-x-clip text-[16px]"
      style={{ background: C.cream, color: C.ink, fontFamily: "'Geist Variable', Inter, sans-serif" }}
    >
      {/* Header */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
        style={{ background: "rgba(246,241,234,.82)", borderColor: "rgba(107,78,56,.12)" }}
      >
        <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
          <a href="#inicio" className="text-2xl tracking-[0.04em]" style={{ ...serif, color: C.green }}>
            MORALATTE
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-medium md:flex" style={{ color: C.brown }}>
            <a href="#favoritos" className="hover:opacity-70">Favoritos</a>
            <a href="#menu" className="hover:opacity-70">Menú</a>
            <a href="#pan" className="hover:opacity-70">Pan</a>
            <a href="#visitanos" className="hover:opacity-70">Visítanos</a>
          </nav>
          <a
            href="#menu"
            className="rounded-full px-5 py-2 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ background: C.green }}
          >
            Ver menú
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative pt-16">
        <div className={`${wrap} grid items-center gap-12 pb-16 pt-10 md:grid-cols-[1fr_1.05fr] md:pb-24 md:pt-16`}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[15px] tracking-[0.12em]"
              style={{ color: C.brown }}
            >
              <span className="h-px w-8" style={{ background: C.brown }} />
              {CONFIG.tagline.join(" · ")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-[clamp(52px,8.5vw,108px)] leading-[0.95]"
              style={{ ...serif, color: C.green }}
            >
              Ten un
              <br />
              <em className="font-normal" style={{ color: C.brown }}>
                lindo día.
              </em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 max-w-[42ch] text-lg leading-relaxed"
              style={{ color: C.muted }}
            >
              Café, matcha y croissants hechos con calma, en una barra bajo arcos en la calle
              Kelvin. Pasa por tu bebida favorita o quédate un rato.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#menu"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(31,74,53,.7)] transition-transform hover:scale-[1.03]"
                style={{ background: C.green }}
              >
                Ver el menú
              </a>
              <a
                href="#visitanos"
                className="rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/60"
                style={{ borderColor: C.brown, color: C.brown }}
              >
                Cómo llegar
              </a>
            </motion.div>
          </div>

          {/* Dos arcos, como la fachada */}
          <div className="relative grid grid-cols-2 items-end gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <Arch
                src={`${IMG}/matcha-fresa.jpg`}
                alt="Matcha latte de fresa"
                className="aspect-[3/5] border-[6px] border-white shadow-xl"
                position="center 40%"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="-translate-y-10"
            >
              <Arch
                src={`${IMG}/caramel-latte.jpg`}
                alt="Caramel latte"
                className="aspect-[3/5] border-[6px] border-white shadow-xl"
                position="center 45%"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-4 left-1/2 flex h-28 w-28 -translate-x-1/2 items-center justify-center rounded-full text-center text-[13px] leading-tight text-white shadow-lg md:h-32 md:w-32"
              style={{ background: C.sage, ...serif }}
            >
              <span>
                <em>hecho</em>
                <br />
                con cariño
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y py-4" style={{ background: C.green, borderColor: C.green }}>
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {[0, 1, 2, 3].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {MARQUEE.map((m) => (
                <span key={m} className="flex items-center">
                  <span className="px-7 text-xl italic text-[#f6f1ea]" style={serif}>
                    {m}
                  </span>
                  <span style={{ color: C.sage }}>✿</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Favoritos */}
      <section id="favoritos" className="py-24 md:py-32">
        <div className={wrap}>
          <SectionHead kicker="Favoritos de la casa" title="Lo que todos piden" center>
            Bebidas preparadas frente a ti, en capas y con mucho cuidado. Estas son las que más
            se repiten en barra.
          </SectionHead>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {FAVORITES.map((f, i) => (
              <motion.article
                key={f.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: (i % 3) * 0.1 }}
                className="group text-center"
              >
                <Arch
                  src={`${IMG}/${f.img}`}
                  alt={f.name}
                  className="mx-auto aspect-[4/5] w-full max-w-[340px] bg-white p-0 shadow-[0_24px_50px_-30px_rgba(60,40,20,.6)]"
                  position="center 35%"
                />
                <h3 className="mt-6 text-2xl" style={{ ...serif, color: C.green }}>
                  {f.name}
                </h3>
                <p className="mx-auto mt-2 max-w-[32ch] text-[15px]" style={{ color: C.muted }}>
                  {f.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Menú */}
      <section id="menu" className="scroll-mt-16 py-24 md:py-32" style={{ background: "#efe7dc" }}>
        <div className={wrap}>
          <SectionHead kicker="Menú" title="Para hoy, ¿qué se te antoja?" center>
            Precios en pesos mexicanos. CH = chico, GDE = grande.
          </SectionHead>

          <nav className="mb-10 flex flex-wrap justify-center gap-2">
            {MENU.map((s) => (
              <a
                key={s.id}
                href={`#menu-${s.id}`}
                className="rounded-full border bg-white/60 px-4 py-2 text-[13px] font-medium transition-colors hover:text-white"
                style={{ borderColor: "rgba(107,78,56,.25)", color: C.brown }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.green)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {MENU.map((section, i) => (
              <MenuBoard key={section.id} section={section} index={i} />
            ))}
          </div>

          <motion.div
            {...reveal}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t pt-6 text-[13px] uppercase tracking-[0.12em]"
            style={{ borderColor: "rgba(107,78,56,.25)", color: C.brown, ...serif }}
          >
            <span className="font-bold">Extras</span>
            {EXTRAS.map((e) => (
              <span key={e.name}>
                {e.name} <span className="font-bold">+${e.price}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pan */}
      <section id="pan" className="py-24 md:py-32">
        <div className={`${wrap} grid items-center gap-12 md:grid-cols-2 md:gap-20`}>
          <motion.div {...reveal} className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full" style={{ background: C.sage, opacity: 0.25 }} />
            <Arch
              src={`${IMG}/croissants.jpg`}
              alt="Croissants de chocolate y almendra"
              className="relative aspect-[4/5] border-[6px] border-white shadow-xl"
              position="center 55%"
            />
          </motion.div>
          <motion.div {...reveal}>
            <p className={eyebrow} style={{ color: C.sage }}>
              Panadería
            </p>
            <h2 className="mt-3 text-[clamp(38px,6vw,64px)] leading-[1.02]" style={{ ...serif, color: C.green }}>
              Croissants que crujen
            </h2>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed" style={{ color: C.muted }}>
              Laminados, dorados y recién salidos. De chocolate, de almendra, rolls de frutos rojos
              y pan que cambia con la temporada. También hay opciones saladas para desayunar o comer.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-[15px]" style={{ color: C.ink }}>
              {["Croissant de chocolate", "Croissant de almendra", "Roll de frutos rojos", "Pan de temporada"].map(
                (p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span style={{ color: C.sage }}>✿</span>
                    {p}
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Ten un lindo día */}
      <section className="relative overflow-hidden py-24 md:py-28" style={{ background: C.green }}>
        <div className={`${wrap} grid items-center gap-12 md:grid-cols-[1.2fr_.8fr]`}>
          <motion.div {...reveal}>
            <p className={eyebrow} style={{ color: C.sage }}>
              Nuestra filosofía
            </p>
            <p className="mt-4 text-[clamp(40px,7vw,84px)] leading-[1] text-[#f6f1ea]" style={serif}>
              Un buen café
              <br />
              <em style={{ color: "#d9c6ad" }}>cambia el día.</em>
            </p>
            <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-[#f6f1ea]/75">
              Por eso cada vaso sale con un mensaje: ten un lindo día. Nos lo tomamos en serio.
            </p>
          </motion.div>
          <motion.div {...reveal} className="mx-auto w-full max-w-[340px]">
            <img
              src={`${IMG}/lindo-dia.jpg`}
              alt="Vaso de Moralatte con el mensaje Ten un lindo día"
              loading="lazy"
              className="w-full rotate-2 rounded-2xl border-[6px] border-white/90 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Visítanos */}
      <section id="visitanos" className="scroll-mt-16 py-24 md:py-32">
        <div className={`${wrap} grid items-center gap-12 md:grid-cols-2 md:gap-20`}>
          <motion.div {...reveal} className="order-2 md:order-1">
            <p className={eyebrow} style={{ color: C.sage }}>
              Visítanos
            </p>
            <h2 className="mt-3 text-[clamp(38px,6vw,64px)] leading-[1.02]" style={{ ...serif, color: C.green }}>
              Te esperamos bajo los arcos
            </h2>
            <div className="mt-8 space-y-4 text-[17px]">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-none" style={{ color: C.sage }} />
                <span>{CONFIG.address}</span>
              </p>
              {CONFIG.hours && (
                <p className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-none" style={{ color: C.sage }} />
                  <span>{CONFIG.hours}</span>
                </p>
              )}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={CONFIG.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                style={{ background: C.green }}
              >
                Abrir en Google Maps <ArrowUpRight className="h-4 w-4" />
              </a>
              {CONFIG.instagram && (
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold"
                  style={{ borderColor: C.brown, color: C.brown }}
                >
                  Instagram <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
          <motion.div {...reveal} className="order-1 mx-auto w-full max-w-[460px] md:order-2">
            <Arch
              src={`${IMG}/fachada.jpg`}
              alt="Fachada de Moralatte en calle Kelvin"
              className="aspect-[4/5] border-[6px] border-white shadow-xl"
              position="center 60%"
            />
          </motion.div>
        </div>
      </section>

      <footer className="border-t py-12" style={{ borderColor: "rgba(107,78,56,.15)" }}>
        <div className={`${wrap} flex flex-col items-center gap-5 text-center`}>
          <div>
            <p className="text-4xl tracking-[0.04em]" style={{ ...serif, color: C.green }}>
              MORALATTE
            </p>
            <p className="mt-1 flex items-center justify-center gap-2 text-[15px]" style={{ color: C.brown }}>
              <span className="h-px w-6" style={{ background: C.brown }} />
              {CONFIG.tagline.join(" · ")}
              <span className="h-px w-6" style={{ background: C.brown }} />
            </p>
          </div>
          <a
            href="https://tahuilan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-[11px] uppercase tracking-[0.18em]"
            style={{ color: C.muted }}
          >
            Created by{" "}
            <span className="font-bold transition-colors group-hover:opacity-70" style={{ color: C.green }}>
              tahuilan.com
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}
