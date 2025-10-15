import React, { use, useState } from "react";
import { AppContext } from "../Root/Root";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installed, setInstalled] = use(AppContext);
  const notify = () => toast("App Uninstalled!");
  const [sort, setSort] = useState("");

  const handleUnInstall = (app) => {
    const filteredApps = installed.filter(
      (singleApp) => singleApp.id !== app.id
    );
    setInstalled(filteredApps);
  };
  const handleSort = (type) => {
    setSort(type);
    if (type === "downloads") {
      const sortedByDownloads = [...installed].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalled(sortedByDownloads);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto text-center p-8 min-h-[500px] space-y-5">
      <h1 className="font-bold text-2xl flex-start">
        Your installed Apps are here
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <h3>{installed.length} apps found</h3>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("downloads")}>By Downloads</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {installed.length === 0 ? (
          <p className="text-4xl min-h-[300px] flex justify-center items-center">
            No apps installed yet.
          </p>
        ) : (
          <div>
            {installed.map((app) => (
              <div key={app.id}>
                <div className="max-w-[1280px] flex justify-between items-center p-2 border-1 border-purple-500 rounded-2xl">
                  <div className="flex justify-center items-center gap-5">
                    <img
                      src={app.image}
                      alt=""
                      className="h-[100px] w-[100px]"
                    />

                    <div>
                      <h3 className="font-semibold text-xl text-left">
                        {app.title}
                      </h3>
                      <div className="flex  space-x-4">
                        <div className="flex justify-center items-center gap-2">
                          <FaDownload color="green" />
                          <p className="font-bold text-xl">{app.downloads}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                          <FaStar color="orange" />
                          <p className="font-bold text-xl">{app.ratingAvg}</p>
                        </div>
                        <div className="justify-center items-center flex">
                          <p className="font-bold text-xl">{app.size} mb</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleUnInstall(app);
                      notify();
                    }}
                    className="h-[40px] p-2 border-2 border-gray-200 bg-white rounded-md font-bold text-[#074fad]"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installation;
