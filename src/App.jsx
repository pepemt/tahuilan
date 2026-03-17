import { ChevronDown } from 'lucide-react';
import DemoOne from './components/DemoOne';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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
