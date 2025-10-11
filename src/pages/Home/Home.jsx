import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';

const Home = () => {
    return (
        <div className='bg-base-200 max-w-[1280px] mx-auto py-12'>
            <Banner></Banner>
            <States></States>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;