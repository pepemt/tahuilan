import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";

export default function PortfolioCaseStudy({ project }) {
  const { t } = useLanguage();

  const features = project.services ?? [];
  const safeTitle = project.title || t("portfolio.badge");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative max-w-6xl mx-auto px-6 py-14">
        <a
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="size-4" />
          {t("portfolio.backToPortfolio")}
        </a>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <span className="site-eyebrow">{t("portfolio.badge")}</span>
            <h1 className="site-section-title text-4xl md:text-5xl text-white">
              {safeTitle}
            </h1>
            <p className="site-card-text text-zinc-200 leading-relaxed">
              {project.description}
            </p>
            <div className="space-y-2">
              <p className="site-card-title text-zinc-100">
                {t("portfolio.typeLabel")}
              </p>
              <Badge className="rounded-full bg-indigo-500/90">{project.type}</Badge>
            </div>
            <div className="space-y-3">
              <p className="site-card-title text-zinc-100">
                {t("portfolio.servicesLabel")}
              </p>
              <div className="flex flex-wrap gap-2">
                {features.map((service) => (
                  <Badge
                    key={service}
                    className="rounded-full capitalize"
                    variant="secondary"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={safeTitle}
              className="w-full h-72 lg:h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

