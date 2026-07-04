import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ResearchHighlights.css';

const ResearchHighlights = () => {
    const researchAreas = [
        {
            title: 'Thermal Engineering',
            description: 'Advanced research in heat transfer, thermodynamics, and energy systems for sustainable development.',
            image: 'https://placehold.co/600x400/0C1E3B/F47721?text=Thermal+Engineering',
            link: '/research#thermal'
        },
        {
            title: 'Manufacturing & Automation',
            description: 'Pioneering research in additive manufacturing, robotics, and Industry 4.0 technologies.',
            image: 'https://placehold.co/600x400/0C1E3B/F47721?text=Manufacturing+%26+Automation',
            link: '/research#manufacturing'
        },
        {
            title: 'Robotics & AI',
            description: 'Developing intelligent systems, autonomous robots, and AI-driven solutions for complex problems.',
            image: 'https://placehold.co/600x400/0C1E3B/F47721?text=Robotics+%26+AI',
            link: '/research#robotics'
        }
    ];

    return (
        <section className="research-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Featured Research Areas</h2>
                    <p className="section-subtitle">
                        IIT Kanpur has been at the forefront of research in science and technology. 
                        Our diverse expertise spans across engineering, sciences, and management.
                    </p>
                </div>
                <div className="research-grid">
                    {researchAreas.map((area, index) => (
                        <div className="research-card card" key={index}>
                            <div className="research-image">
                                <img src={area.image} alt={area.title} />
                                <div className="research-overlay">
                                    <Link to={area.link} className="btn btn-white btn-sm">
                                        Explore <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                            <div className="research-content">
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-3">
                    <Link to="/research" className="btn btn-primary">
                        View All Research Areas <FaArrowRight className="btn-icon" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ResearchHighlights;