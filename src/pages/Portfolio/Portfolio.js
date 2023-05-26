import React from 'react';
import ProjectOne from './ProjectOne/ProjectOne';

const Portfolio = () => {
    return (
        <div className='lg:h-[750px] my-20 border-b-2 border-gray-300' id='3'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold mb-5'>My Projects</h1>
                <h2 className='text-red-500'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mx-5'>
                <ProjectOne></ProjectOne>
                <ProjectOne></ProjectOne>
            </div>
        </div>
    );
};

export default Portfolio;