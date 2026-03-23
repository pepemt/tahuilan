import {
  ArrowRight,
  ChevronLeft,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function GymCoachPortfolioPage({ project }) {
  const { t } = useLanguage();
  const copy = t("portfolio.pages.gymCoach") || {};
  const whatWeBuilt = copy.whatWeBuilt ?? [];
  const results = copy.results ?? [];
  const challenges = copy.challenges ?? [];
  const steps = copy.processSteps ?? [];
  const faqs = copy.faq ?? [];
  const plans = copy.plans ?? [];
  const safeTitle = project?.title || t("portfolio.title");

  const { scrollY } = useScroll();
  /** Al bajar la página, la imagen sube (y negativo) y se revela el cuerpo de la escultura. */
  const sculptureY = useTransform(scrollY, [0, 5200], [0, -780]);
  const smoothSculptureY = useSpring(sculptureY, {
    stiffness: 100,
    damping: 28,
    mass: 0.65,
  });

  const sectionBackdrop =
    "relative z-10 bg-gradient-to-l from-[#0a0a0a]/0 via-[#0a0a0a]/70 to-[#0a0a0a]/95";

  const linkProps = (url = "/") => {
    const isExternal = /^(https?:)?\/\//.test(url);
    return {
      href: url,
      target: isExternal ? "_blank" : undefined,
      rel: isExternal ? "noopener noreferrer" : undefined,
    };
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: custom * 0.07,
        ease: "easeOut",
      },
    }),
  };

  const revealSectionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.18 },
    variants: sectionVariants,
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#0a0a0a] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 hidden md:block">
        <div className="absolute right-0 top-0 h-full w-[min(64vw,700px)] overflow-hidden">
          <motion.div
            style={{ y: smoothSculptureY }}
            className="relative -mt-[12vh] h-[300vh] min-h-[1850px] w-full"
          >
            <img
              src="/images/discipline.jpeg"
              alt="Discipline"
              className="h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/0 via-[#0a0a0a]/35 to-[#0a0a0a]/78" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </motion.div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[min(64vw,700px)] bg-gradient-to-l from-[#0a0a0a]/0 via-[#0a0a0a]/55 to-[#0a0a0a]/95" />
      </div>
      <motion.section
        {...revealSectionProps}
        className={`relative z-10 h-[90vh] w-full overflow-hidden ${sectionBackdrop}`}
      >
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-12 pt-8 md:pb-16">
          <a
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ChevronLeft className="size-4" />
            {t("portfolio.backToPortfolio")}
          </a>

          <div className="max-w-3xl">
            <span className="inline-flex text-[11px] uppercase tracking-[0.28em] text-lime-300">
              {copy.eyebrow}
            </span>

            <h1 className="mt-4 text-5xl font-black uppercase leading-none tracking-[-0.05em] text-white md:text-7xl">
              {copy.heroTitle || safeTitle}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
              {copy.heroDescription || project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a
                {...linkProps(copy.ctaPrimaryUrl || "/#contact")}
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
                whileHover={{ scale: 1.05, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                {copy.ctaPrimaryLabel}
                <ArrowRight className="size-4" />
              </motion.a>

              <motion.a
                {...linkProps(copy.ctaSecondaryUrl || "#plans")}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                whileHover={{ scale: 1.05, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                {copy.ctaSecondaryLabel}
              </motion.a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-0 border-t border-white/10 pt-6 sm:grid-cols-3">
              {(results.length ? results : []).slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  className="border-b border-white/10 py-4 sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.05em] text-white md:text-4xl">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

        <motion.section {...revealSectionProps} className={`${sectionBackdrop} mx-auto max-w-6xl px-6 pb-16 md:pb-20`}>
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              {copy.challengeTitle}
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
              {copy.challengeHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
              {copy.challengeDescription || project.description}
            </p>
          </div>

          <div className="mt-10 grid gap-0 border-t border-white/10 md:grid-cols-2">
            {challenges.length > 0 ? (
              challenges.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  className="border-b border-white/10 py-6 md:pr-8"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </motion.article>
              ))
          ) : (
            <p className="border-b border-white/10 py-6 text-sm leading-7 text-zinc-400">
              {t("portfolio.description")}
            </p>
          )}
        </div>
      </motion.section>

      <motion.section {...revealSectionProps} className={`${sectionBackdrop} mx-auto max-w-6xl px-6 pb-16 md:pb-20`}>
        <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
          {copy.differenceTitle}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] border border-white/10 bg-[#111111] p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              {copy.differenceLeftTitle}
            </h3>

            <ul className="mt-6 space-y-4">
              {(copy.differenceLeftItems ?? []).map((item) => (
                <li
                  key={item}
                  className="border-b border-white/6 pb-4 text-sm leading-7 text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] border border-lime-300/15 bg-lime-300/[0.06] p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-[0.2em] text-lime-300">
              {copy.differenceRightTitle}
            </h3>

            <ul className="mt-6 space-y-4">
              {(copy.differenceRightItems ?? []).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-lime-300/10 pb-4 text-sm leading-7 text-white"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-lime-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </motion.section>

      <motion.section {...revealSectionProps} className={`${sectionBackdrop} mx-auto grid max-w-6xl gap-10 px-6 pb-16 md:pb-20 lg:grid-cols-[1.1fr_1fr]`}>
        <article className="rounded-[28px] border border-white/10 bg-[#111111] p-6 md:p-8">
          <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
            <Trophy className="size-4 text-lime-300" />
            {copy.aboutTitle}
          </div>

          <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-white md:text-4xl">
            {copy.aboutText}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            {copy.aboutSummary || project.description}
          </p>

          <ul className="mt-6 space-y-3">
            {(copy.aboutBullets ?? []).map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-zinc-200"
              >
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-lime-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[28px] border border-white/10 bg-[#0f0f0f] p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
          {copy.whatWeBuiltTitle}
          </p>

          <div className="mt-6 space-y-0 border-t border-white/10">
            {(whatWeBuilt.length ? whatWeBuilt : []).map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index}
                className={`grid gap-3 py-5 ${
                  index !== whatWeBuilt.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                </div>
                <p className="text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </article>
      </motion.section>

      <motion.section {...revealSectionProps} className={`${sectionBackdrop} mx-auto max-w-6xl px-6 pb-16 md:pb-20`}>
        <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
          {copy.resultsTitle}
        </p>

        <div className="mt-8 grid gap-0 border-t border-white/10 sm:grid-cols-3">
          {(results.length ? results : []).slice(0, 3).map((item, index) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                {item.label}
              </p>
              <p className="mt-3 text-5xl font-black tracking-[-0.06em] text-white md:text-6xl">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="plans" {...revealSectionProps} className={`${sectionBackdrop} mx-auto max-w-6xl px-6 pb-16 md:pb-20`}>
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            {copy.plansTitle}
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
            {copy.plansHeading}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {(plans.length ? plans : []).map((plan, index) => (
            <motion.article
              key={plan.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className={`rounded-[28px] border p-6 md:p-8 ${
                index === 0
                  ? "border-white/10 bg-[#111111]"
                  : "border-lime-300/15 bg-lime-300/[0.05]"
              }`}
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                  {plan.badge}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">{plan.title}</h3>
              <p className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">
                {plan.price}
              </p>
              <p className="mt-1 text-sm text-zinc-400">{plan.meta}</p>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                {plan.highlight}
              </p>

              <ul className="mt-6 space-y-3">
                {(plan.features ?? []).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-7 text-zinc-200"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-lime-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealSectionProps} className={`${sectionBackdrop} mx-auto max-w-6xl px-6 pb-16 md:pb-20`}>
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            {copy.processTitle}
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
            {copy.processHeading}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {steps.length ? (
            steps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="rounded-[28px] border border-white/10 bg-[#111111] p-6"
              >
                <p className="text-4xl font-black tracking-[-0.06em] text-lime-300/90">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {step.text}
                </p>
              </motion.article>
            ))
          ) : (
            <p className="text-sm leading-7 text-zinc-400">
              {copy.processFallback}
            </p>
          )}
        </div>
      </motion.section>

      <motion.section {...revealSectionProps} className={`${sectionBackdrop} mx-auto max-w-6xl px-6 pb-16 md:pb-20`}>
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            {copy.faqTitle}
          </p>
        </div>

        <div className="mt-8 border-t border-white/10">
          {(faqs.length ? faqs : []).map((faq, index) => (
            <motion.div
              key={faq.q}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="group border-b border-white/10 py-5"
            >
              <details className="w-full">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  <span>{faq.q}</span>
                  <span className="text-lime-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                  {faq.a}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealSectionProps} className={`${sectionBackdrop} mx-auto max-w-6xl px-6 pb-24`}>
        <div className="rounded-[32px] border border-white/10 bg-[#111111] p-8 md:p-12">
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            {copy.ctaEyebrow}
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
            {copy.ctaTitle}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            {copy.ctaText || project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <motion.a
              {...linkProps(copy.ctaPrimaryUrl || "/#contact")}
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
              whileHover={{ scale: 1.05, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.97 }}
            >
            {copy.ctaPrimaryLabel}
              <ArrowRight className="size-4" />
            </motion.a>

            <motion.a
              {...linkProps(copy.ctaSecondaryUrl || "/#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/5"
              whileHover={{ scale: 1.05, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.97 }}
            >
            {copy.ctaSecondaryLabel}
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}