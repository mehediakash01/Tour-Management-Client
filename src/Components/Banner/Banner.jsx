import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=' my-12  '>
            <div className='flex lg: justify-around lg:items-center lg:flex-row md:flex-row md:items-center  flex-col-reverse  bg-accent rounded-md p-6 '>
                <div className='space-y-2'>
                    <h1 className='text-4xl text-white font-extrabold'>Your Journey Begins Here</h1>
                    <p className='text-white opacity-50'>Find epic destinations, connect with expert guides, and <br /> book your dream tour in minutes.</p>
                    <Link to={'/allPackage'}><button className='btn btn-secondary'>Explore All Packages</button></Link>
                </div>
                <div>
                    <img src="https://i.ibb.co/0R1jT4S0/Screenshot-2025-06-15-190344-removebg-preview.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;