import React from 'react';
import errorImage from '../../assets/error-404.png'
import Home from '../Home/Home';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-[1280px] mx-auto flex flex-col space-y-5 justify-center items-center'>
            <img src={errorImage} alt="" />
            <h1 className='font-bold text-5xl'>Page Not Found</h1>
            <Link to='/'>
                <button className='btn btn-primary'>Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;