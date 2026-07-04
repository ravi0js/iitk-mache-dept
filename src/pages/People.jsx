import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaUserGraduate } from 'react-icons/fa';
import './Pages.css';

// Image component with fallback support
const ImageWithFallback = ({ src, fallback, alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setImgSrc(fallback);
            setHasError(true);
        }
    };

    return (
        <img 
            src={imgSrc} 
            alt={alt} 
            onError={handleError}
            {...props}
        />
    );
};

const People = () => {
    const faculty = [
        { 
            name: 'Prof. Rajesh Kumar', 
            designation: 'Professor & Head', 
            department: 'Mechanical Engineering',
            image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'rkumar@iitk.ac.in',
            expertise: 'Thermal Engineering, Heat Transfer'
        },
        { 
            name: 'Prof. Sunita Singh', 
            designation: 'Professor', 
            department: 'Thermal Engineering',
            image: 'https://ui-avatars.com/api/?name=Sunita+Singh&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'ssingh@iitk.ac.in',
            expertise: 'Thermodynamics, Energy Systems'
        },
        { 
            name: 'Prof. Amit Sharma', 
            designation: 'Associate Professor', 
            department: 'Manufacturing',
            image: 'https://ui-avatars.com/api/?name=Amit+Sharma&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'asharma@iitk.ac.in',
            expertise: 'Additive Manufacturing, CNC Machining'
        },
        { 
            name: 'Prof. Priya Patel', 
            designation: 'Assistant Professor', 
            department: 'Robotics',
            image: 'https://ui-avatars.com/api/?name=Priya+Patel&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'ppatel@iitk.ac.in',
            expertise: 'Industrial Robotics, Automation'
        },
        { 
            name: 'Dr. Vikram Mehta', 
            designation: 'Assistant Professor', 
            department: 'Materials Science',
            image: 'https://ui-avatars.com/api/?name=Vikram+Mehta&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'vmehta@iitk.ac.in',
            expertise: 'Nanomaterials, Composite Materials'
        },
        { 
            name: 'Dr. Anjali Reddy', 
            designation: 'Assistant Professor', 
            department: 'Fluid Mechanics',
            image: 'https://ui-avatars.com/api/?name=Anjali+Reddy&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'areddy@iitk.ac.in',
            expertise: 'Computational Fluid Dynamics, Aerodynamics'
        },
        { 
            name: 'Prof. Suresh Iyer', 
            designation: 'Professor', 
            department: 'Mechanical Design',
            image: 'https://ui-avatars.com/api/?name=Suresh+Iyer&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'siyer@iitk.ac.in',
            expertise: 'Machine Design, Finite Element Analysis'
        },
        { 
            name: 'Dr. Meera Nair', 
            designation: 'Associate Professor', 
            department: 'Mechatronics',
            image: 'https://ui-avatars.com/api/?name=Meera+Nair&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'mnair@iitk.ac.in',
            expertise: 'Control Systems, Embedded Systems'
        },
        { 
            name: 'Dr. Arjun Desai', 
            designation: 'Assistant Professor', 
            department: 'Energy Engineering',
            image: 'https://ui-avatars.com/api/?name=Arjun+Desai&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'adesai@iitk.ac.in',
            expertise: 'Renewable Energy, Solar Thermal'
        },
        { 
            name: 'Prof. Kavya Krishnan', 
            designation: 'Professor', 
            department: 'Biomechanics',
            image: 'https://ui-avatars.com/api/?name=Kavya+Krishnan&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'kkrishnan@iitk.ac.in',
            expertise: 'Medical Devices, Orthopaedic Biomechanics'
        },
        { 
            name: 'Dr. Ravi Verma', 
            designation: 'Associate Professor', 
            department: 'Manufacturing',
            image: 'https://ui-avatars.com/api/?name=Ravi+Verma&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'rverma@iitk.ac.in',
            expertise: 'Manufacturing Processes, Quality Control'
        },
        { 
            name: 'Dr. Nisha Gupta', 
            designation: 'Assistant Professor', 
            department: 'Thermal Engineering',
            image: 'https://ui-avatars.com/api/?name=Nisha+Gupta&size=150&background=0C1E3B&color=F47721&bold=true',
            email: 'ngupta@iitk.ac.in',
            expertise: 'Cryogenics, Refrigeration Systems'
        },
    ];

    // Additional staff members
    const staff = [
        { name: 'Mr. Ram Singh', role: 'Senior Technical Officer', department: 'Thermal Lab' },
        { name: 'Ms. Kavita Sharma', role: 'Technical Officer', department: 'Manufacturing Lab' },
        { name: 'Mr. Deepak Patel', role: 'Senior Administrative Officer', department: 'Department Office' },
    ];

    return (
        <div className="page-container">
            <div className="page-hero">
                <div className="container">
                    <h1>Our People</h1>
                    <p>Meet the distinguished faculty and researchers of the Department of Mechanical Engineering</p>
                </div>
            </div>
            
            {/* Faculty Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Faculty Members</h2>
                        <p className="section-subtitle">
                            Our faculty members are renowned for their exceptional contributions to teaching, research, and innovation.
                        </p>
                    </div>
                    <div className="people-grid">
                        {faculty.map((person, index) => (
                            <div className="person-card card" key={index}>
                                <div className="person-image">
                                    <ImageWithFallback 
                                        src={person.image}
                                        fallback="https://via.placeholder.com/150/0C1E3B/F47721?text=Faculty"
                                        alt={person.name}
                                    />
                                </div>
                                <div className="person-info">
                                    <div className="person-name">{person.name}</div>
                                    <div className="person-designation">{person.designation}</div>
                                    <div className="person-department">{person.department}</div>
                                    {person.expertise && (
                                        <div className="person-expertise">
                                            <FaUserGraduate className="expertise-icon" />
                                            <span>{person.expertise}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="person-social">
                                    <a href={`mailto:${person.email}`} className="social-icon" title="Email">
                                        <FaEnvelope />
                                    </a>
                                    <a href="#" className="social-icon" title="LinkedIn">
                                        <FaLinkedin />
                                    </a>
                                    <a href="#" className="social-icon" title="Twitter">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staff Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Staff & Administration</h2>
                        <p className="section-subtitle">
                            Dedicated professionals supporting the department's operations and research activities.
                        </p>
                    </div>
                    <div className="staff-grid">
                        {staff.map((person, index) => (
                            <div className="staff-card card" key={index}>
                                <div className="staff-icon">
                                    <FaUserGraduate style={{ fontSize: '2rem', color: 'var(--accent-orange)' }} />
                                </div>
                                <div className="staff-info">
                                    <h4>{person.name}</h4>
                                    <p className="staff-role">{person.role}</p>
                                    <p className="staff-dept">{person.department}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default People;