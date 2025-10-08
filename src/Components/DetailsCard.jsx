import { LucideCopyright } from "lucide-react";
import React, { useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import likeIcon from "../assets/icon-review.png";
import { addInstallData, getStoredData } from "../Utility/LocalStroge";
import { toast } from "react-toastify";

const DetailsCard = ({ findData }) => {
  const { image, title, companyName, downloads, ratingAvg, reviews, size, id } =
    findData;

  const alreadyInstalled = getStoredData().includes(id);
  const [isInstalled, setInstalled] = useState(alreadyInstalled);

  const handleAddData = (id) => {
    addInstallData(id);
    setInstalled(true);
    toast.success("App is Installed!");
  };

  return (
    <div className=" bg-base-200 p-5 min-h-[350px]">
      <div className="flex items-center max-sm:items-start max-sm:flex-col">
        <div>
          <figure className="h-[350px] w-[350px] p-10 overflow-hidden">
            <img src={image} alt="Shoes" className="rounded-xl object-cover" />
          </figure>
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1 className="font-semibold mb-7 mt-2">
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </h1>

            <div className="flex space-x-30 max-sm:space-x-0 max-sm:space-y-10 text-center max-sm:flex-col border-t border-gray-300 pt-6">
              <div className="space-y-1">
                <img className="h-[40px] w-[40px]" src={downloadIcon} alt="" />
                <h1 className="text-start">Downloads</h1>
                <h1 className="font-bold text-3xl text-start">{downloads}</h1>
              </div>
              <div className="space-y-1">
                <img className="h-[40px] w-[40px]" src={ratingIcon} alt="" />
                <h1 className="text-start">Average Ratings</h1>
                <h1 className="font-bold text-3xl text-start">{ratingAvg}</h1>
              </div>
              <div className="space-y-1">
                <img className="h-[40px] w-[40px]" src={likeIcon} alt="" />
                <h1 className="text-start">Total Reviews</h1>
                <h1 className="font-bold text-3xl text-start">{reviews}</h1>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={() => handleAddData(id)}
              disabled={isInstalled}
              className={`btn text-white ${
                isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
