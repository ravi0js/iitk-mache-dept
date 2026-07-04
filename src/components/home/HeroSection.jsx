import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <span className="hero-badge">Welcome to IIT Kanpur</span>
                    <h1 className="hero-title">
                        Department of <span className="highlight">Mechanical Engineering</span>
                    </h1>
                    <p className="hero-description">
                        Where academia thrives with synergy between fundamental and applied research. 
                        Pioneering innovation in engineering, science, and technology for a better tomorrow.
                    </p>
                    <div className="hero-actions">
                        <Link to="/admissions" className="btn btn-primary">
                            Apply Now <FaArrowRight className="btn-icon" />
                        </Link>
                        <Link to="/about" className="btn btn-white">
                            Learn More
                        </Link>
                        <button className="btn btn-transparent">
                            <FaPlay className="play-icon" /> Watch Video
                        </button>
                    </div>
                    
                    {/* Stats with guaranteed visibility */}
                    <div className="hero-stats" style={{ 
                        display: 'flex', 
                        gap: '40px', 
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(255,255,255,0.15)',
                        marginTop: '20px',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: 800, 
                                color: '#F47721',
                                lineHeight: 1.2
                            }}>9500+</span>
                            <span style={{ 
                                fontSize: '0.95rem', 
                                color: 'rgba(255,255,255,0.8)',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Students</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: 800, 
                                color: '#F47721',
                                lineHeight: 1.2
                            }}>570</span>
                            <span style={{ 
                                fontSize: '0.95rem', 
                                color: 'rgba(255,255,255,0.8)',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Faculty</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: 800, 
                                color: '#F47721',
                                lineHeight: 1.2
                            }}>1540+</span>
                            <span style={{ 
                                fontSize: '0.95rem', 
                                color: 'rgba(255,255,255,0.8)',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Research Papers</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: 800, 
                                color: '#F47721',
                                lineHeight: 1.2
                            }}>100+</span>
                            <span style={{ 
                                fontSize: '0.95rem', 
                                color: 'rgba(255,255,255,0.8)',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>Companies Incubated</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;