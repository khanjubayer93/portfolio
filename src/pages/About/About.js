import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='h-[750px] flex justify-center border-b-2 border-gray-300' id='1'>
            <div className='mt-24 text-center'>
                <img className='h-96 w-96 rounded-full border-8 border-sky-300' src="https://i.ibb.co/hWWxQCn/Jubayer-2.jpg" alt="" />
                <h1 className='text-5xl font-bold text-sky-500 my-8'>Jubayer Khan</h1>
                <h2 className='text-lg'>I am a <span className='text-red-500'>Web Developer</span></h2>
                <a href='#7'>
                    <button className='uppercase mt-5 shadow-xl px-5 py-2 rounded-md text-sky-500 font-semibold  hover:bg-sky-500 hover:text-white transiction duration-300'>Contact Me</button>
                </a>
            </div>
        </div>
    );
};

export default About;