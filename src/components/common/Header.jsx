import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/people', label: 'People' },
        { path: '/academics', label: 'Academics' },
        { path: '/research', label: 'Research' },
        { path: '/admissions', label: 'Admissions' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo-area">
                    <Link to="/" className="logo-link">
                        <div className="logo-icon">
                            <svg viewBox="0 0 100 100" className="iitk-logo-svg">
                                <circle cx="50" cy="50" r="45" fill="#0C1E3B" />
                                <text x="50" y="55" textAnchor="middle" fill="#F47721" fontSize="28" fontWeight="bold">IITK</text>
                            </svg>
                        </div>
                        <div className="dept-info">
                            <h1>Mechanical Engineering</h1>
                            <span>IIT Kanpur</span>
                        </div>
                    </Link>
                </div>

                <button 
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path} 
                                    className={location.pathname === item.path ? 'active' : ''}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-cta">
                            <Link to="/admissions" className="btn btn-primary btn-sm">
                                Apply Now
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;