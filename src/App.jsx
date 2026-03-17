import { useMemo } from "react";
import { ChevronDown } from 'lucide-react';
import DemoOne from './components/DemoOne';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';
import { portfolioProjects } from '@/data/portfolioProjects';
import PortfolioCaseStudy from './pages/PortfolioCaseStudy';
import GymCoachPortfolioPage from './pages/portfolio/gym-coach';

const portfolioProjectRoutes = {
  "gym-coach": GymCoachPortfolioPage,
};

function App() {
  const { t } = useLanguage();

  const normalizedPath = typeof window !== "undefined"
    ? window.location.pathname.replace(/\/+$/, "") || "/"
    : "/";

  const translatedProjects = useMemo(
    () =>
      portfolioProjects.map((project, idx) => ({
        ...project,
        ...t(`portfolio.slides.${idx}`),
      })),
    [t],
  );

  const routeMatch = normalizedPath.match(/^\/portfolio\/([^/]+)$/);

  const activeProject = useMemo(() => {
    if (!routeMatch) return null;

    const slug = routeMatch[1];

    const projectIndex = translatedProjects.findIndex(
      (project) =>
        project.slug === slug ||
        project.projectUrl?.replace(/\/+$/, "") === `/portfolio/${slug}`,
    );

    if (projectIndex === -1) return null;

    return {
      ...translatedProjects[projectIndex],
      slug,
    };
  }, [routeMatch, translatedProjects]);

  if (activeProject) {
    const pageComponent = portfolioProjectRoutes[activeProject.slug];

    if (pageComponent) {
      const PortfolioProjectPage = pageComponent;
      return <PortfolioProjectPage project={activeProject} />;
    }

    return <PortfolioCaseStudy project={activeProject} />;
  }

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16"
      >
        <DemoOne />

        <a
          href="#services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/20 hover:text-white/40 transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      <Services />
      <Process />
      <Portfolio />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );

}

export default App;
