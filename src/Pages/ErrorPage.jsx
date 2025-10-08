import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import pageNotFound from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <div className="h-full flex-1  justify-center items-center space-y-5 text-center">
        <img className="mx-auto mt-25" src={pageNotFound} alt="" />
        <h1 className="text-4xl font-bold">OPPS, page not found!</h1>
        <p>The page you are looking for is not available.</p>
        <Link
          to={"/"}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12"
        >
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
