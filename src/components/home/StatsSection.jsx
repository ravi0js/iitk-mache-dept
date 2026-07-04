import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaFlask, FaBuilding, FaFileAlt, FaAward } from 'react-icons/fa';
import './StatsSection.css';

const StatsSection = () => {
    const stats = [
        { icon: <FaUsers />, number: '9500+', label: 'Total Students', description: 'With 1:1 UG:PG ratio' },
        { icon: <FaChalkboardTeacher />, number: '570', label: 'Faculty Members', description: 'Across 20 departments' },
        { icon: <FaFlask />, number: '1540+', label: 'Research Publications', description: 'Every year' },
        { icon: <FaBuilding />, number: '100+', label: 'Companies Incubated', description: 'Through SIIC' },
        { icon: <FaFileAlt />, number: '1000+', label: 'Patents Filed', description: 'Innovation driven' },
        { icon: <FaAward />, number: '₹2000+ Cr', label: 'Research Funding', description: 'Last 3 years' },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-description">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;