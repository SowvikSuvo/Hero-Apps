import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#001931] text-white rounded p-10 mt-20">
      <nav className="flex justify-between w-full border-b border-gray-600 pb-2">
        <div className="flex space-x-1 items-center justify-center font-semibold md:ml-35">
          <img className="h-[40px] w-[40px]" src={logo} alt="" />
          <h1>APPORA</h1>
        </div>

        <div className=" md:mr-35">
          <h1 className="font-semibold">Social Links</h1>

          <div className="flex space-x-3 mt-2">
            <Facebook />
            <Twitter />
            <Github />
          </div>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by</p>
      </aside>
    </footer>
  );
};

export default Footer;
