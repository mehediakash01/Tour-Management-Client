import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import navLogo from "../../assets/navLogo.png";
import AuthInfo from "../../Hooks/AuthInfo";
import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { user, logoutUser } = AuthInfo();

  const links = (
    <ul className="space-x-4 lg:text-white menu menu-horizontal px-1">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allPackage">All Packages</NavLink>
      {user && <NavLink to="/my-bookings">My Bookings</NavLink>}
      <NavLink to="/About-Us">About Us</NavLink>
    </ul>
  );

  return (
    <div className="navbar bg-primary shadow-sm px-4 relative">
      <div className="navbar-start flex-1">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={navLogo} className="lg:w-12 lg:h-12 w-10 h-10" alt="Logo" />
          <p className="text-secondary font-bold text-xl lg:text-3xl">
            Trip<span className="text-accent">Ease</span>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
        {links}
      </div>

      <div className="navbar-end flex-none flex items-center gap-2">
        <ThemeToggle />

        {user ? (
          <div className="relative">
            <div
              onClick={() => setIsClicked(!isClicked)}
              className="cursor-pointer">
              <img
                className="w-10 h-10 rounded-full ring-1 ring-secondary"
                src={user.photoURL}
                alt="User"
              />
            </div>
            {isClicked && (
              <div className="absolute right-0 mt-4 z-10 bg-accent p-3 rounded-md shadow flex flex-col gap-1">
                <Link
                  to="/add-package"
                  className="text-white hover:bg-secondary px-2 py-1 rounded-md transition">
                  Add Package
                </Link>
                <Link
                  to="/managePackage"
                  className="text-white hover:bg-secondary px-2 py-1 rounded-md transition">
                  Manage My Packages
                </Link>
                <button
                  onClick={() => logoutUser()}
                  className="btn bg-secondary hover:bg-emerald-600 text-white border-none">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex  space-x-2">
            <Link to="/login">
              <button className="btn btn-sm bg-secondary text-white">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-sm bg-secondary text-white">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
