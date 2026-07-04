import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ResearchHighlights from '../components/home/ResearchHighlights';
import NewsSection from '../components/home/NewsSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <ResearchHighlights />
            <NewsSection />
        </>
    );
};

export default Home;