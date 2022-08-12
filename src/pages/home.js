import React from 'react'
import { SideNavBar, Hero } from '../_partials';
import "../styles/home.css";
import { Carousel } from '../components/carousel';

const Home = () =>{
    return (
        <div className="pageAndNavbar">
            <SideNavBar />
            <div className="page">
                <Hero />
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
            </div>
        </div>
    );
};
export { Home };