import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import './Html.css'

const Html = () => {
    return (
        <Link className='group'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 transiction duration-300'>
                <div className='flex justify-between items-center mb-5 '>
                    <FaCode className='text-5xl text-sky-500 group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Html</h1>
                </div>
                <p className='group-hover:text-white'>
                    HTML is a markup language used for creating web pages, defining structure, content, and presentation. It's the foundation of the web.
                </p>
            </div>
        </Link>
    );
};

export default Html;