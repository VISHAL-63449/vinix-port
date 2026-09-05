import { Globe, Server, ShoppingCart, PenTool, Cpu, Grid, Database, Wrench } from 'lucide-react';
import './Services.css';

const services = [
    {
        title: 'Website Development',
        description: 'Modern, responsive business and personal websites.',
        icon: <Globe size={24} />,
        color: '#3b82f6'
    },
    {
        title: 'Full-Stack Development',
        description: 'Complete frontend, backend, database, and API solutions.',
        icon: <Server size={24} />,
        color: '#8b5cf6'
    },
    {
        title: 'E-Commerce',
        description: 'Modern online stores with product and customer management.',
        icon: <ShoppingCart size={24} />,
        color: '#f59e0b'
    },
    {
        title: 'UI/UX Design',
        description: 'Clean, intuitive, user-focused interfaces.',
        icon: <PenTool size={24} />,
        color: '#ec4899'
    },
    {
        title: 'AI Applications',
        description: 'AI-powered web applications and intelligent digital tools.',
        icon: <Cpu size={24} />,
        color: '#10b981'
    },
    {
        title: 'Management Systems',
        description: 'Custom systems for education, business, and organizations.',
        icon: <Grid size={24} />,
        color: '#6366f1'
    },
    {
        title: 'Database Solutions',
        description: 'Secure and scalable database-driven applications.',
        icon: <Database size={24} />,
        color: '#f43f5e'
    },
    {
        title: 'Maintenance & Support',
        description: 'Continuous improvements, fixes, updates, and support.',
        icon: <Wrench size={24} />,
        color: '#64748b'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section section-gray">
            <div className="container">

                <div className="text-center">
                    <h2 className="section-title">What VINIX Builds</h2>
                    <p className="section-subtitle">
                        Comprehensive digital services designed to bring your vision to life.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            style={{ '--service-color': service.color }}
                        >
                            <div
                                className="service-icon-wrapper"
                                style={{ backgroundColor: `${service.color}15`, color: service.color }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
