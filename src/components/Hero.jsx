import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero_section.png';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section section-light">
            <div className="container hero-container">

                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Welcome to VINIX
                    </div>

                    <h1 className="hero-title">
                        We Turn Ideas Into <br />
                        <span className="text-gradient">Powerful</span> Digital Products.
                    </h1>

                    <p className="hero-subtitle">
                        VINIX helps businesses, organizations, and individuals transform their ideas into modern websites, applications, e-commerce platforms, and custom digital solutions.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            Explore Projects
                        </a>
                        <a href="#contact" className="btn btn-outline hero-btn-outline">
                            Start a Project <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img src={heroImg} alt="VINIX Digital Products" className="hero-main-image floating-hero" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
