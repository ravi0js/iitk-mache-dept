import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import People from './pages/People';
import Academics from './pages/Academics';
import Research from './pages/Research';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;