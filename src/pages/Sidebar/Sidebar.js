import React from 'react';
import { AiFillHome, AiOutlineFileDone, AiOutlineHome } from "react-icons/ai";
import { BsFileCode, BsFileEarmarkCode, BsLightbulb } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { SlEarphonesAlt } from "react-icons/sl";
import { FiBookOpen, FiGithub } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='fixed lg:block hidden'>
            <aside alt=""side className="flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto 
            bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className=" w-48 h-48 mx-2 p-1 rounded-full border-4 border-white bg-gray-200" src="https://i.ibb.co/hWWxQCn/Jubayer-2.jpg" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 text-xl uppercase">Jubayer Khan</h4>
                </div>
                <div className='my-5'>
                    <p className="mx-2 mt-1 text-lg font-bold text-sky-500 dark:text-gray-400 uppercase text-center">Find with me</p>
                    <div className="flex justify-center gap-8 items-center mt-3 -mx-2">
                        <a alt="" href="https://www.facebook.com/jubayerkhan993" className='bg-gray-200 p-3 rounded-md hover:text-white hover:bg-sky-500 transition duration-300'>
                            <FaFacebookF className='text-xl' />
                        </a>
                        <a alt="" href="https://www.linkedin.com/in/khanjubayer/" className='bg-gray-200 p-3 rounded-md hover:text-white hover:bg-sky-500 transition duration-300'>
                            <FaLinkedinIn className='text-xl' />
                        </a>
                        <a alt="" href="https://github.com/khanjubayer93" className='bg-gray-200 p-3 rounded-md hover:text-white hover:bg-sky-500 transition duration-300'>
                            <FiGithub className='text-xl' />
                        </a>

                    </div>
                </div>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a alt="" href='#1' className='flex items-center px-4 py-2 text-white bg-gray-500 rounded-lg dark:bg-gray-800 dark:text-gray-200 mb-3 transition duration-300'>
                            <AiFillHome className="w-6 h-6" />
                            <span className="mx-4 font-medium uppercase">Home</span>
                        </a>
                        <a alt="" href='#2' className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mb-3 transition duration-300 scroll-auto'>
                            <BsLightbulb className="w-6 h-6" />
                            <span className="mx-4 font-medium uppercase">Skills</span>
                        </a>
                        <a alt="" href='#3' className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mb-3 transition duration-300'>
                            <BsFileEarmarkCode className="w-6 h-6" />
                            <span className="mx-4 font-medium uppercase">Portfolio</span>
                        </a>
                        <a alt="" href='#4' className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mb-3 transition duration-300'>
                            <AiOutlineFileDone className="w-6 h-6" />
                            <span className="mx-4 font-medium uppercase">Resume</span>
                        </a>
                        <a alt="" href='#5' className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mb-3 transition duration-300'>
                            <FiBookOpen className="w-6 h-6" />
                            <span className="mx-4 font-medium uppercase">Education</span>
                        </a>
                        <a alt="" href='#6' className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mb-3 transition duration-300'>
                            <HiOutlinePencilSquare className="w-6 h-6" />
                            <span className="mx-4 font-medium uppercase">Blog</span>
                        </a>
                        <a alt="" href='#7' className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mb-3 transition duration-300'>
                            <SlEarphonesAlt className="w-6 h-6" />
                            <span className="mx-4 font-medium uppercase">Contact</span>
                        </a>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;