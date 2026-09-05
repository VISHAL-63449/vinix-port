import { Layout, Smartphone, Settings, Cpu, Eye, LifeBuoy } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
    {
        title: 'Modern Design',
        desc: 'Professional interfaces designed for today\'s users.',
        icon: <Layout size={24} />
    },
    {
        title: 'Responsive Development',
        desc: 'Works smoothly across desktop, tablet, and mobile.',
        icon: <Smartphone size={24} />
    },
    {
        title: 'Custom Solutions',
        desc: 'Projects are built around customer requirements.',
        icon: <Settings size={24} />
    },
    {
        title: 'Modern Technology',
        desc: 'Use appropriate modern technologies for each project.',
        icon: <Cpu size={24} />
    },
    {
        title: 'Transparent Process',
        desc: 'Customers can understand the project journey from start to finish.',
        icon: <Eye size={24} />
    },
    {
        title: 'Long-Term Support',
        desc: 'Continue improving and maintaining projects after launch.',
        icon: <LifeBuoy size={24} />
    }
];

const WhyChooseUs = () => {
    return (
        <section className="why-section section-light">
            <div className="container">

                <div className="text-center">
                    <h2 className="section-title">Why Choose VINIX?</h2>
                    <p className="section-subtitle">
                        We combine technical expertise with a deep understanding of business goals.
                    </p>
                </div>

                <div className="why-grid">
                    {reasons.map((reason, index) => (
                        <div key={index} className="why-card">
                            <div className="why-icon-wrapper">
                                {reason.icon}
                            </div>
                            <h3 className="why-title">{reason.title}</h3>
                            <p className="why-desc">{reason.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
