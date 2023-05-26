import React from 'react';
import Html from './Html/Html';
import Css from './Css/Css';
import Bootstarp from './Bootstarp/Bootstarp';
import Tailwind from './Tailwind/Tailwind';
import ReactPro from './React/ReactPro';
import Javascript from './Javascript/Javascript';
import Nodejs from './Nodejs/Nodejs';
import Github from './Github/Github';

const Skills = () => {
    return (
        <div className='lg:h-[750px] border-b-2 border-gray-300 pb-20' id='2'>
            <div className='text-center items-center mt-20 mb-10'>
                <h1 className='text-md uppercase'>Skills</h1>
                <h2 className='text-sky-500 text-5xl font-extrabold'>What I Do?</h2>
            </div>
            <div className='grid lg:grid-cols-4 lg:ms-10 gap-3 mx-3'>
                <Html></Html>
                <Css></Css>
                <Bootstarp></Bootstarp>
                <Tailwind></Tailwind>
                <ReactPro></ReactPro>
                <Javascript></Javascript>
                <Nodejs></Nodejs>
                <Github></Github>
            </div>
        </div>
    );
};

export default Skills;