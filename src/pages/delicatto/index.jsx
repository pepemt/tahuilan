import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Coffee, Croissant, MapPin } from "lucide-react";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import DemoBadge from "@/components/DemoBadge";
import { MENU } from "./menu";

/**
 * Delicatto · Coffee and Bakery.
 * Datos de contacto aquí; el menú vive en ./menu.js.
 */
const CONFIG = {
  name: "Delicatto",
  // TODO: confirmar dirección, horario, Instagram y WhatsApp con la cafetería.
  address: "",
  hours: "",
  instagram: "",
  maps: "https://www.google.com/maps/search/?api=1&query=Delicatto+Coffee+and+Bakery",
  // Burbuja de "sitio demo" abajo a la izquierda. false cuando sea el sitio oficial.
  demo: true,
};

const IMG = "/images/delicatto";

const C = {
  cream: "#fbf4e9",
  sand: "#f3e6d3",
  brown: "#76452a",
  dark: "#3b2417",
  olive: "#5c6b3a",
  honey: "#d99a4e",
  muted: "#8a7363",
};

const font = { fontFamily: "'Outfit', 'Geist Variable', sans-serif" };
const wrap = "mx-auto w-[min(calc(100%-32px),1200px)] md:w-[min(calc(100%-64px),1200px)]";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

/** Ícono de Delicatto (cuadro redondeado con las hojas y los granos). */
function LogoMark({ className = "h-9 w-9", color = C.brown }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" className={className} aria-hidden>
      <rect x="6" y="6" width="88" height="88" rx="18" />
      <path d="M22 52 A28 26 0 0 0 78 52 Q55 52 50 72 Q45 52 22 52 Z" />
      <path d="M33 38 A17 14 0 0 0 67 38 Q54 38 50 50 Q46 38 33 38 Z" />
      <g fill={color} stroke="none">
        <circle cx="50" cy="17" r="3.4" />
        <circle cx="43" cy="23" r="3.4" />
        <circle cx="57" cy="23" r="3.4" />
        <circle cx="50" cy="29" r="3.4" />
      </g>
    </svg>
  );
}

function Kicker({ children, light }) {
  return (
    <p
      className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.24em]"
      style={{ color: light ? C.honey : C.olive }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.honey }} />
      {children}
    </p>
  );
}

function Title({ children, light, className = "" }) {
  return (
    <h2
      className={`mt-4 text-[clamp(36px,5.5vw,60px)] font-medium leading-[1.02] tracking-[-0.02em] ${className}`}
      style={{ color: light ? C.cream : C.dark }}
    >
      {children}
    </h2>
  );
}

const PERKS = [
  { icon: Coffee, title: "Café de especialidad", text: "Espresso bien hecho, de la barra a tu taza." },
  { icon: Croissant, title: "Panadería de la casa", text: "Brownies, pan de limón y croissants cada día." },
  { icon: BookOpen, title: "Un lugar para quedarte", text: "Libros, juegos de mesa y un segundo piso tranquilo." },
];

