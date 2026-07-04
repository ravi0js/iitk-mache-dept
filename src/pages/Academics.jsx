import React, { useState } from 'react';
import { 
    FaGraduationCap, 
    FaBook, 
    FaFlask, 
    FaClock, 
    FaAward,
    FaLaptopCode,
    FaRobot,
    FaMicroscope,
    FaCogs,
    FaTools,
    FaChartLine,
    FaCalendarAlt,
    FaUserGraduate
} from 'react-icons/fa';
import './Pages.css';

const Academics = () => {
    const [activeTab, setActiveTab] = useState('btech');

    const programs = [
        { 
            id: 'btech',
            title: 'B.Tech in Mechanical Engineering', 
            duration: '4 Years', 
            credits: '160 Credits',
            seats: '120',
            description: 'Undergraduate program with comprehensive curriculum covering core and elective courses in mechanical engineering.',
            highlights: ['Strong foundation in engineering fundamentals', 'Hands-on laboratory experience', 'Industry internship program', 'Minor specialization options'],
            curriculum: ['Mathematics & Sciences', 'Engineering Mechanics', 'Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing Processes']
        },
        { 
            id: 'mtech',
            title: 'M.Tech in Mechanical Engineering', 
            duration: '2 Years', 
            credits: '80 Credits',
            seats: '60',
            description: 'Postgraduate program with specialization in Thermal Engineering, Manufacturing, or Design with research focus.',
            highlights: ['Advanced coursework in specialization', 'Research project with faculty', 'Industry collaboration', 'Thesis defense'],
            curriculum: ['Advanced Thermodynamics', 'Computational Fluid Dynamics', 'Advanced Manufacturing', 'Finite Element Analysis', 'Research Methodology']
        },
        { 
            id: 'phd',
            title: 'Ph.D in Mechanical Engineering', 
            duration: '3-5 Years', 
            credits: '40 Credits',
            seats: '30',
            description: 'Doctoral program with focus on cutting-edge research and innovation in mechanical engineering.',
            highlights: ['Original research contribution', 'Publication in top journals', 'Teaching experience', 'International collaboration'],
            curriculum: ['Advanced Research Methods', 'Specialized Seminars', 'Doctoral Dissertation']
        },
        { 
            id: 'ms',
            title: 'M.S. (Research)', 
            duration: '2-3 Years', 
            credits: '60 Credits',
            seats: '40',
            description: 'Research-oriented master\'s program for aspiring researchers with emphasis on independent investigation.',
            highlights: ['Research-intensive curriculum', 'Thesis based program', 'Flexible coursework', 'Research publications'],
            curriculum: ['Research Methodology', 'Specialized Courses', 'Masters Thesis']
        },
    ];

    const labs = [
        { 
            name: 'Thermal Engineering Lab', 
            icon: <FaChartLine />,
            description: 'Advanced heat transfer and thermodynamics experiments with state-of-the-art equipment.',
            equipment: ['Heat Exchanger Test Rig', 'Refrigeration System', 'Thermal Analysis System']
        },
        { 
            name: 'Manufacturing Lab', 
            icon: <FaCogs />,
            description: 'State-of-the-art machining and additive manufacturing facilities for hands-on learning.',
            equipment: ['CNC Machines', '3D Printers', 'Laser Cutting System']
        },
        { 
            name: 'Robotics and Automation Lab', 
            icon: <FaRobot />,
            description: 'Industrial robots, automation systems, and AI integration for advanced manufacturing research.',
            equipment: ['Industrial Robots', 'Vision Systems', 'PLC Controllers']
        },
        { 
            name: 'Materials Testing Lab', 
            icon: <FaMicroscope />,
            description: 'Materials characterization and mechanical testing equipment for research and education.',
            equipment: ['Universal Testing Machine', 'Hardness Tester', 'Microscope']
        },
        { 
            name: 'Computational Lab', 
            icon: <FaLaptopCode />,
            description: 'High-performance computing facilities for simulation and modeling in mechanical engineering.',
            equipment: ['Workstations', 'ANSYS Software', 'MATLAB']
        },
        { 
            name: 'Design & Innovation Lab', 
            icon: <FaTools />,
            description: 'Creative space for design thinking, prototyping, and innovation projects.',
            equipment: ['3D Scanners', 'Virtual Reality Setup', 'Prototyping Tools']
        },
    ];

    const courses = [
        'Thermodynamics I & II',
        'Fluid Mechanics',
        'Heat Transfer',
        'Machine Design',
        'Manufacturing Processes',
        'Engineering Mechanics',
        'Materials Science',
        'Control Systems',
        'CAD/CAM',
        'Robotics & Automation'
    ];

    return (
        <div className="page-container">
            <div className="page-hero">
                <div className="container">
                    <h1>Academics</h1>
                    <p>Explore our comprehensive academic programs and state-of-the-art facilities</p>
                </div>
            </div>
            
            {/* Quick Stats */}
            <section className="section-padding bg-light" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
                <div className="container">
                    <div className="academics-stats-grid">
                        <div className="academics-stat">
                            <FaGraduationCap className="academics-stat-icon" />
                            <div>
                                <div className="academics-stat-number">4</div>
                                <div className="academics-stat-label">Programs Offered</div>
                            </div>
                        </div>
                        <div className="academics-stat">
                            <FaBook className="academics-stat-icon" />
                            <div>
                                <div className="academics-stat-number">10+</div>
                                <div className="academics-stat-label">Core Courses</div>
                            </div>
                        </div>
                        <div className="academics-stat">
                            <FaFlask className="academics-stat-icon" />
                            <div>
                                <div className="academics-stat-number">6</div>
                                <div className="academics-stat-label">Research Labs</div>
                            </div>
                        </div>
                        <div className="academics-stat">
                            <FaAward className="academics-stat-icon" />
                            <div>
                                <div className="academics-stat-number">250+</div>
                                <div className="academics-stat-label">Students Enrolled</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Programs</h2>
                        <p className="section-subtitle">
                            We offer a range of programs designed to nurture the next generation of mechanical engineers.
                        </p>
                    </div>

                    {/* Program Tabs */}
                    <div className="program-tabs">
                        {programs.map((program) => (
                            <button
                                key={program.id}
                                className={`program-tab ${activeTab === program.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(program.id)}
                            >
                                {program.title.split('in')[0].trim()}
                            </button>
                        ))}
                    </div>

                    {/* Program Details */}
                    {programs.map((program) => (
                        <div 
                            key={program.id}
                            className={`program-details ${activeTab === program.id ? 'active' : ''}`}
                        >
                            <div className="program-details-grid">
                                <div className="program-main">
                                    <h3>{program.title}</h3>
                                    <p className="program-description">{program.description}</p>
                                    
                                    <div className="program-meta">
                                        <span><FaClock className="meta-icon" /> Duration: {program.duration}</span>
                                        <span><FaUserGraduate className="meta-icon" /> Seats: {program.seats}</span>
                                        <span><FaAward className="meta-icon" /> Credits: {program.credits}</span>
                                    </div>

                                    <div className="program-highlights">
                                        <h4>Program Highlights</h4>
                                        <ul>
                                            {program.highlights.map((highlight, idx) => (
                                                <li key={idx}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="program-curriculum">
                                    <h4>Core Curriculum</h4>
                                    <ul>
                                        {program.curriculum.map((subject, idx) => (
                                            <li key={idx}>
                                                <FaBook className="curriculum-icon" />
                                                {subject}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Laboratories Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Laboratories & Facilities</h2>
                        <p className="section-subtitle">
                            Access world-class laboratories and facilities for hands-on learning and research.
                        </p>
                    </div>
                    <div className="labs-grid">
                        {labs.map((lab, index) => (
                            <div className="lab-card card" key={index}>
                                <div className="lab-icon">{lab.icon}</div>
                                <h3>{lab.name}</h3>
                                <p className="lab-description">{lab.description}</p>
                                <div className="lab-equipment">
                                    <strong>Key Equipment:</strong>
                                    <ul>
                                        {lab.equipment.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Core Courses</h2>
                        <p className="section-subtitle">
                            Comprehensive curriculum covering fundamental and advanced topics in mechanical engineering.
                        </p>
                    </div>
                    <div className="courses-grid">
                        {courses.map((course, index) => (
                            <div className="course-card" key={index}>
                                <FaBook className="course-icon" />
                                <span>{course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calendar/Important Dates */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Academic Calendar</h2>
                        <p className="section-subtitle">
                            Important dates and deadlines for the academic year.
                        </p>
                    </div>
                    <div className="calendar-grid">
                        <div className="calendar-item">
                            <div className="calendar-date">
                                <span className="calendar-day">Aug</span>
                                <span className="calendar-number">1</span>
                            </div>
                            <div className="calendar-event">
                                <h4>Semester Begins</h4>
                                <p>Start of Fall Semester 2026</p>
                            </div>
                        </div>
                        <div className="calendar-item">
                            <div className="calendar-date">
                                <span className="calendar-day">Oct</span>
                                <span className="calendar-number">15</span>
                            </div>
                            <div className="calendar-event">
                                <h4>Mid-Semester Exams</h4>
                                <p>Mid-term examinations begin</p>
                            </div>
                        </div>
                        <div className="calendar-item">
                            <div className="calendar-date">
                                <span className="calendar-day">Dec</span>
                                <span className="calendar-number">10</span>
                            </div>
                            <div className="calendar-event">
                                <h4>End Semester Exams</h4>
                                <p>Final examinations begin</p>
                            </div>
                        </div>
                        <div className="calendar-item">
                            <div className="calendar-date">
                                <span className="calendar-day">Jan</span>
                                <span className="calendar-number">5</span>
                            </div>
                            <div className="calendar-event">
                                <h4>Spring Semester</h4>
                                <p>Spring Semester 2027 begins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;