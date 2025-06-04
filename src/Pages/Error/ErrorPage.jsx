import React from 'react';
import Lottie from 'lottie-react';
import { IoArrowBack } from "react-icons/io5";
import lost from '../../assets/Lottie-files/Error.json'
import { Link } from 'react-router';

const ErrorPage = () => {

    return (
        <div className='bg-primary flex items-center flex-col gap-3 py-4'>
            
            <Lottie animationData={lost} loop={true} className='w-96'></Lottie>
            <p className='text-white text-2xl'>Oops! You seem lost in the Himalayas</p>
            <Link to={'/'} ><button  className='text-white flex items-center btn btn-secondary'><IoArrowBack /> Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;