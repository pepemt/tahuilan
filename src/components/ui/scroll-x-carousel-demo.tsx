import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
} from "@/components/ui/scroll-x-carousel";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioProjects } from "@/data/portfolioProjects";

export default function ScrollXCarouselDemo() {
  const { t, lang } = useLanguage();
  const translatedSlides = portfolioProjects.map((slide, idx) => ({
    ...slide,
    ...t(`portfolio.slides.${idx}`),
  }));

  return (
    <ScrollXCarousel>
      <ScrollXCarouselContainer className="overflow-x-auto py-3">
        <ScrollXCarouselWrap className="inline-flex gap-6 px-4">
          {translatedSlides.map((slide) => {
            const isExternal = Boolean(
              slide.projectUrl &&
                /^(https?:)?\/\//.test(slide.projectUrl),
            );
            const internalProjectUrl =
              slide.projectUrl && !isExternal
                ? `${slide.projectUrl}${slide.projectUrl.includes("?") ? "&" : "?"}lang=${lang}`
                : slide.projectUrl;
            const card = (
              <CardHoverReveal
                className="min-w-[70vw] sm:min-w-[58vw] md:min-w-[44vw] lg:min-w-[38vw] xl:min-w-[30vw] shadow-lg border rounded-xl"
              >
                <CardHoverRevealMain className="h-72 sm:h-80 md:h-88 lg:h-96">
                  <img
                    alt={slide.title}
                    src={slide.imageUrl}
                    className="h-full w-full object-cover"
                  />
                </CardHoverRevealMain>
                <CardHoverRevealContent className="space-y-3 rounded-2xl bg-[rgba(0,0,0,.5)] backdrop-blur-3xl p-4 max-h-[72%] overflow-y-auto">
                  <div className="space-y-2">
                    <h3 className="site-card-title text-white/80">
                      {t("portfolio.typeLabel")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="capitalize rounded-full bg-indigo-500">
                        {slide.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="site-card-title text-white/80">
                      {t("portfolio.servicesLabel")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {slide.services.map((service) => (
                        <Badge
                          key={service}
                          className="capitalize rounded-full"
                          variant={"secondary"}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 mt-2">
                    <h3 className="text-white capitalize font-medium">
                      {slide.title}
                    </h3>
                    <p className="site-card-text text-white/80">
                      {slide.description}
                    </p>
                    {slide.projectUrl && (
                      <span className="inline-flex mt-3 items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition-colors">
                        {t("portfolio.openCaseLabel")} →
                      </span>
                    )}
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            );

            return slide.projectUrl ? (
              <a
                key={slide.id}
                href={internalProjectUrl}
                className="inline-block transition-transform duration-300 hover:scale-[1.01]"
                aria-label={`Open ${slide.title}`}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {card}
              </a>
            ) : (
              <div key={slide.id}>{card}</div>
            );
          })}
        </ScrollXCarouselWrap>
      </ScrollXCarouselContainer>
    </ScrollXCarousel>
  );
}
