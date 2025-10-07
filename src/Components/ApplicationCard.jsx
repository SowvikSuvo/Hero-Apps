import React from "react";
import DownImg from "../assets/icon-downloads.png";
import starImg from "../assets/icon-ratings.png";

const ApplicationCard = ({ application }) => {
  console.log(application);
  const { ratingAvg, downloads, title, image } = application;

  return (
    <div className="card bg-base-100  shadow-xl mx-auto hover:scale-105 transition ease-in-out ">
      <figure className="h-50 overflow-hidden">
        <img
          className="w-full object-cover  rounded-t-lg "
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between items-center mt-3 ">
          <div className="badge bg-[#F1F5E8] text-[#00D390] font-medium ">
            <span>
              <img className="w-4" src={DownImg} alt="" />
            </span>
            {downloads}
          </div>
          <div className="badge bg-[#FFF0E1] text-[#FF8811] font-medium ">
            {" "}
            <span>
              <img className="w-4" src={starImg} alt="" />
            </span>
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
