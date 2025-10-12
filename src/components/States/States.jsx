import React from 'react';
import { MdDownload } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa6";



const States = () => {
    return (
        <div className='bg-[#0F52BA] p-15 space-y-5'>
            <h2 className='text-white font-bold text-3xl text-center'>Trusted By Millions, Build for you</h2>
            <div className='flex flex-col md:flex md:flex-row md:justify-around justify-center items-center gap-5'>
                <div className='text-white flex flex-col justify-center items-center space-y-2'>
                    <p>Total Downloads</p>
                    <p className='flex justify-center items-center font-bold text-6xl space-x-3'><span>29.6M</span> <MdDownload /></p>
                    <p>21% More Than Last Month</p>
                </div>
                
                <div className='text-white flex flex-col justify-center items-center space-y-2'>
                    <p>Total Reviews</p>
                    <p className='flex justify-center items-center font-bold text-5xl space-x-3'><span>906k</span><FaRegStar /></p>
                    <p>46% More Than Last Month</p>
                </div>
                
                <div className='text-white flex flex-col justify-center items-center space-y-2'>
                    <p>Active Apps</p>
                    <p className='flex justify-center items-center font-bold text-4xl space-x-3'><span>132+</span><FaAppStore /></p>
                    <p>31 More Will Launch</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default States;