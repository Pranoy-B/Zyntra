import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { NavLink } from "react-router";

const AllApp = ({allApp}) => {
    const {image,id,title,downloads,ratingAvg, ratings} = allApp;
    const barRating = ratings;
  return (
    <NavLink to={`/appdetails/${id}`}>
      <div className="bg-[#bdd9cd ] border-2 border-gray-300 p-2 rounded-xl flex justify-center items-center ">
      <div className="space-y-3">
        <img className="w-[250px] h-[250px] rounded-xl" src={image} alt="" />
        <h1 className="font-semibold text-xl">{title}</h1>
        <div className="flex justify-between">
          <p className="flex justify-center items-center font-bold bg-white p-2 rounded-sm text-blue-500">
            <MdOutlineFileDownload />
            <span>{downloads}</span>
          </p>
          <p className="flex justify-center items-center font-bold bg-white p-2 rounded-sm text-orange-500">
            <span>{ratingAvg}</span>
            <FiStar />
          </p>
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default AllApp;
