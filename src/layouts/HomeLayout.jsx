import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading/Loading';

const HomeLayout = () => {
    const navigation = useNavigation()
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
               {
                    navigation?.state === "loading" ? <Loading></Loading>
                    :  <Outlet></Outlet>
               }
            </main>
            <Footer></Footer>
             <Toaster />
        </div>
    );
};

export default HomeLayout;