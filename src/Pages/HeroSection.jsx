import React from "react";
import goImg from "../assets/fi_16076057.png";
import appleImg from "../assets/fi_5977575.png";
import heroImg from "../assets/hero.png";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div>
      <section>
        <div className="space-y-6 text-center">
          <h2 className="text-6xl font-bold leading-20 max-w-xl mx-auto text-center mt-20">
            We Build <span className="text-primary">Productive</span>{" "}
            <span className="">Apps</span>
          </h2>

          <p className="text-center max-w-3xl mx-auto">
            At APPORA, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="https://play.google.com/store/games"
              target="_blank"
              className="btn btn-xl  hover:shadow-xl rounded-xl"
            >
              <img className="w-10" src={goImg} alt="" />
              Google Play
            </Link>

            <Link
              to="https://www.apple.com/app-store/"
              target="_blank"
              className="btn btn-xl  hover:shadow-xl rounded-xl"
            >
              <img className="w-10" src={appleImg} alt="" />
              App Store
            </Link>
          </div>
        </div>
      </section>
      {/* Hero section */}
      <section>
        <img className="pt-10 mx-auto" src={heroImg} alt="" />
      </section>
      <section class=" bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] ">
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full flex justify-center items-center flex-col text-white min-h-[300px] space-y-6 max-sm:p-5">
          <h1 className="text-3xl font-bold text-center">
            Trusted by Millions, Built for You
          </h1>

          <div className="flex space-x-30 max-sm:space-x-0 max-sm:space-y-10  text-center max-sm:flex-col">
            <div className="space-y-1">
              <h1 className="text-sm text-gray-300">Total DOwnloads</h1>
              <h1 className="font-bold text-4xl">19.6M </h1>
              <h1 className="text-sm text-gray-300">
                21% More Than Last Month
              </h1>
            </div>
            <div className="space-y-1">
              <h1 className="text-sm text-gray-300">Total Reviews</h1>
              <h1 className="font-bold text-4xl">906K</h1>
              <h1 className="text-sm text-gray-300">
                46% more than last month
              </h1>
            </div>
            <div className="space-y-1">
              <h1 className="text-sm text-gray-300">Active Apps</h1>
              <h1 className="font-bold text-4xl">132+</h1>
              <h1 className="text-sm text-gray-300">31 more will Launch</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
