import React, { useState } from 'react';
import { 
    FaMicroscope, 
    FaRobot, 
    FaCogs, 
    FaThermometerHalf, 
    FaChartLine, 
    FaAtom,
    FaFileAlt,
    FaProjectDiagram,
    FaUsers,
    FaAward,
    FaBook,
    FaExternalLinkAlt,
    FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Pages.css';

const Research = () => {
    const [activeProject, setActiveProject] = useState(0);

    const researchAreas = [
        { 
            icon: <FaThermometerHalf />, 
            title: 'Thermal Engineering', 
            description: 'Heat transfer, thermodynamics, energy systems, and sustainable energy solutions.',
            projects: 12,
            publications: 45,
            faculty: 6
        },
        { 
            icon: <FaCogs />, 
            title: 'Manufacturing', 
            description: 'Additive manufacturing, machining, forming, and Industry 4.0 technologies.',
            projects: 15,
            publications: 38,
            faculty: 8
        },
        { 
            icon: <FaRobot />, 
            title: 'Robotics & Automation', 
            description: 'Autonomous systems, industrial robotics, and AI-driven automation.',
            projects: 10,
            publications: 32,
            faculty: 5
        },
        { 
            icon: <FaMicroscope />, 
            title: 'Materials Science', 
            description: 'Advanced materials, composites, nanomaterials, and characterization.',
            projects: 14,
            publications: 52,
            faculty: 7
        },
        { 
            icon: <FaChartLine />, 
            title: 'Fluid Mechanics', 
            description: 'Computational fluid dynamics, aerodynamics, and multiphase flows.',
            projects: 11,
            publications: 40,
            faculty: 6
        },
        { 
            icon: <FaAtom />, 
            title: 'Mechatronics', 
            description: 'Integration of mechanical, electronic, and control systems.',
            projects: 9,
            publications: 28,
            faculty: 4
        },
    ];

    const researchProjects = [
        {
            title: 'Sustainable Energy Systems',
            area: 'Thermal Engineering',
            description: 'Developing innovative solutions for sustainable energy generation and storage using advanced thermal systems.',
            funding: '₹5.2 Cr',
            duration: '2024-2027',
            team: ['Prof. Rajesh Kumar', 'Dr. Anjali Reddy', '3 PhD Scholars'],
            status: 'Ongoing'
        },
        {
            title: 'Smart Manufacturing with AI',
            area: 'Manufacturing',
            description: 'Integrating artificial intelligence and machine learning for predictive maintenance and quality control in manufacturing.',
            funding: '₹3.8 Cr',
            duration: '2023-2026',
            team: ['Prof. Amit Sharma', 'Dr. Vikram Mehta', '4 PhD Scholars'],
            status: 'Ongoing'
        },
        {
            title: 'Autonomous Robotics for Industry 4.0',
            area: 'Robotics & Automation',
            description: 'Developing autonomous robots for industrial applications with advanced perception and control systems.',
            funding: '₹4.5 Cr',
            duration: '2024-2027',
            team: ['Prof. Priya Patel', 'Dr. Suresh Iyer', '3 PhD Scholars'],
            status: 'Ongoing'
        },
        {
            title: 'Advanced Composite Materials',
            area: 'Materials Science',
            description: 'Research on high-performance composite materials for aerospace and automotive applications.',
            funding: '₹6.1 Cr',
            duration: '2022-2026',
            team: ['Prof. Sunita Singh', 'Dr. Ravi Verma', '5 PhD Scholars'],
            status: 'Ongoing'
        },
        {
            title: 'Computational Fluid Dynamics for Aerospace',
            area: 'Fluid Mechanics',
            description: 'Advanced CFD simulations for aerodynamic optimization and flow control in aerospace applications.',
            funding: '₹4.2 Cr',
            duration: '2023-2026',
            team: ['Dr. Kavya Krishnan', 'Prof. Nisha Gupta', '3 PhD Scholars'],
            status: 'Completed'
        },
    ];

    const recentPublications = [
        {
            title: 'Advanced Heat Transfer in Nanofluids for Sustainable Energy Systems',
            authors: 'R. Kumar, S. Singh, A. Reddy',
            journal: 'Journal of Thermal Sciences',
            year: '2026',
            citations: 12
        },
        {
            title: 'AI-Driven Predictive Maintenance in Additive Manufacturing',
            authors: 'A. Sharma, V. Mehta, R. Verma',
            journal: 'Manufacturing Technology Review',
            year: '2026',
            citations: 8
        },
        {
            title: 'Autonomous Robot Navigation in Dynamic Environments Using Deep Learning',
            authors: 'P. Patel, S. Iyer, M. Nair',
            journal: 'Robotics and Automation Journal',
            year: '2025',
            citations: 15
        },
        {
            title: 'Novel Composite Materials for High-Temperature Aerospace Applications',
            authors: 'S. Singh, K. Krishnan, A. Desai',
            journal: 'Materials Science and Engineering',
            year: '2025',
            citations: 10
        },
        {
            title: 'Computational Analysis of Turbulent Flows in Industrial Systems',
            authors: 'K. Krishnan, N. Gupta, R. Kumar',
            journal: 'Fluid Dynamics Research',
            year: '2025',
            citations: 7
        },
    ];

    const collaborations = [
        { name: 'NASA', country: 'USA', area: 'Aerospace Engineering' },
        { name: 'Max Planck Institute', country: 'Germany', area: 'Materials Science' },
        { name: 'MIT', country: 'USA', area: 'Robotics' },
        { name: 'University of Cambridge', country: 'UK', area: 'Fluid Mechanics' },
        { name: 'Tohoku University', country: 'Japan', area: 'Manufacturing' },
        { name: 'ETH Zurich', country: 'Switzerland', area: 'Thermal Engineering' },
    ];

    return (
        <div className="page-container">
            <div className="page-hero">
                <div className="container">
                    <h1>Research</h1>
                    <p>Pioneering research that drives innovation and addresses global challenges</p>
                </div>
            </div>
            
            {/* Research Areas Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Research Areas</h2>
                        <p className="section-subtitle">
                            Our research spans across diverse areas, contributing to fundamental science and applied technologies.
                        </p>
                    </div>
                    <div className="research-areas-grid">
                        {researchAreas.map((area, index) => (
                            <div className="research-area-card card" key={index}>
                                <div className="research-area-icon">{area.icon}</div>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                                <div className="area-stats">
                                    <span><FaProjectDiagram /> {area.projects} Projects</span>
                                    <span><FaFileAlt /> {area.publications} Publications</span>
                                    <span><FaUsers /> {area.faculty} Faculty</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Stats */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="research-stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">1540+</div>
                            <div className="stat-label">Research Publications</div>
                            <div className="stat-description">Every year</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">₹2000+ Cr</div>
                            <div className="stat-label">Research Funding</div>
                            <div className="stat-description">Last 3 years</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Patents Filed</div>
                            <div className="stat-description">Innovation driven</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">150+</div>
                            <div className="stat-label">Postdoctoral Fellows</div>
                            <div className="stat-description">Across disciplines</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Projects Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Flagship Research Projects</h2>
                        <p className="section-subtitle">
                            Cutting-edge research projects addressing critical challenges in mechanical engineering.
                        </p>
                    </div>
                    
                    {/* Project Cards */}
                    <div className="projects-grid">
                        {researchProjects.map((project, index) => (
                            <div className="project-card card" key={index}>
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className={`project-status ${project.status === 'Ongoing' ? 'status-ongoing' : 'status-completed'}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="project-area">
                                    <FaProjectDiagram className="project-area-icon" />
                                    {project.area}
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-details">
                                    <div className="project-detail">
                                        <strong>Funding:</strong> {project.funding}
                                    </div>
                                    <div className="project-detail">
                                        <strong>Duration:</strong> {project.duration}
                                    </div>
                                </div>
                                <div className="project-team">
                                    <strong>Team:</strong>
                                    <ul>
                                        {project.team.map((member, idx) => (
                                            <li key={idx}>{member}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="btn btn-outline btn-sm project-btn">
                                    Learn More <FaArrowRight />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Publications */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Recent Publications</h2>
                        <p className="section-subtitle">
                            Highlighting our latest contributions to the scientific community.
                        </p>
                    </div>
                    <div className="publications-list">
                        {recentPublications.map((pub, index) => (
                            <div className="publication-item" key={index}>
                                <div className="publication-icon">
                                    <FaBook />
                                </div>
                                <div className="publication-content">
                                    <h4>{pub.title}</h4>
                                    <p className="publication-authors">{pub.authors}</p>
                                    <p className="publication-meta">
                                        <span className="publication-journal">{pub.journal}</span>
                                        <span className="publication-year">{pub.year}</span>
                                        <span className="publication-citations">{pub.citations} citations</span>
                                    </p>
                                </div>
                                <a href="#" className="publication-link">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-primary">
                            View All Publications
                        </button>
                    </div>
                </div>
            </section>

            {/* Collaborations */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">International Collaborations</h2>
                        <p className="section-subtitle">
                            Partnering with leading institutions worldwide to advance research and innovation.
                        </p>
                    </div>
                    <div className="collaborations-grid">
                        {collaborations.map((collab, index) => (
                            <div className="collaboration-card card" key={index}>
                                <div className="collaboration-icon">
                                    <FaAward />
                                </div>
                                <h4>{collab.name}</h4>
                                <p className="collaboration-country">{collab.country}</p>
                                <p className="collaboration-area">{collab.area}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;