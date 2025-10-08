import React from "react";
import useApplications from "../Hooks/useApplications";
import { useParams } from "react-router";
import AppNotFound from "../Components/AppNotFound";
import DetailsCard from "../Components/DetailsCard";
import RatingChart from "../Components/RatingChart";

const Details = () => {
  const { id } = useParams();
  const { applications } = useApplications();
  console.log(applications);

  const findData = applications.find((data) => data.id === Number(id));

  if (!findData) {
    return <AppNotFound></AppNotFound>;
  }

  const ratingData = findData.ratings;

  return (
    <div className="max-w-screen-2xl mx-auto">
      <DetailsCard findData={findData}></DetailsCard>

      {/* Chart */}
      <div className="mt-10 border-t pt-5 border-gray-300 mb-7 max-sm:px-2">
        <h1 className="font-bold text-2xl">Ratings</h1>
        <RatingChart ratingData={ratingData}></RatingChart>
      </div>

      {/* description  */}
      <div className="border-t pt-5 border-gray-300 max-sm:px-3">
        <h1 className="font-bold text-2xl">Description</h1>

        <p className="text-gray-500 mt-4">{findData.description}</p>
      </div>
    </div>
  );
};

export default Details;
