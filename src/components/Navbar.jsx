import { useState, useEffect } from 'react';
import { Home, Folder, Briefcase, Info, Settings, Mail } from 'lucide-react';
import vinixTitleImg from '../assets/vinix-title.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    const sections = ['home', 'projects', 'services', 'about', 'process', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <Home size={18} /> },
    { name: 'Projects', id: 'projects', icon: <Folder size={18} /> },
    { name: 'Services', id: 'services', icon: <Briefcase size={18} /> },
    { name: 'About', id: 'about', icon: <Info size={18} /> },
    { name: 'Process', id: 'process', icon: <Settings size={18} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={vinixTitleImg} alt="VINIX" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
        </a>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-icon">{link.icon}</span>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary mobile-only" onClick={() => setIsMobileMenuOpen(false)}>
            Start a Project
          </a>
        </div>

        <div className="navbar-right">
          <a href="#contact" className="btn btn-primary desktop-only">
            Start a Project
          </a>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
