import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nodejs = () => {
    return (
        <Link className='group'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 hover:text-white transiction duration-300'>
                <div className='flex justify-between items-center mb-5'>
                    <FaNodeJs className='text-5xl text-sky-500 rounded-lg group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Node js</h1>
                </div>
                <p className='group-hover:text-white'>
                    Node.js is a JavaScript runtime environment that allows running server-side applications. It's efficient, event-driven, and ideal for building scalable and high-performance web servers, APIs, and real-time applications.
                </p>
            </div>
        </Link>
    );
};

export default Nodejs;