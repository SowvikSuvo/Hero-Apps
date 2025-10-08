import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

const InstallCard = ({ data, handleRemove }) => {
  return (
    <div className="p-3 bg-white flex justify-between items-center rounded mt-5">
      <div className="flex items-center space-x-3">
        <img className="w-[80px] h-[70px]" src={data.image} alt="sdf" />
        <div className="space-y-2">
          <h1 className="font-bold">{data.title}</h1>
          <div className="flex space-x-5">
            <div className="flex items-center space-x-1 text-[#00D390]">
              <img className="h-[16px] w-[16px]" src={downloadIcon} alt="" />
              <p>{data.downloads}</p>
            </div>
            <div className="flex items-center space-x-1 text-orange-500">
              <img className="h-[16px] w-[16px]" src={ratingIcon} alt="" />
              <p>{data.ratingAvg}</p>
            </div>
            <div>
              <p>{data.size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemove(data.id)}
          className="btn bg-[#00D390] text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallCard;
