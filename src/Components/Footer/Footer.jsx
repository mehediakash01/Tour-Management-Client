import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">

  <nav>
    <h6 className="footer-title">contact Details</h6>
      <a className="link link-hover">+88 01533 333 333</a>
    <a className="link link-hover">info@gmail.com</a>
    <a className="link link-hover">72, Wall street, King Road, Dhaka</a>
  </nav>

<nav>
  <h6 className="footer-title">Terms & Conditions</h6>
  <a className="link link-hover">Terms of Use</a>
  <a className="link link-hover">Privacy Policy</a>
  <a className="link link-hover">Cookie Policy</a>
  <a className="link link-hover">Legal Notice</a>
</nav>


  <nav>
    <h6 className="footer-title">Social Media Links</h6>
    <div className='flex gap-2'>
     <FaFacebook size={30}></FaFacebook>
     <FaInstagram size={30}></FaInstagram>
     <FaTwitter size={30}></FaTwitter>
     <FaLinkedinIn size={30}></FaLinkedinIn>
    </div>
  </nav>
</footer>
    );
};

export default Footer;