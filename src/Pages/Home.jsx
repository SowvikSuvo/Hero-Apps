import React from "react";
import { Link } from "react-router";
import HeroSection from "./HeroSection";
import ApplicationCard from "../Components/ApplicationCard";
import useApplications from "../Hooks/useApplications";

const Home = () => {
  const { applications, loading, error } = useApplications();
  

  const featuredApplications = applications.slice(0, 8);

  return (
    <div>
      <HeroSection></HeroSection>
      <div className="text-center mt-10 space-y-5 ">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="text-2xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-10 mb-5 max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12">
        {featuredApplications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
          ></ApplicationCard>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <Link
          to="/apps"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  "
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
