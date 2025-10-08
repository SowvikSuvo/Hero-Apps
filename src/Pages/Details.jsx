import React from "react";
import useApplications from "../Hooks/useApplications";
import { useParams } from "react-router";
import AppNotFound from "../Components/AppNotFound";

const Details = () => {
  const { applications } = useApplications();
  const { id } = useParams();

  const findData = applications.find((data) => data.id === Number(id));
  if (!findData) {
    return <AppNotFound></AppNotFound>;
  }

  const ratingData = findData.ratings;
  console.log(ratingData);

  return <div className="max-w-screen-2xl mx-auto">
    
  </div>;
};

export default Details;
