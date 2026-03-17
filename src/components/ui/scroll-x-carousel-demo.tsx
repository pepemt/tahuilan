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

const SLIDES = [
  {
    id: "slide-6",
    title: "UI UX design",
    description:
      "We build a car rental platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design"],
    type: "Agency",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-2",
    title: "Blockchain wallet",
    description:
      "We build a Blockchain wallet for the masses, with a focus on security and usability.",
    services: ["branding", "design", "development"],
    type: "blockchain",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "ecommerce store",
    description:
      "We build an ecommerce store for the masses, with a focus on performance and user experience.",
    services: ["branding", "design", "payment getaway", "development"],
    type: "ecommerce",
    imageUrl:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-1",
    title: "SaaS platform",
    description:
      "We build a SaaS platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design", "development"],
    type: "SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "SEO Optimization",
    description:
      "We build a SaaS platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design", "development"],
    type: "SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ScrollXCarouselDemo() {
  const { t } = useLanguage();
  const translatedSlides = SLIDES.map((slide, idx) => ({
    ...slide,
    ...t(`portfolio.slides.${idx}`),
  }));

  return (
    <ScrollXCarousel>
      <ScrollXCarouselContainer className="overflow-x-auto py-3">
        <ScrollXCarouselWrap className="inline-flex gap-6 px-4">
                 {translatedSlides.map((slide) => (
            <CardHoverReveal
              key={slide.id}
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
                         <h3 className="text-sm text-white/80">
                           {t("portfolio.typeLabel")}
                         </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="capitalize rounded-full bg-indigo-500">
                      {slide.type}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                         <h3 className="text-sm text-white/80">
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
                  <p className="text-white/80 text-sm">{slide.description}</p>
                </div>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </ScrollXCarouselWrap>
      </ScrollXCarouselContainer>
    </ScrollXCarousel>
  );
}
