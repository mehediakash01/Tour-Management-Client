import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <ul className="space-x-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-packages">All Packages</NavLink>
      <NavLink to="/About-Us">About Us</NavLink>
    </ul>
  );

  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm">
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
        <p>Tour</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="flex justify-end ">
        <Link to={"/login"}>
          <button className="btn bg-red-500 text-white ">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="btn  bg-red-500 text-white ">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
