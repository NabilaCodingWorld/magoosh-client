import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Home/Home/Share/Navbar';
import Footer from '../Page/Home/Home/Share/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;