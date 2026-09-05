import './Process.css';

const processSteps = [
    {
        num: '01',
        title: 'Discover',
        desc: 'Understand the customer\'s idea and requirements.'
    },
    {
        num: '02',
        title: 'Plan',
        desc: 'Define features, technology, structure, and project scope.'
    },
    {
        num: '03',
        title: 'Design',
        desc: 'Create the UI/UX and visual direction.'
    },
    {
        num: '04',
        title: 'Develop',
        desc: 'Build the frontend, backend, database, and integrations.'
    },
    {
        num: '05',
        title: 'Test',
        desc: 'Test responsiveness, functionality, performance, and usability.'
    },
    {
        num: '06',
        title: 'Launch',
        desc: 'Deploy the final product and provide support.'
    }
];

const Process = () => {
    return (
        <section id="process" className="process-section section-gray">
            <div className="container">

                <div className="text-center">
                    <h2 className="section-title">From Idea to Launch</h2>
                    <p className="section-subtitle">
                        Our transparent and proven development process.
                    </p>
                </div>

                <div className="process-timeline">
                    <div className="timeline-line"></div>

                    <div className="process-steps">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-marker">
                                    <div className="step-dot"></div>
                                </div>
                                <div className="step-content glass-card">
                                    <div className="step-watermark">{step.num}</div>
                                    <span className="step-num">{step.num} —</span>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;
