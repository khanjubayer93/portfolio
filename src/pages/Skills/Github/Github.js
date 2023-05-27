import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Github = () => {
    return (
        <Link className='group min-h-96'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 hover:!text-white transiction duration-300'>
                <div className='flex justify-between items-center mb-5'>
                    <FiGithub className='text-5xl text-sky-500 group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Github</h1>
                </div>
                <p className='group-hover:text-white line-clamp-4'>
                    GitHub is a web-based platform for version control and collaborative software development. It enables teams to manage and share code, track changes, and facilitate efficient collaboration on projects.
                </p>
            </div>
        </Link>
    );
};

export default Github;