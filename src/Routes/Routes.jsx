import React, { Suspense } from 'react';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AllApps from '../pages/AllApps/AllApps';
import {
    createBrowserRouter,
  } from "react-router-dom";




  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: (
                <Suspense fallback={<div>Loading home...</div>}>
                    <Home />
                </Suspense>
                ),
                
                loader: () => fetch('/data2.json').then(res=>res.json())
            },
            {
                path: '/allapps',
                element: (
                <Suspense fallback={<div>Loading All Apps...</div>}>
                    <AllApps />
                </Suspense>
                ),
                
                loader: () => fetch('/data1.json').then(res=>res.json())
            }
        ]
    }

  ])
