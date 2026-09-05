import { useState } from 'react';
import { ArrowRight, X, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectData = [
    {
        id: 1,
        name: 'Sastikeyan Interior',
        customer: 'Sastikeyan Group',
        category: 'Business Website',
        categories: ['All', 'Business'],
        description: 'A modern digital presence designed to showcase interior design services, projects, and customer enquiries.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/sastikeyan interior.png',
        fullImage: '/images/sastikeyan interior.png',
        overview: 'Sastikeyan Interior required a digital portfolio that matched the premium quality of their physical spaces.',
        requirement: 'A fully responsive website with high-quality image galleries and an easy-to-use contact system.',
        problem: 'Their previous website was outdated, slow to load, and did not effectively capture leads.',
        solution: 'Designed and developed a sleek, fast-loading, visually driven website emphasizing their best work.',
        features: ['Dynamic project gallery', 'Integrated contact forms', 'SEO optimization', 'Mobile-first layout'],
        process: 'Research -> Wireframing -> UI Design -> Frontend Dev -> Testing -> Deployment',
        link: '#'
    },
    {
        id: 7,
        name: 'Sastikeyan Construction',
        customer: 'Sastikeyan Group',
        category: 'Corporate Website',
        categories: ['All', 'Business'],
        description: 'A comprehensive corporate profile and project showcase for Sastikeyan Construction.',
        technologies: ['React', 'JavaScript', 'Node.js'],
        image: '/images/sastikeyan construction.png',
        fullImage: '/images/sastikeyan construction.png',
        overview: 'Sastikeyan Construction needed a robust digital platform to document ongoing projects and attract enterprise clients.',
        requirement: 'An interactive portfolio covering various industrial and residential construction projects.',
        problem: 'Client acquisition relied heavily on print brochures, lacking digital scale.',
        solution: 'Developed a high-performance web presentation highlighting past and ongoing commercial builds.',
        features: ['Project timelines', 'High-res galleries', 'Service catalog', 'Quotation system'],
        process: 'Consultation -> UI Design -> Full-Stack Dev -> QA -> Launch',
        link: '#'
    },

    {
        id: 2,
        name: 'VINIX Internship Platform',
        customer: 'VINIX Education',
        category: 'Education / Internship',
        categories: ['All', 'Education', 'Web Applications'],
        description: 'A modern platform designed for virtual internships, learning, projects, certificates, and student management.',
        technologies: ['React', 'Node.js', 'Supabase'],
        image: '/images/vinix tech.png',
        fullImage: '/images/vinix tech.png',
        overview: 'A complete ecosystem for managing intern lifecycles from onboarding to certification.',
        requirement: 'An end-to-end platform for document submission, task tracking, and auto-certificate generation.',
        problem: 'Manual tracking of hundreds of interns via spreadsheets was causing data loss and delays.',
        solution: 'Built a robust web application with automated workflows, real-time dashboards, and secure auth.',
        features: ['Role-based dashboards', 'Task assignment', 'Automated certificates', 'Analytics'],
        process: 'Requirements -> Architecture -> Full-Stack Dev -> Beta Testing -> Launch',
        link: '#'
    },
    {
        id: 3,
        name: 'E-Commerce Platform',
        customer: 'RetailBrand Plus',
        category: 'E-Commerce',
        categories: ['All', 'E-Commerce'],
        description: 'A responsive online shopping platform with product discovery, customer experience, and management features.',
        technologies: ['React', 'Node.js', 'MySQL'],
        image: '/images/ecommerce website.png',
        fullImage: '/images/ecommerce website.png',
        overview: 'A highly scalable e-commerce solution tailored for high conversion rates.',
        requirement: 'A seamless checkout experience, dynamic inventory management, and fast page speeds.',
        problem: 'High cart abandonment rates due to a clunky checkout process on their legacy system.',
        solution: 'Implemented a streamlined UI, one-page checkout, and robust backend inventory sync.',
        features: ['Stripe payment integration', 'Real-time inventory', 'User reviews', 'Admin panel'],
        process: 'Consultation -> UX Design -> E-commerce Dev -> Integration -> Launch',
        link: '#'
    },
    {
        id: 4,
        name: 'Student Management System',
        customer: 'Global Institute',
        category: 'Education',
        categories: ['All', 'Education', 'Management'],
        description: 'A digital management system for organizing student information and academic workflows.',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        image: '/images/student.png',
        fullImage: '/images/student.png',
        overview: 'A centralized hub for academic records, attendance, and grading.',
        requirement: 'Secure access for teachers, students, and administration to manage daily academic data.',
        problem: 'Fragmented data across different software resulting in reporting inaccuracies.',
        solution: 'Unified management system with distinct role-based access and automated reporting.',
        features: ['Attendance tracking', 'Gradebook', 'Timetable generation', 'Parent portal'],
        process: 'Analysis -> Data Modeling -> Application Dev -> Migration -> Training',
        link: '#'
    },

    {
        id: 6,
        name: 'AI Assistant Dashboard',
        customer: 'TechInnovate',
        category: 'AI / Web Application',
        categories: ['All', 'AI', 'Web Applications'],
        description: 'An interactive AI-powered dashboard designed for intelligent assistance and productivity.',
        technologies: ['Python', 'Flask', 'JavaScript', 'React'],
        image: '/images/ai assistent.png',
        fullImage: '/images/ai assistent.png',
        overview: 'Bringing the power of Large Language Models into a specialized enterprise workflow.',
        requirement: 'A chat interface integrated with internal company data for quick insights.',
        problem: 'Employees spent hours searching through internal documentation for policies and guides.',
        solution: 'A RAG-powered AI assistant wrapped in a clean, minimal dashboard interface.',
        features: ['Conversational UI', 'Document indexing', 'Prompt templates', 'Usage analytics'],
        process: 'AI Modeling -> API Development -> Dashboard UI/UX -> Integration -> Launch',
        link: '#'
    }
];

const filters = [
    'All',
    'Business',
    'E-Commerce',
    'Education',
    'Management',
    'AI',
    'Web Applications'
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projectData.filter(project =>
        project.categories.includes(activeFilter)
    );

    const openProject = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="projects-section section-light">
            <div className="container">

                <div className="text-center">
                    <h2 className="section-title">Projects We've Built</h2>
                    <p className="section-subtitle">
                        Explore selected digital products and websites developed by VINIX.
                    </p>
                </div>

                <div className="project-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card fade-in">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.name} className="project-image" loading="lazy" />
                                <div className="project-overlay">
                                    <button className="btn btn-primary" onClick={() => openProject(project)}>
                                        View Project
                                    </button>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="tech-tag">+{project.technologies.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="modal-backdrop">
                    <div className="modal-container">
                        <button className="modal-close-btn" onClick={closeProject}>
                            <X size={24} />
                        </button>

                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <span className="project-category">{selectedProject.category}</span>
                                    <h2 className="modal-title">{selectedProject.name}</h2>
                                    <p className="modal-customer">Client: <strong>{selectedProject.customer}</strong></p>
                                </div>
                                <a href={selectedProject.link} className="btn btn-outline launch-btn">
                                    Launch <ExternalLink size={16} />
                                </a>
                            </div>

                            <div className="modal-hero-image">
                                <img src={selectedProject.fullImage} alt={selectedProject.name} />
                            </div>

                            <div className="modal-body-grid">
                                <div className="modal-main-content">
                                    <div className="modal-section">
                                        <h3>Project Overview</h3>
                                        <p>{selectedProject.overview}</p>
                                    </div>

                                    <div className="modal-section">
                                        <h3>The Challenge (Problem)</h3>
                                        <p>{selectedProject.problem}</p>
                                    </div>

                                    <div className="modal-section">
                                        <h3>The VINIX Solution</h3>
                                        <p>{selectedProject.solution}</p>
                                    </div>
                                </div>

                                <div className="modal-sidebar">
                                    <div className="modal-sidebar-card">
                                        <h4>Customer Requirement</h4>
                                        <p>{selectedProject.requirement}</p>
                                    </div>

                                    <div className="modal-sidebar-card">
                                        <h4>Key Features</h4>
                                        <ul className="modal-list">
                                            {selectedProject.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-sidebar-card">
                                        <h4>Technologies Used</h4>
                                        <div className="project-tags">
                                            {selectedProject.technologies.map((tech, i) => (
                                                <span key={i} className="tech-tag modal-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-sidebar-card dark-card">
                                        <h4>Start a Similar Project</h4>
                                        <p>Like what you see? Let's build something great together.</p>
                                        <a href="#contact" className="btn btn-accent w-full" onClick={closeProject}>
                                            Get in Touch
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
