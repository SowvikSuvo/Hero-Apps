import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { Github } from "lucide-react";
import "../index.css";

const Navbar = () => {
  return (
    <div className="navbar  bg-base-500 shadow-lg ">
      <div className="navbar-start w-11/12s ">
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
              <NavLink className={"navs"} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={"navs"} to="/apps">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink className={"navs"} to="/installation">
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <img className="w-12 h-full ml-3" src={logoImg} alt="" />
          <Link to="/" className="btn btn-ghost text-2xl ">
            HERO APPS
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="navs text-lg font-semibold" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navs text-lg font-semibold" to="/apps">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink className="navs text-lg font-semibold" to="/installation">
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/SowvikSuvo"
          target="https://github.com/SowvikSuvo"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white "
        >
          <span>
            <Github />
          </span>
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
