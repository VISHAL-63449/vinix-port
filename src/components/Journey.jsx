import { ArrowDown } from 'lucide-react';
import './Journey.css';

const journeySteps = [
    'Customer Idea',
    'Consultation',
    'Requirements',
    'Design',
    'Development',
    'Testing',
    'Deployment',
    'Support'
];

const Journey = () => {
    return (
        <section className="journey-section section-light">
            <div className="container">

                <div className="journey-container">
                    {journeySteps.map((step, index) => (
                        <div key={index} className="journey-step-wrapper">
                            <div className="journey-node">
                                <span className="journey-text">{step}</span>
                            </div>
                            {index < journeySteps.length - 1 && (
                                <div className="journey-arrow">
                                    <ArrowDown size={24} className="arrow-icon" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Journey;
