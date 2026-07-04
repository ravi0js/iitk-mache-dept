import React from 'react';
import { FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import './NewsSection.css';

const NewsSection = () => {
    const newsItems = [
        {
            date: 'July 3, 2026',
            title: 'C3iHub Deploys Advanced Security Operations Center at SAIL',
            category: 'Research'
        },
        {
            date: 'July 2, 2026',
            title: 'Class of 2000 Pledges Highest Ever Contribution of ₹100 Crore',
            category: 'Alumni'
        },
        {
            date: 'July 1, 2026',
            title: 'IIT Kanpur Sets Record with 672 Job Offers on Day 1 of 2025-26',
            category: 'Placement'
        },
        {
            date: 'June 30, 2026',
            title: 'IIT Kanpur Honoured with Special Jury Recognition',
            category: 'Achievement'
        },
        {
            date: 'June 28, 2026',
            title: 'IIT Kanpur and NMDC Sign MoU to Enhance Cybersecurity',
            category: 'Partnership'
        },
        {
            date: 'June 25, 2026',
            title: 'SIIC IIT Kanpur Hosts First In-Person Mentors Meet 2025',
            category: 'Innovation'
        }
    ];

    return (
        <section className="news-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">News & Updates</h2>
                    <p className="section-subtitle">
                        Stay updated with the latest news, achievements, and announcements from the Department of Mechanical Engineering.
                    </p>
                </div>
                <div className="news-grid">
                    {newsItems.map((news, index) => (
                        <div className="news-card card" key={index}>
                            <div className="news-date">
                                <FaCalendarAlt className="news-calendar-icon" />
                                <span>{news.date}</span>
                            </div>
                            <div className="news-content">
                                <h4>{news.title}</h4>
                                <span className="news-category">{news.category}</span>
                            </div>
                            <div className="news-arrow">
                                <FaNewspaper />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-3">
                    <a href="#" className="btn btn-outline">
                        View All News
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;