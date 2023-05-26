import React from 'react';
import { SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Javascript = () => {
    return (
        <Link className='group'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 hover:text-white transiction duration-300'>
                <div className='flex justify-between items-center mb-5'>
                    <SiJavascript className='text-5xl text-sky-500 rounded-lg group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Javascript</h1>
                </div>
                <p className='group-hover:text-white'>
                    JavaScript React is a powerful combination for building interactive web applications. React leverages JavaScript's versatility to create reusable UI components and provide a seamless user experience.
                </p>
            </div>
        </Link>
    );
};

export default Javascript;