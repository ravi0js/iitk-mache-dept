import React, { useState } from 'react';
import { 
    FaFileAlt, 
    FaCalendarAlt, 
    FaUserGraduate, 
    FaCheckCircle,
    FaMoneyBillWave,
    FaAward,
    FaInfoCircle,
    FaDownload,
    FaExternalLinkAlt,
    FaArrowRight,
    FaClock,
    FaUniversity,
    FaGraduationCap
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Pages.css';

const Admissions = () => {
    const [activeProgram, setActiveProgram] = useState('btech');

    const programDetails = {
        btech: {
            title: 'B.Tech in Mechanical Engineering',
            duration: '4 Years',
            eligibility: '10+2 with Physics, Chemistry, and Mathematics with minimum 75% aggregate',
            entrance: 'JEE Advanced',
            seats: '120',
            fee: '₹2.5 Lakhs per year',
            scholarship: 'Merit-cum-Means scholarship available',
            applyLink: '#'
        },
        mtech: {
            title: 'M.Tech in Mechanical Engineering',
            duration: '2 Years',
            eligibility: 'B.Tech/B.E in Mechanical or related field with minimum 60% marks',
            entrance: 'GATE',
            seats: '60',
            fee: '₹1.8 Lakhs per year',
            scholarship: 'GATE stipend and Institute scholarships available',
            applyLink: '#'
        },
        phd: {
            title: 'Ph.D in Mechanical Engineering',
            duration: '3-5 Years',
            eligibility: 'Master\'s degree in Engineering/Science with minimum 55% marks',
            entrance: 'Written test and Interview',
            seats: '30',
            fee: '₹50,000 per year',
            scholarship: 'Institute Fellowship and project assistantships available',
            applyLink: '#'
        },
        ms: {
            title: 'M.S. (Research)',
            duration: '2-3 Years',
            eligibility: 'B.Tech/B.E with minimum 60% marks and valid GATE score',
            entrance: 'GATE and Interview',
            seats: '40',
            fee: '₹1.5 Lakhs per year',
            scholarship: 'Research assistantships available',
            applyLink: '#'
        }
    };

    const importantDates = [
        { event: 'Application Start Date', date: 'January 15, 2026', status: 'upcoming' },
        { event: 'Application Deadline', date: 'March 31, 2026', status: 'upcoming' },
        { event: 'Entrance Examination', date: 'April 15-20, 2026', status: 'upcoming' },
        { event: 'Interview Schedule', date: 'May 10-20, 2026', status: 'upcoming' },
        { event: 'Admission Offers', date: 'June 1, 2026', status: 'upcoming' },
        { event: 'Registration Start', date: 'July 1, 2026', status: 'upcoming' },
    ];

    const documentsRequired = [
        '10th and 12th Mark Sheets',
        'Bachelor\'s Degree Certificate and Transcripts',
        'Master\'s Degree Certificate (for Ph.D applicants)',
        'GATE/JAM Score Card',
        'Statement of Purpose',
        'Letters of Recommendation (2-3)',
        'Research Proposal (for Ph.D)',
        'Category Certificate (if applicable)',
    ];

    const scholarships = [
        {
            name: 'Institute Merit Scholarship',
            amount: '₹1.2 Lakhs per year',
            eligibility: 'Top 5% students in B.Tech program',
            details: 'Based on academic performance'
        },
        {
            name: 'GATE Fellowship',
            amount: '₹12,400 per month',
            eligibility: 'M.Tech students with valid GATE score',
            details: 'For full-time M.Tech students'
        },
        {
            name: 'PMSSS Scholarship',
            amount: '₹1 Lakh per year',
            eligibility: 'Students from Jammu & Kashmir',
            details: 'Govt. of India scholarship'
        },
        {
            name: 'Research Assistantship',
            amount: '₹25,000-35,000 per month',
            eligibility: 'Ph.D and M.S. students',
            details: 'Based on research projects'
        },
    ];

    return (
        <div className="page-container">
            <div className="page-hero">
                <div className="container">
                    <h1>Admissions</h1>
                    <p>Join the Department of Mechanical Engineering at IIT Kanpur</p>
                </div>
            </div>

            {/* Quick Overview */}
            <section className="section-padding bg-light" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
                <div className="container">
                    <div className="admissions-overview-grid">
                        <div className="overview-item">
                            <FaGraduationCap className="overview-icon" />
                            <div>
                                <div className="overview-number">4</div>
                                <div className="overview-label">Programs</div>
                            </div>
                        </div>
                        <div className="overview-item">
                            <FaUniversity className="overview-icon" />
                            <div>
                                <div className="overview-number">250+</div>
                                <div className="overview-label">Seats Available</div>
                            </div>
                        </div>
                        <div className="overview-item">
                            <FaAward className="overview-icon" />
                            <div>
                                <div className="overview-number">4+</div>
                                <div className="overview-label">Scholarships</div>
                            </div>
                        </div>
                        <div className="overview-item">
                            <FaClock className="overview-icon" />
                            <div>
                                <div className="overview-number">6</div>
                                <div className="overview-label">Important Dates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Cards */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Programs Offered</h2>
                        <p className="section-subtitle">
                            Choose from our comprehensive range of academic programs in Mechanical Engineering.
                        </p>
                    </div>
                    
                    <div className="program-tabs">
                        {Object.keys(programDetails).map((key) => (
                            <button
                                key={key}
                                className={`program-tab ${activeProgram === key ? 'active' : ''}`}
                                onClick={() => setActiveProgram(key)}
                            >
                                {key.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <div className="program-details-card">
                        <div className="program-details-content">
                            <h3>{programDetails[activeProgram].title}</h3>
                            <div className="program-details-grid-admissions">
                                <div className="detail-item">
                                    <FaClock className="detail-icon" />
                                    <div>
                                        <strong>Duration</strong>
                                        <p>{programDetails[activeProgram].duration}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <FaUserGraduate className="detail-icon" />
                                    <div>
                                        <strong>Eligibility</strong>
                                        <p>{programDetails[activeProgram].eligibility}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <FaFileAlt className="detail-icon" />
                                    <div>
                                        <strong>Entrance Exam</strong>
                                        <p>{programDetails[activeProgram].entrance}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <FaUniversity className="detail-icon" />
                                    <div>
                                        <strong>Seats</strong>
                                        <p>{programDetails[activeProgram].seats}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <FaMoneyBillWave className="detail-icon" />
                                    <div>
                                        <strong>Fee Structure</strong>
                                        <p>{programDetails[activeProgram].fee}</p>
                                    </div>
                                </div>
                                <div className="detail-item">
                                    <FaAward className="detail-icon" />
                                    <div>
                                        <strong>Scholarship</strong>
                                        <p>{programDetails[activeProgram].scholarship}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="program-actions">
                                <a href={programDetails[activeProgram].applyLink} className="btn btn-primary">
                                    Apply Now <FaArrowRight />
                                </a>
                                <button className="btn btn-outline">
                                    <FaDownload /> Brochure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Important Dates</h2>
                        <p className="section-subtitle">
                            Mark your calendar for key admissions deadlines and events.
                        </p>
                    </div>
                    <div className="dates-timeline">
                        {importantDates.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-marker">
                                    <div className="timeline-dot"></div>
                                    {index < importantDates.length - 1 && <div className="timeline-line"></div>}
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-date">{item.date}</div>
                                    <div className="timeline-event">{item.event}</div>
                                    <span className="timeline-status status-upcoming">Upcoming</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Application Process</h2>
                        <p className="section-subtitle">
                            Follow these steps to successfully apply for your desired program.
                        </p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Online Application</h4>
                                <p>Fill out the online application form with your personal and academic details.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Upload Documents</h4>
                                <p>Upload all required documents including transcripts, certificates, and photographs.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Application Fee</h4>
                                <p>Pay the application fee online through the secure payment gateway.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Entrance Examination</h4>
                                <p>Appear for the required entrance examination as per program requirements.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">5</div>
                            <div className="step-content">
                                <h4>Interview (if required)</h4>
                                <p>Shortlisted candidates will be called for an interview round.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">6</div>
                            <div className="step-content">
                                <h4>Admission Offer</h4>
                                <p>Receive admission offer and complete the registration process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Required Documents</h2>
                        <p className="section-subtitle">
                            Prepare these documents before starting your application.
                        </p>
                    </div>
                    <div className="documents-grid">
                        {documentsRequired.map((doc, index) => (
                            <div className="document-item" key={index}>
                                <FaCheckCircle className="document-icon" />
                                <span>{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scholarships */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Scholarships & Financial Aid</h2>
                        <p className="section-subtitle">
                            Various scholarships and assistantships are available to support your education.
                        </p>
                    </div>
                    <div className="scholarships-grid">
                        {scholarships.map((scholar, index) => (
                            <div className="scholarship-card card" key={index}>
                                <div className="scholarship-icon">
                                    <FaAward />
                                </div>
                                <h4>{scholar.name}</h4>
                                <div className="scholarship-amount">{scholar.amount}</div>
                                <div className="scholarship-eligibility">
                                    <strong>Eligibility:</strong> {scholar.eligibility}
                                </div>
                                <div className="scholarship-details">
                                    <FaInfoCircle className="info-icon" />
                                    <span>{scholar.details}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="admissions-contact">
                        <div className="contact-box">
                            <h3>Need Help with Admissions?</h3>
                            <p>
                                For any queries regarding admissions, please contact our admissions office.
                            </p>
                            <div className="contact-box-details">
                                <div>
                                    <strong>Email:</strong> admissions@mech.iitk.ac.in
                                </div>
                                <div>
                                    <strong>Phone:</strong> 0512 - 259 - 0151
                                </div>
                                <div>
                                    <strong>Working Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary">
                                Contact Us <FaExternalLinkAlt />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;