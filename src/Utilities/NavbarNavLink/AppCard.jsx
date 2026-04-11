import React from "react";
import { FcRating } from "react-icons/fc";

const AppCard = ({ app }) => {
  const { companyName, downloads, image, ratingAvg, reviews, size, title } =
    app;
  return (
    <div className="max-w-full w-full border border-gray-300 rounded-xl p-4 space-y-2 flex flex-col ">
      <div className="max-w-full grow">
        <img src={image} alt={image} />
      </div>
      <div className="mt-auto flex flex-col">
        <h1 className="font-semibold text-xl ">{title}</h1>
        <p>{size} MB</p>
        <div className="flex flex-row justify-start items-center gap-2">
          <p>{ratingAvg}</p> <FcRating></FcRating>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
