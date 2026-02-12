import React from 'react';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import ProjectList from '../components/ProjectList';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Showcase />
            <div id="work">
                <ProjectList />
            </div>
            <About />
            <Contact />
        </>
    );
};

export default Home;
