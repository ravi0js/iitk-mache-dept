import React from 'react';
import { FaHistory, FaBullseye, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';
import './Pages.css';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-hero">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Discover the legacy, vision, and excellence of the Department of Mechanical Engineering</p>
                </div>
            </div>
            
            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>History & Legacy</h2>
                            <p>
                                Established in 1959, the Indian Institute of Technology Kanpur is a premier institution 
                                established by the Government of India. As one of the first generation IITs, IIT Kanpur 
                                continues to make unparalleled academic contributions to teaching, research, and innovation.
                            </p>
                            <p>
                                The Department of Mechanical Engineering has been at the forefront of engineering education 
                                and research, maintaining a synergy between fundamental and applied research.
                            </p>
                            <div className="about-stats">
                                <div className="about-stat">
                                    <FaAward className="about-stat-icon" />
                                    <span>Established 1959</span>
                                </div>
                                <div className="about-stat">
                                    <FaUsers className="about-stat-icon" />
                                    <span>20+ Departments</span>
                                </div>
                                <div className="about-stat">
                                    <FaLightbulb className="about-stat-icon" />
                                    <span>150+ Postdocs</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image" style={{ 
                            background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-orange))',
                            minHeight: '300px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px',
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>IIT Kanpur</h3>
                                <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                                    Excellence in Education, Research, and Innovation since 1959
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="vision-mission-grid">
                        <div className="vision-card card">
                            <FaBullseye className="vision-icon" />
                            <h3>Our Vision</h3>
                            <p>
                                To be a global leader in mechanical engineering education and research, 
                                fostering innovation and developing future leaders who will contribute to 
                                society and industry.
                            </p>
                        </div>
                        <div className="mission-card card">
                            <FaLightbulb className="vision-icon" />
                            <h3>Our Mission</h3>
                            <p>
                                To provide meaningful education, conduct original research of the highest 
                                standard, and provide leadership in technological innovation while addressing 
                                societal challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;