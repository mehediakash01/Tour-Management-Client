import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import navLogo from "../../assets/navLogo.png";
import Gallery from "./Gallery";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-primary text-base-content">
      {/* Main footer content */}
      <footer className=" flex justify-between items-center gap-12 sm:footer-horizontal   p-10 w-11/12 mx-auto border-b border-gray-400">
        <nav className="text-white">
          <img src={navLogo} className="w-24 h-24 mb-2" alt="Logo" />

          <h6 className="footer-title">Contact Details</h6> <br />
          <a className="link link-hover">+88 01533 333 333</a> <br />
          <a className="link link-hover">info@gmail.com</a> <br />
          <a className="link link-hover">72, Wall Street, King Road, Dhaka</a> <br />
        </nav>
        <nav >
         
            <Gallery></Gallery>
        </nav>

            <nav className="text-white">
        <h6 className="footer-title">Social Media Links</h6>
        <div className="flex gap-2">
          <Link to={"https://www.facebook.com/concentration369/"}>
            <FaFacebook size={30}></FaFacebook>
          </Link>
          <Link to={"https://www.instagram.com/mh_sky_69/"}>
            <FaInstagram size={30}></FaInstagram>
          </Link>
          <Link to={"https://x.com/mh_sky_69"}>
            <FaTwitter size={30}></FaTwitter>
          </Link>
          <Link to={"www.linkedin.com/in/mehediakash01"}>
            <FaLinkedinIn size={30}></FaLinkedinIn>
          </Link>
        </div>
      </nav>
      </footer>

      {/* Copyright bar */}
      <div className="text-center text-sm p-4 text-white">
        <p>
          Copyright © {new Date().getFullYear()} — All rights reserved by{" "}
          <span className="font-semibold">TripEase Ltd</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
