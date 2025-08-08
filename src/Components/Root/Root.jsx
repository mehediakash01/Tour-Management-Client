import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[70vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;