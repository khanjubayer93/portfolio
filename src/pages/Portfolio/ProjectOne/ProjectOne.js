import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaChalkboardTeacher, FaProjectDiagram, FaRegClipboard, FaRegStar } from 'react-icons/fa';
import { IconName, MdOutlineBusinessCenter } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProjectOne = () => {
    return (
        <Link to="https://medicare-client.web.app" className="w-full bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">

            <div className="px-6 py-6">
                <img className="w-full h-full rounded-md" src="https://i.ibb.co/LzVNhCb/Project-One100.jpg" alt="avatar" />

                <div className='flex justify-between items-center  mt-8'>
                    <div className="flex items-center text-gray-700 dark:text-gray-200 gap-2">
                        <FaChalkboardTeacher className='h-6 w-6 text-sky-500' />
                        <h1 className="text-lg font-semibold  dark:text-white">Medicare</h1>
                    </div>
                    <div className='flex'>
                        <FaRegStar className='w-5 h-5 text-sky-600' />
                        <FaRegStar className='w-5 h-5 text-sky-600' />
                        <FaRegStar className='w-5 h-5 text-sky-600' />
                        <FaRegStar className='w-5 h-5 text-sky-600' />
                        <FaRegStar className='w-5 h-5 text-sky-600' />

                    </div>
                </div>
                <div className="flex mt-4 text-gray-700 dark:text-gray-200 gap-2">
                    <AiOutlineSetting className='h-6 w-6 text-sky-500' />
                    <h1 className=" dark:text-white">Built with Html, Css, React, Tailwind, Merakiui</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">

                    <FaChalkboardTeacher className='h-6 w-6' />
                    <h1 className="px-2 text-sm">Meraki UI</h1>
                </div>
            </div>
        </Link>
    );
};

export default ProjectOne;