import React, { useState } from "react";
import useApplications from "../Hooks/useApplications";
import ApplicationCard from "../Components/ApplicationCard";
import AppNotFound from "../Components/AppNotFound";

const Apps = () => {
  const { applications } = useApplications();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? applications.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : applications;

  return (
    <div>
      <div className="text-center mt-10 space-y-5 ">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-2xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mx-auto max-w-screen-2xl mt-6 max-sm:p-3">
        <h1 className="text-2xl font-bold">
          <span>({searchApps.length})</span> Apps Found
        </h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input font-semibold"
          type="search"
          placeholder="Search App"
        />
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center mt-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : searchApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-10 mb-5 max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12">
          {searchApps.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            ></ApplicationCard>
          ))}
        </div>
      ) : (
        <AppNotFound></AppNotFound>
      )}
    </div>
  );
};

export default Apps;
