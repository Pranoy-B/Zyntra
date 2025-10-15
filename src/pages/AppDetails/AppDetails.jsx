import React, { use, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AppContext } from "../Root/Root";
import { addToLocalDb } from "../utilities/localDb";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();
  const singleApp = apps.find((app) => app.id === appId);
  console.log(singleApp);
  const {
    image,
    title,
    companyName,
    description,
    size,
    ratingAvg,
    downloads,
    reviews,
    ratings,
  } = singleApp;
  const barRating = [...ratings].reverse();
  const notify = () => toast("App Installed!");
  const [installed, setInstalled] = use(AppContext);
  const handleinstall = () => {
    const alreadyInstalled = installed.find((app) => app.id === singleApp.id);
    if (alreadyInstalled) {
      alert("App already installed");
      return; 
    }
    setInstalled([...installed,singleApp])
  };

  const handleDb = (id) =>{
    addToLocalDb(id)

  }


  const [clicked, setClicked] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto bg-base-200 py-10">
      <div className="flex flex-col justify-center items-center md:flex-row space-x-10 ">
        <img className="h-[350px] w-[350px]" src={image} alt="" />
        <div className="space-y-15">
          <div>
            <h1 className="font-medium text-2xl">{title}</h1>
            <p>Developed by: {companyName}</p>
          </div>
          <hr />
          <div className="flex justify-center items-center gap-12">
            <div className="space-y-1">
              <FaDownload color="green" />
              <p>Downloads</p>
              <p className="font-bold text-2xl">{downloads}</p>
            </div>
            <div className="space-y-1">
              <FaStar color="orange" />
              <p>Average Ratings</p>
              <p className="font-bold text-2xl">{ratingAvg}</p>
            </div>
            <div className="space-y-1">
              <MdReviews color="purple" />
              <p>Total Reviews</p>
              <p className="font-bold text-2xl">{reviews}</p>
            </div>
          </div>
          <button
            disabled={clicked}
            onClick={() => {
              setClicked(true);
              notify();
              handleinstall();
              handleDb(id)
            }}
            className="p-2 bg-[#00d390] text-white rounded-sm"
          >
            {clicked ? "Installed" : `Install Now (${size} MB)`}
          </button>
          <ToastContainer />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <div className="w-full h-[500px] py-12">
        <h1 className="font-bold text-3xl pl-3 py-2">Ratings</h1>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            width={300}
            height={500}
            data={barRating}
            barCategoryGap="5%"
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 20,
            }}
            barSize={30}
          >
            <YAxis
              type="category"
              dataKey="name"
              scale="count"
              padding={{ left: 10, right: 10, bottom: 10 }}
            />
            <XAxis type="number" />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="count" fill="orange" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <div>
        <h1 className="font-bold text-2xl">Description</h1>
        {description}
      </div>
    </div>
  );
};

export default AppDetails;
