import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Pages.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="page-container">
            <div className="page-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with the Department of Mechanical Engineering</p>
                </div>
            </div>
            
            <section className="section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-card card">
                            <h2>Get in Touch</h2>
                            <p style={{ color: 'var(--text-light)', marginBottom: 'var(--spacing-md)' }}>
                                Have questions or need more information? Reach out to us through the following channels.
                            </p>
                            
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-item-icon" />
                                <div>
                                    <strong>Address</strong>
                                    <p>Indian Institute of Technology Kanpur<br />
                                    Kalyanpur, Kanpur - 208016</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <FaPhone className="contact-item-icon" />
                                <div>
                                    <strong>Phone</strong>
                                    <p>0512 - 259 - 0151</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <FaEnvelope className="contact-item-icon" />
                                <div>
                                    <strong>Email</strong>
                                    <p>mech-dept@iitk.ac.in</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <FaClock className="contact-item-icon" />
                                <div>
                                    <strong>Office Hours</strong>
                                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                            
                            <div className="contact-emergency">
                                <h3>Emergency Contacts</h3>
                                <ul>
                                    <li><strong>Security:</strong> 0512 - 259 - 7999</li>
                                    <li><strong>Health Center:</strong> 0512 - 259 - 7777</li>
                                    <li><strong>Fire Station:</strong> 0512 - 221 - 8999</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="contact-form">
                            <h2>Send us a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary btn-block">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;