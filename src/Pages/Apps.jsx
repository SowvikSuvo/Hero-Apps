import React from "react";
import useApplications from "../Hooks/useApplications";
import ApplicationCard from "../Components/ApplicationCard";

const Apps = () => {
  const { applications } = useApplications();
  return (
    <div>
      <div className="text-center mt-10 space-y-5 ">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-2xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-10 mb-5 max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12">
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
          ></ApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
