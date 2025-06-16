import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import navLogo from "../../assets/navLogo.png";

const Footer = () => {
    return (
        <div className="bg-primary text-base-content">
            {/* Main footer content */}
            <footer className="footer sm:footer-horizontal items-start justify-between flex-wrap gap-8 p-10 w-11/12 mx-auto border-b border-gray-400">
                <nav className='text-white'>
                    <img src={navLogo} className="w-12 h-12 mb-2" alt="Logo" />
                    <h6 className="footer-title">Contact Details</h6>
                    <a className="link link-hover">+88 01533 333 333</a>
                    <a className="link link-hover">info@gmail.com</a>
                    <a className="link link-hover">72, Wall Street, King Road, Dhaka</a>
                </nav>

                <nav className='text-white'>
                    <h6 className="footer-title">Terms & Conditions</h6>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                    <a className="link link-hover">Legal Notice</a>
                </nav>

                <nav className='text-white'>
                    <h6 className="footer-title">Social Media</h6>
                    <div className='flex gap-4 mt-2'>
                        <a className='hover:text-primary'><FaFacebook size={24} /></a>
                        <a className='hover:text-primary'><FaInstagram size={24} /></a>
                        <a className='hover:text-primary'><FaTwitter size={24} /></a>
                        <a className='hover:text-primary'><FaLinkedinIn size={24} /></a>
                    </div>
                </nav>
            </footer>

            {/* Copyright bar */}
            <div className="text-center text-sm p-4 text-white">
                <p>Copyright © {new Date().getFullYear()} — All rights reserved by <span className='font-semibold'>TripEase Ltd</span></p>
            </div>
        </div>
    );
};

export default Footer;
