import React from "react";
import useApplications from "../Hooks/useApplications";
import { useParams } from "react-router";
import AppNotFound from "../Components/AppNotFound";
import DetailsCard from "../Components/DetailsCard";

const Details = () => {
  const { id } = useParams();
  const { applications } = useApplications();
  console.log(applications);

  const findData = applications.find((data) => data.id === Number(id));

  if (!findData) {
    return <AppNotFound></AppNotFound>;
  }

  const ratingData = findData.ratings;
  console.log(ratingData);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <DetailsCard findData={findData}></DetailsCard>
    </div>
  );
};

export default Details;
