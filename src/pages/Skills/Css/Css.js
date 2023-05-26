import React from 'react';
import { BsFiletypeCss } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Css = () => {
    return (
        <Link className='group'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 hover:!text-white transiction duration-300'>
                <div className='flex justify-between items-center mb-5'>
                    <BsFiletypeCss className='text-5xl text-sky-500 group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Css</h1>
                </div>
                <p className='group-hover:text-white'>
                    CSS (Cascading Style Sheets) is a stylesheet language that enhances HTML by controlling the visual appearance of web pages, including layout, colors, and fonts.
                </p>
            </div>
        </Link>
    );
};

export default Css;