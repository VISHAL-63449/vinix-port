import { Target, Lightbulb, Phone, Mail, User } from 'lucide-react';
import aboutImg from '../assets/about_img.png';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-gray">
            <div className="container">

                <div className="about-grid">

                    <div className="about-content">
                        <h2 className="section-title">About VINIX</h2>
                        <p className="about-desc">
                            VINIX is a technology-focused digital development company that helps customers turn ideas into practical digital products. From business websites to full-stack applications and AI-powered platforms, VINIX focuses on combining clean design, useful functionality, and modern technology.
                        </p>

                        <div className="mission-vision">
                            <div className="mv-card">
                                <div className="mv-icon">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="mv-title">Mission</h3>
                                    <p className="mv-desc">
                                        To make professional digital technology accessible to businesses, organizations, and individuals.
                                    </p>
                                </div>
                            </div>

                            <div className="mv-card">
                                <div className="mv-icon">
                                    <Lightbulb size={24} />
                                </div>
                                <div>
                                    <h3 className="mv-title">Vision</h3>
                                    <p className="mv-desc">
                                        To become a trusted technology partner for innovative digital products.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="about-visual">
                        <div className="about-image-wrapper">
                            <img
                                src={aboutImg}
                                alt="About VINIX"
                                className="about-image"
                            />
                        </div>
                    </div>

                </div>

                <div className="founder-card">
                    <div className="founder-header">
                        <div className="founder-avatar">
                            <User size={28} className="avatar-icon" />
                        </div>
                        <div className="founder-info">
                            <h3 className="founder-name">Vishal</h3>
                            <p className="founder-role">Founder & CEO, VINIX Technologies</p>
                        </div>
                    </div>
                    <div className="founder-body">
                        <p className="founder-desc">
                            A passionate technology leader dedicated to shaping the future of digital solutions. With a deep commitment to excellence, Vishal leads the VINIX team to deliver world-class applications, focusing on scalable architecture, seamless user experiences, and transformative business growth.
                        </p>
                        <div className="founder-contact">
                            <a href="tel:+916385475759" className="contact-link">
                                <Phone size={16} />
                                <span>+91 6385475759</span>
                            </a>
                            <a href="mailto:vinixtech2026@gmail.com" className="contact-link">
                                <Mail size={16} />
                                <span>vinixtech2026@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
