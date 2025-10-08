import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>

      <main className="flex-grow relative">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/70 backdrop-blur-sm z-50">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        <div className=" flex-1">
          <Outlet></Outlet>
        </div>
      </main>
      <Footer></Footer>
      <ToastContainer theme="colored"></ToastContainer>
    </div>
  );
};

export default RootLayout;
