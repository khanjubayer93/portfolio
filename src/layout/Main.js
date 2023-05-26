import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Sidebar/Sidebar';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div className='grid  lg:grid-cols-12'>
            <div className='col-span-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-span-10'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;