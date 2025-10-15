import React from 'react';
import { Link } from 'react-router';
import Home from '../Home/Home';

const AppDetailError = () => {
    return (
        <div className='max-w-[1280px] h-[500px] mx-auto flex flex-col space-y-5 justify-center items-center'>
            
            <h1 className='font-bold text-5xl'>App Not Available</h1>
            <Link to="/">
                <button  className='btn btn-primary'>Go Home</button>
            </Link>
        </div>
    );
};

export default AppDetailError;