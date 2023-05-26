import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReactPro = () => {
    return (
        <Link className='group'>
            <div className='border-2 border-sky-200 p-5 shadow-xl rounded-xl hover:bg-sky-500 hover:!text-white transiction duration-300'>
                <div className='flex justify-between items-center mb-5'>
                    <FaReact className='text-5xl text-sky-500 group-hover:text-white' />
                    <h1 className='font-semibold text-xl text-sky-500 uppercase group-hover:text-white'>React</h1>
                </div>
                <p className='group-hover:text-white'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eligendi unde, neque eaque reiciendis illo esse saepe earum natus quis?
                </p>
            </div>
        </Link>
    );
};

export default ReactPro;