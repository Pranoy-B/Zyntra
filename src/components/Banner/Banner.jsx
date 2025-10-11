import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import BannerImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center space-y-5 '>
            <h1 className='font-bold text-4xl leading-12'>We build <br /><span className='text-purple-500'>Productive</span> Apps</h1>
            <p className='text-gray-500'>At <span className='text-purple-800 font-semibold'>Zyntra</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex flex-row gap-8'>
                <button className='flex justify-center items-center space-x-2 border-2 border-gray-200 p-1 rounded-md font-bold text-[#074fad]'><IoLogoGooglePlaystore /><span>Google Play</span></button>
                <button className='flex justify-center items-center space-x-2 border-2 border-gray-200 p-1 rounded-md font-bold text-[#074fad]'><FaAppStoreIos /><span>App Store</span></button>
            </div>
            <img className='w-9/10 md:w-7/10' src={BannerImg} alt="" />  
        
        </div>
    );
};

export default Banner;