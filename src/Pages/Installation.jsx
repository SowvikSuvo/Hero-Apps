import React, { useEffect, useState } from "react";
import useApplications from "../Hooks/useApplications";
import { getStoredData, removeFromStoreData } from "../Utility/LocalStroge";
import { toast } from "react-toastify";
import InstallCard from "../Components/InstallCard";

const Installation = () => {
  const [sortItem, setSortItem] = useState("");

  const { applications } = useApplications();

  const [installedIds, setInstalledIds] = useState([]);

  useEffect(() => {
    setInstalledIds(getStoredData());
  }, []);

  const data = getStoredData();
  const matchedData =
    applications?.filter((item) => data.includes(item.id)) || [];

  const handleRemove = (id) => {
    removeFromStoreData(id);
    const remainingIds = installedIds.filter((currentId) => currentId !== id);
    setInstalledIds(remainingIds);

    toast.warning("App is Uninstall");
  };

  const sortOrder = () => {
    if (sortItem === "abc") {
      return [...matchedData].sort((a, b) => a.downloads - b.downloads);
    } else if (sortItem === "dbc") {
      return [...matchedData].sort((a, b) => b.downloads - a.downloads);
    } else {
      return matchedData;
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto max-sm:p-3">
      <div className="mt-[70px] space-y-3">
        <h1 className="font-bold text-4xl text-center">Your Installed Apps</h1>
        <p className="text-gray-400 text-center max-sm:mb-3">
          Explore All Trending Apps on the Market developed by Sowvik Suvo
        </p>
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">
            {matchedData.length} Apps Found
          </h1>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered font-semibold"
              value={sortItem}
              onChange={(e) => setSortItem(e.target.value)}
            >
              <option value="none">Sort by Size</option>
              <option value="abc">Low to High</option>
              <option value="dbc">High to Low</option>
            </select>
          </label>
        </div>
        {matchedData.length === 0 && (
          <h1 className="font-bold text-4xl text-center mt-20">
            NO APP INSTALLED
          </h1>
        )}
        {sortOrder().map((data) => (
          <InstallCard
            handleRemove={handleRemove}
            key={data.id}
            data={data}
          ></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
