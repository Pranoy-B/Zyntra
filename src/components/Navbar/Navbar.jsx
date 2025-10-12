import React from "react";
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineApps } from "react-icons/md";
import { GrInstallOption } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to='/'><AiOutlineHome/>Home</NavLink>
            </li>
            <li>
              <NavLink to='/allapps'><MdOutlineApps />App</NavLink>
            </li>
            <li>
              <NavLink><GrInstallOption />Installation</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="flex gap-1 justify-center items-center">
          <img className="h-[50px] w-[50px]" src={logo} alt="zyntra logo" />
          <h1 className="font-semibold text-2xl">Zyntra</h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to='/'><AiOutlineHome/>Home</NavLink>
          </li>
          <li>
            <NavLink to='/allapps'><MdOutlineApps />App</NavLink>
          </li>
          <li>
            <NavLink><GrInstallOption />Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#074fad] text-white">Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
