import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import { useLoaderData } from 'react-router-dom';
import HomeApps from '../HomeApps/HomeApps';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const homeAppsData = useLoaderData()
    return (
        <div className='bg-base-200 max-w-[1280px] mx-auto py-12'>
            <Banner></Banner>
            <States></States>
            <div className='flex flex-col justify-center items-center my-12 space-y-5'>
                <h1 className='font-bold text-3xl'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    homeAppsData.map(homeApp=><HomeApps key={homeApp.id} homeApp={homeApp}></HomeApps>)
                }
            </div>
            <div className='flex justify-center items-center p-5'>
                <NavLink to="/allapps"><button className='flex justify-center items-center space-x-2 border-2 border-gray-200 p-2 bg-white rounded-md font-bold text-[#074fad]'>Show ALl</button></NavLink>
            </div>
            
        </div>
    );
};

export default Home;