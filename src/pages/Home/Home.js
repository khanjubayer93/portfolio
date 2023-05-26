import React from 'react';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Education from '../Education/Education';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <About></About>
            <Skills/>
            <Portfolio/>
            <Resume/>
            <Education/>
            <Blog/>
            <Contact/>
        </div>
    );
};

export default Home;