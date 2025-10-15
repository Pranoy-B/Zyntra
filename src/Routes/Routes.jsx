import React, { Suspense, lazy } from "react";
import Root from "../pages/Root/Root";
// import Home from '../pages/Home/Home';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import AllApps from '../pages/AllApps/AllApps';
const AllApps = lazy(() => import("../pages/AllApps/AllApps"));
const Home = lazy(() => import("../pages/Home/Home"));
const AppDetails = lazy(() => import("../pages/AppDetails/AppDetails"));
import { createBrowserRouter } from "react-router-dom";
// import AppDetails from '../pages/AppDetails/AppDetails';
import AppDetailError from "../pages/AppDetailError/AppDetailError";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/data2.json").then((res) => res.json()),
        element: (
          <Suspense fallback={
              <div className="flex h-[500px] justify-center items-center py-12">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            }>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/allapps",
        loader: () => fetch("/data1.json").then((res) => res.json()),
        element: (
          <Suspense fallback={
              <div className="flex h-[500px] justify-center items-center py-12">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            }>
            <AllApps />
          </Suspense>
        ),
      },
      {
        path: "/appdetails/:id",
        loader: () => fetch("/data1.json").then((res) => res.json()),
        errorElement: <AppDetailError></AppDetailError>,
        element: (
          <Suspense
            fallback={
              <div className="flex h-[500px] justify-center items-center py-12">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            }
          >
            <AppDetails />
          </Suspense>
        ),
      },
      {
        path: "/installation",
        element: <Installation></Installation>
      }
    ],
  },
]);
