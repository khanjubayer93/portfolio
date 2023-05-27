import React from 'react';
import Html from './Html/Html';
import Css from './Css/Css';
import Bootstarp from './Bootstarp/Bootstarp';
import Tailwind from './Tailwind/Tailwind';
import ReactPro from './React/ReactPro';
import Javascript from './Javascript/Javascript';
import Nodejs from './Nodejs/Nodejs';
import Github from './Github/Github';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

// const skillItems = [
//     {
//         id:1,
//         icon:"https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png",
//         title:"",
//         description:""
//     },
//     {
//         id:2,
//         icon:"https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png",
//         title:"",
//         description:""
//     },
//     {
//         id:3,
//         icon:"image.png",
//         title:"",
//         description:""
//     },
// ]

const Skills = () => {
    return (
        <div className='lg:h-[750px] border-b-2 border-gray-300 pb-20' id='2'>
            <div className='text-center items-center mt-20 mb-10'>
                <h1 className='text-md uppercase'>Skills</h1>
                <h2 className='text-sky-500 text-5xl font-extrabold'>What I Do?</h2>
            </div>
            <div className='grid lg:grid-cols-4 lg:ms-10 gap-3 mx-3'>
                {
                    // skillItems.map(skill => <Link className='group'>
                    //     <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 transiction duration-300'>
                    //         <div className='flex justify-between items-center mb-5 '>
                    //             <img className='text-5xl text-sky-500 group-hover:text-white' src={skill.icon} alt="" />
                    //             {/* <FaCode className='text-5xl text-sky-500 group-hover:text-white' /> */}
                    //             <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>Html</h1>
                    //         </div>
                    //         <p className='group-hover:text-white'>
                    //             HTML is a markup language used for creating web pages, defining structure, content, and presentation. It's the foundation of the web.
                    //         </p>
                    //     </div>
                    // </Link>)
                }
                <Html></Html>
                <Css></Css>
                <Bootstarp></Bootstarp>
                <Tailwind></Tailwind>
                <ReactPro></ReactPro>
                <Javascript></Javascript>
                <Nodejs></Nodejs>
                <Github></Github>
            </div>
        </div>
    );
};

export default Skills;