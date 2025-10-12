import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllApp from '../AllApp/AllApp';

const AllApps = () => {
    const allAppsData = useLoaderData()
    
    return (
        <div>
            <div className='flex flex-col justify-center items-center my-12 space-y-5'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allAppsData.map(allApp=><AllApp key={allApp.id} allApp={allApp}></AllApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;