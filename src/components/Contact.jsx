import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'Business Website',
        budget: '',
        description: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const message = `*New Project Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Company:* ${formData.company || 'N/A'}
*Project Type:* ${formData.projectType}
*Budget:* ${formData.budget || 'Not specified'}

*Description:*
${formData.description}`;

        const whatsappNumber = "916385475759";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Redirect to WhatsApp
            window.open(whatsappUrl, '_blank');

            // Reset Form Data
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: 'Business Website',
                budget: '',
                description: ''
            });

            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        }, 800);
    };

    const GithubIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
    );

    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
    );

    const InstagramIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
    );

    return (
        <section id="contact" className="contact-section section-light">
            <div className="container">

                <div className="contact-grid">

                    <div className="contact-info">
                        <h2 className="section-title">Have a Project in Mind?</h2>
                        <p className="contact-subtitle">
                            Tell us about your idea. Let's build something valuable together.
                        </p>

                        <div className="info-cards">
                            <div className="info-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                                <div className="info-icon">
                                    <Mail size={24} className="icon-gradient" />
                                </div>
                                <div className="info-content">
                                    <h4 className="info-title">Email Us</h4>
                                    <a href="mailto:vinixtech2026@gmail.com" className="info-link">vinixtech2026@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div className="info-icon">
                                    <Phone size={24} className="icon-gradient" />
                                </div>
                                <div className="info-content">
                                    <h4 className="info-title">Call Us</h4>
                                    <a href="tel:+916385475759" className="info-link">+91 63854 75759</a>
                                </div>
                            </div>

                            <div className="info-card fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <div className="info-icon">
                                    <MapPin size={24} className="icon-gradient" />
                                </div>
                                <div className="info-content">
                                    <h4 className="info-title">Location</h4>
                                    <span className="info-text">Karaikudi, Tamil Nadu</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="GitHub"><GithubIcon /></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
                            <a href="#" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
                            <a href="#" className="social-link" style={{ fontWeight: 600, fontSize: '0.85rem' }}>WA</a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-panel">
                        <div className="form-decorative-blob blob-1"></div>
                        <div className="form-decorative-blob blob-2"></div>
                        <div className="glass-content">
                            {isSuccess ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>Message Prepared!</h3>
                                    <p>We're redirecting you to WhatsApp to securely send your project request.</p>
                                    <button className="btn btn-outline mt-4" onClick={() => setIsSuccess(false)}>
                                        Send Another Request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">Company</label>
                                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd." />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="projectType">Project Type *</label>
                                            <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange}>
                                                <option value="Business Website">Business Website</option>
                                                <option value="E-Commerce">E-Commerce</option>
                                                <option value="Portfolio">Portfolio</option>
                                                <option value="Management System">Management System</option>
                                                <option value="AI Application">AI Application</option>
                                                <option value="Full-Stack Application">Full-Stack Application</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="budget">Budget Range</label>
                                            <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="$5k - $10k" />
                                        </div>
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="description">Project Description *</label>
                                        <textarea id="description" name="description" required rows="4" value={formData.description} onChange={handleChange} placeholder="Tell us about your project requirements, goals, and timeline..."></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Project Request'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
