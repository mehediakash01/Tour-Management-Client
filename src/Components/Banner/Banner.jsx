import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=' my-12  '>
            <div className='flex lg: justify-around lg:items-center lg:flex-row md:flex-row md:items-center  flex-col-reverse  bg-accent rounded-md p-6 '>
                <div className='space-y-3'>
                    <h1 className='text-5xl text-white font-extrabold'>Discover the World with Us</h1>
                    <p className='text-white font-semibold'>Whether you're chasing mountain peaks or tranquil beaches <br /> we help you travel deeper, safer, and smarter..</p>
                    <Link to={'/allPackage'}><button className='btn btn-secondary'>Explore All Packages</button></Link>
                </div>
                <div>
                    <img className='w-[750px]' src="https://i.ibb.co/0R1jT4S0/Screenshot-2025-06-15-190344-removebg-preview.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;