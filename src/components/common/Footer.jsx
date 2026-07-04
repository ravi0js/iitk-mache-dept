import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* About Section */}
                    <div className="footer-section">
                        <h3>Department of Mechanical Engineering</h3>
                        <p className="footer-description">
                            Indian Institute of Technology Kanpur is a premier institution dedicated to excellence in teaching, research, and innovation in mechanical engineering.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/people">Faculty</Link></li>
                            <li><Link to="/academics">Programs</Link></li>
                            <li><Link to="/research">Research</Link></li>
                            <li><Link to="/admissions">Admissions</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            <li><a href="#">Library</a></li>
                            <li><a href="#">Labs & Facilities</a></li>
                            <li><a href="#">Career Services</a></li>
                            <li><a href="#">Alumni Network</a></li>
                            <li><a href="#">Student Resources</a></li>
                            <li><a href="#">Faculty Resources</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Indian Institute of Technology Kanpur,<br />Kalyanpur, Kanpur - 208016</span>
                            </li>
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>0512 - 259 - 0151</span>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>mech-dept@iitk.ac.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} Department of Mechanical Engineering, IIT Kanpur. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <span className="separator">|</span>
                            <a href="#">Terms of Use</a>
                            <span className="separator">|</span>
                            <a href="#">RTI</a>
                            <span className="separator">|</span>
                            <a href="#">Tenders</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;