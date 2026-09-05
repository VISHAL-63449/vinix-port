import { Mail, MapPin, Phone } from 'lucide-react';
import vinixTitleImg from '../assets/vinix-title.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand-col">
                        <img src={vinixTitleImg} alt="VINIX" className="footer-logo-img" />
                        <p className="footer-desc">
                            VINIX is a professional software and website development company. We turn your ideas into powerful digital products, customized web solutions, AI apps, and scalable platforms.
                        </p>
                        <div className="footer-brand-actions">
                            <a href="#contact" className="btn btn-primary btn-sm footer-action-btn">
                                Start Project
                            </a>
                            <a href="#projects" className="btn btn-outline btn-sm footer-action-btn">
                                View Portfolio
                            </a>
                        </div>
                        <div className="footer-socials">
                            <a href="#" className="social-icon">in</a>
                            <a href="#" className="social-icon">git</a>
                            <a href="#" className="social-icon">ig</a>
                            <a href="#" className="social-icon">wa</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">SERVICES</h4>
                        <ul className="footer-links">
                            <li><a href="#services">Website Development</a></li>
                            <li><a href="#services">Full-Stack Development</a></li>
                            <li><a href="#services">E-Commerce Platforms</a></li>
                            <li><a href="#services">AI Applications</a></li>
                            <li><a href="#services">UI/UX Design</a></li>
                            <li><a href="#services">Management Systems</a></li>
                        </ul>
                        <a href="#services" className="footer-view-all">View All Services &rarr;</a>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">COMPANY</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About VINIX</a></li>
                            <li><a href="#process">Our Process</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">CONTACT & TRUST</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <Mail size={16} className="contact-list-icon" />
                                <span>vinixtech2026@gmail.com</span>
                            </li>
                            <li>
                                <MapPin size={16} className="contact-list-icon" />
                                <span>Karaikudi, Tamil Nadu</span>
                            </li>
                            <li>
                                <Phone size={16} className="contact-list-icon" />
                                <span>+91 63854 75759</span>
                            </li>
                        </ul>

                        <div className="trust-badge">
                            <div className="trust-icon">✓</div>
                            <div className="trust-text">
                                <strong>VERIFIED</strong>
                                <span>AGENCY</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-stats-banner">
                    <div className="stat-item">
                        <div className="stat-icon-wrapper">
                            <span className="stat-icon">💻</span>
                        </div>
                        <h4 className="stat-title">Growing Every Day</h4>
                        <p className="stat-subtitle">PROJECTS DELIVERED</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-icon-wrapper">
                            <span className="stat-icon">🏢</span>
                        </div>
                        <h4 className="stat-title">Clients Worldwide</h4>
                        <p className="stat-subtitle">BUSINESSES EMPOWERED</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-icon-wrapper">
                            <span className="stat-icon">⚡</span>
                        </div>
                        <h4 className="stat-title">10+</h4>
                        <p className="stat-subtitle">TECHNOLOGIES</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-icon-wrapper">
                            <span className="stat-icon">⭐</span>
                        </div>
                        <h4 className="stat-title">99%</h4>
                        <p className="stat-subtitle">CLIENT SATISFACTION</p>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-icon-wrapper">
                            <span className="stat-icon">🛡️</span>
                        </div>
                        <h4 className="stat-title">Verified</h4>
                        <p className="stat-subtitle">QUALITY ASSURED</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 VINIX. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
