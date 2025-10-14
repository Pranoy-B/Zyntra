import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllApp from "../AllApp/AllApp";
import ErrorPage from "../ErrorPage/ErrorPage";

const AllApps = () => {
  const allAppsData = useLoaderData();
  const [search,setSearch] = useState('');

  return (
    <div className="bg-base-200">
      <div className="flex flex-col justify-center items-center py-12 space-y-5">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between items-center py-5">
        <p className="font-medium text-xl">({allAppsData.length}) Apps Found</p>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search App" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allAppsData.filter((allApp)=> {
            if (search.toLowerCase()===''){
                return allApp
            }
                
            else if (allApp.title.toLowerCase().includes(search)){
                return allApp
            }
            
        }).map((allApp) => (
          <AllApp key={allApp.id} allApp={allApp}></AllApp>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
