import React from 'react'
import { SideNavBar, Hero } from '../_partials';
import "../styles/home.css";

const Home = () =>{
    return (
        <div className="pageAndNavbar">
            <SideNavBar />
            <div className="page">
                <Hero />
                <h1>home</h1>
            </div>
        </div>
    );
};
export { Home };