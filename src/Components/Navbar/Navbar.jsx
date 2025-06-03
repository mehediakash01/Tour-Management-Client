import React from "react";
import { Link, NavLink } from "react-router";
import navLogo from '../../assets/navLogo.png'

const Navbar = () => {
  const links = (
    <ul className="space-x-4 text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-packages">All Packages</NavLink>
      <NavLink to="/About-Us">About Us</NavLink>
    </ul>
  );

  return (
    <div className="navbar flex justify-between bg-primary shadow-sm">
      <div className="navbar-start w-fit">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
            <img src={navLogo} className="w-32 " alt="" />
            <p className="text-secondary font-bold text-3xl">Trip<span className="text-accent">Ease</span></p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="flex justify-end space-x-2">
        <Link to={"/login"}>
          <button className="btn bg-secondary text-white border-accent ">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="btn  bg-secondary text-white border-accent">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