/** Menú con pestañas: cada categoría muestra su foto y sus productos. */
function MenuTabs() {
  const [active, setActive] = useState(MENU[0].id);
  const section = MENU.find((s) => s.id === active);

  return (
    <div>
      <div className="mb-10 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden">
        {MENU.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className="flex-none rounded-full border px-5 py-2.5 text-sm font-medium transition-all"
            style={
              s.id === active
                ? { background: C.brown, borderColor: C.brown, color: C.cream }
                : { borderColor: "rgba(118,69,42,.25)", color: C.brown }
            }
          >
            {s.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid items-center gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-14"
        >
          <div className="overflow-hidden rounded-[28px] shadow-[0_30px_60px_-35px_rgba(59,36,23,.6)]">
            <img
              src={`${IMG}/${section.img}`}
              alt={section.title}
              className="aspect-[4/5] w-full object-cover md:aspect-[4/4.6]"
            />
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight" style={{ color: C.dark }}>
              {section.title}
            </h3>
            <ul className="mt-6 divide-y" style={{ borderColor: "rgba(118,69,42,.15)" }}>
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-6 py-5"
                  style={{ borderColor: "rgba(118,69,42,.15)" }}
                >
                  <div>
                    <p className="text-xl font-medium" style={{ color: C.dark }}>
                      {item.name}
                    </p>
                    <p className="mt-1 text-[15px] font-light" style={{ color: C.muted }}>
                      {item.text}
                    </p>
                  </div>
                  {item.price && (
                    <span className="text-xl font-medium tabular-nums" style={{ color: C.brown }}>
                      ${item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function DelicattoPage() {
  return (
    <main
      className="min-h-screen overflow-x-clip text-[16px]"
      style={{ ...font, background: C.cream, color: C.dark }}
    >
      {/* Header */}
      <header
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
        style={{ background: "rgba(251,244,233,.85)" }}
      >
        <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
          <a href="#inicio" className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="text-2xl font-medium tracking-tight" style={{ color: C.brown }}>
              Delicatto
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-[14px] md:flex" style={{ color: C.brown }}>
            <a href="#nosotros" className="hover:opacity-70">Nosotros</a>
            <a href="#menu" className="hover:opacity-70">Menú</a>
            <a href="#quedate" className="hover:opacity-70">El lugar</a>
            <a href="#visitanos" className="hover:opacity-70">Visítanos</a>
          </nav>
          <a
            href="#menu"
            className="rounded-full px-5 py-2 text-[14px] font-medium transition-transform hover:scale-[1.03]"
            style={{ background: C.brown, color: C.cream }}
          >
            Ver menú
          </a>
        </div>
      </header>

      {/* Hero: foto grande de la fachada con la tarjeta encima */}
      <section id="inicio" className="pt-20">
        <div className={wrap}>
          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px]">
            <motion.img
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              src={`${IMG}/fachada.jpg`}
              alt="Fachada de Delicatto Coffee and Bakery"
              className="h-[78svh] min-h-[520px] w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b2417]/80 via-[#3b2417]/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b2417]/55 via-[#3b2417]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[13px] font-medium uppercase tracking-[0.26em]"
                style={{ color: C.honey }}
              >
                Coffee and Bakery
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-3 max-w-[14ch] text-[clamp(44px,7.5vw,96px)] font-medium leading-[0.98] tracking-[-0.03em]"
                style={{ color: C.cream }}
              >
                Pequeños placeres, todos los días.
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <a
                  href="#menu"
                  className="rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform hover:scale-[1.03]"
                  style={{ background: C.cream, color: C.brown }}
                >
                  Ver el menú
                </a>
                <a
                  href="#visitanos"
                  className="rounded-full border px-7 py-3.5 text-[15px] font-medium transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(251,244,233,.6)", color: C.cream }}
                >
                  Cómo llegar
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que nos hace Delicatto */}
      <section id="nosotros" className="scroll-mt-16 py-20 md:py-28">
        <div className={wrap}>
          <div className="grid gap-4 md:grid-cols-3">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.1 }}
                className="rounded-[24px] p-7"
                style={{ background: C.sand }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: C.cream, color: C.brown }}
                >
                  <p.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl font-medium">{p.title}</h3>
                <p className="mt-1.5 font-light" style={{ color: C.muted }}>
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid items-center gap-12 md:mt-28 md:grid-cols-2 md:gap-20">
            <motion.div {...reveal} className="relative">
              <img
                src={`${IMG}/barista.jpg`}
                alt="Barista preparando un espresso"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[28px] object-cover"
              />
            </motion.div>
            <motion.div {...reveal}>
              <Kicker>De la barra</Kicker>
              <Title>Hecho con calma, servido con cariño</Title>
              <p className="mt-5 max-w-[46ch] text-[17px] font-light leading-relaxed" style={{ color: C.muted }}>
                En Delicatto cada espresso se muele, se prensa y se extrae al momento. Lo
                acompañamos con pan que horneamos aquí mismo, para que tu café de todos los días
                tenga algo especial.
              </p>
              <a
                href="#menu"
                className="mt-8 inline-flex items-center gap-2 font-medium"
                style={{ color: C.brown }}
              >
                Explorar el menú <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menú */}
      <section id="menu" className="scroll-mt-16 py-20 md:py-28" style={{ background: C.sand }}>
        <div className={wrap}>
          <motion.div {...reveal} className="mx-auto mb-12 max-w-2xl text-center">
            <Kicker>Nuestro menú</Kicker>
            <Title>¿Qué se te antoja hoy?</Title>
          </motion.div>
          <MenuTabs />
        </div>
      </section>

      {/* Galería en mosaico */}
      <section className="py-20 md:py-28">
        <div className={wrap}>
          <motion.div {...reveal} className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Kicker>Recién salido</Kicker>
              <Title>Para antojarse</Title>
            </div>
            <p className="max-w-[36ch] font-light" style={{ color: C.muted }}>
              Del horno y de la barra, todos los días.
            </p>
          </motion.div>
          <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
            {[
              { src: "latte-frio.jpg", alt: "Lattes fríos para llevar", span: "row-span-2" },
              { src: "croissant-pollo.jpg", alt: "Croissant de pollo", span: "row-span-2" },
              { src: "pan-frances.jpg", alt: "Pan francés con frutos rojos", span: "col-span-2" },
              { src: "brownies.jpg", alt: "Brownies en la barra", span: "col-span-2" },
            ].map((g, i) => (
              <motion.div
                key={g.src}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.06 }}
                className={`overflow-hidden rounded-[22px] ${g.span}`}
              >
                <img
                  src={`${IMG}/${g.src}`}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quédate un rato */}
      <section id="quedate" className="scroll-mt-16 py-20 md:py-28" style={{ background: C.olive }}>
        <div className={`${wrap} grid items-center gap-12 md:grid-cols-2 md:gap-20`}>
          <motion.div {...reveal}>
            <Kicker light>El lugar</Kicker>
            <Title light>Quédate un rato más</Title>
            <p className="mt-5 max-w-[46ch] text-[17px] font-light leading-relaxed text-[#fbf4e9]/80">
              Paredes de ladrillo blanco, luz cálida y un segundo piso para trabajar, leer o
              platicar sin prisa. Hay libros y juegos de mesa para cuando el café se alarga, y
              mesitas afuera para los días de sol.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Segundo piso", "Libros y juegos de mesa", "Mesas afuera", "Luz natural"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{ borderColor: "rgba(251,244,233,.3)", color: C.cream }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...reveal} className="mx-auto w-full max-w-[480px]">
            <img
              src={`${IMG}/avocado-toast.jpg`}
              alt="Clienta disfrutando un avocado toast"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[28px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Visítanos */}
      <section id="visitanos" className="scroll-mt-16 py-20 md:py-28">
        <div className={wrap}>
          <motion.div
            {...reveal}
            className="grid overflow-hidden rounded-[32px] md:grid-cols-2"
            style={{ background: C.sand }}
          >
            <img
              src={`${IMG}/terraza.jpg`}
              alt="Entrada de Delicatto con mesitas afuera"
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover"
            />
            <div className="flex flex-col justify-center p-8 md:p-14">
              <Kicker>Visítanos</Kicker>
              <Title>Te guardamos una mesa</Title>
              {CONFIG.address && (
                <p className="mt-6 flex items-start gap-3 text-[17px]">
                  <MapPin className="mt-1 h-5 w-5 flex-none" style={{ color: C.olive }} />
                  {CONFIG.address}
                </p>
              )}
              {CONFIG.hours && (
                <p className="mt-3 text-[17px] font-light" style={{ color: C.muted }}>
                  {CONFIG.hours}
                </p>
              )}
              <p className="mt-5 max-w-[40ch] font-light" style={{ color: C.muted }}>
                Pasa por tu café para llevar o quédate a desayunar. Te esperamos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CONFIG.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform hover:scale-[1.03]"
                  style={{ background: C.brown, color: C.cream }}
                >
                  Abrir en Google Maps <ArrowUpRight className="h-4 w-4" />
                </a>
                {CONFIG.instagram && (
                  <a
                    href={CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-medium"
                    style={{ borderColor: C.brown, color: C.brown }}
                  >
                    Instagram <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="pb-12 pt-4">
        <div className={`${wrap} flex flex-col items-center gap-4 text-center`}>
          <LogoMark className="h-12 w-12" />
          <div>
            <p className="text-3xl font-medium tracking-tight" style={{ color: C.brown }}>
              Delicatto
            </p>
            <p className="text-sm font-light" style={{ color: C.muted }}>
              Coffee and Bakery
            </p>
          </div>
          <a
            href="https://tahuilan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 text-[11px] uppercase tracking-[0.18em]"
            style={{ color: C.muted }}
          >
            Created by{" "}
            <span className="font-semibold transition-opacity group-hover:opacity-70" style={{ color: C.brown }}>
              tahuilan.com
            </span>
          </a>
        </div>
      </footer>

      {CONFIG.demo && <DemoBadge accent={C.honey} link={C.brown} text={C.muted} />}
    </main>
  );
}
