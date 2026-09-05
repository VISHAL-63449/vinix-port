import { CheckCircle2 } from 'lucide-react';
import './Introduction.css';

const Introduction = () => {
    const stats = [
        { value: '25+', label: 'Projects' },
        { value: '15+', label: 'Technologies' },
        { value: '100%', label: 'Responsive' },
        { value: '100%', label: 'Customer Focus' },
    ];

    const focuses = [
        "Modern interfaces",
        "Reliable applications",
        "Responsive websites",
        "Scalable systems",
        "User-friendly digital experiences"
    ];

    return (
        <section className="intro-section section-gray section">
            <div className="container">

                <div className="intro-grid">

                    <div className="intro-content">
                        <h2 className="section-title">
                            Built for <span className="text-gradient">Ideas</span> That Deserve to Go Further.
                        </h2>
                        <p className="intro-description">
                            We don't just write code. We build digital foundations for your success. VINIX focuses on creating solutions that look beautiful, perform flawlessly, and scale as your needs grow.
                        </p>

                        <ul className="focus-list">
                            {focuses.map((focus, index) => (
                                <li key={index} className="focus-item">
                                    <span className="focus-icon-wrapper">
                                        <CheckCircle2 size={18} className="focus-icon" />
                                    </span>
                                    <span>{focus}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Introduction;
