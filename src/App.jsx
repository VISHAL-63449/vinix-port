import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Services from './components/Services';
import TechnologyStack from './components/TechnologyStack';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll(
      '.section-title, .section-subtitle, .stat-card, .project-card, .service-card, .why-card, .process-step, .mv-card, .info-card'
    );

    elements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Projects />
      <Services />
      <TechnologyStack />
      <Process />
      <WhyChooseUs />
      <About />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
