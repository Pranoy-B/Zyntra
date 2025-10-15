import React, { createContext, useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router';

export const AppContext = createContext([])

const Root = () => {
    const [installed,setInstalled] = useState([])
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Header></Header>
            <AppContext value={[installed,setInstalled]}>
                <Outlet></Outlet>
            </AppContext>
            <Footer></Footer>
        </div>
    );
};

export default Root;