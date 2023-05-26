import React from 'react';
import { Link } from 'react-router-dom';
import { SiTailwindcss } from "react-icons/si";

const Tailwind = () => {
    return (
        <Link className='group'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 hover:!text-white transiction duration-300'>
                <div className='flex justify-between items-center mb-5'>
                    <SiTailwindcss className='text-5xl text-sky-500 group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Tailwind</h1>
                </div>
                <p className='group-hover:text-white'>
                    Tailwind CSS is a utility-first CSS framework that enables rapid UI development. With its extensive utility classes, it provides flexibility and efficiency in creating custom designs and responsive layouts without writing custom CSS.
                </p>
            </div>
        </Link>
    );
};

export default Tailwind;