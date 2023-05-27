import React from 'react';
import { BsBootstrap } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Bootstarp = () => {
    return (
        <Link className='group'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 hover:!text-white transiction duration-300'>
                <div className='flex justify-between items-center mb-5'>
                    <BsBootstrap className='text-5xl text-sky-500 group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Bootstrap</h1>
                </div>
                <p className='group-hover:text-white line-clamp-6'>
                    Bootstrap is a powerful front-end framework for building responsive websites. It offers a comprehensive set of tools, components, and layouts that simplify and speed up the development process.
                </p>
            </div>
        </Link>
    );
};

export default Bootstarp;