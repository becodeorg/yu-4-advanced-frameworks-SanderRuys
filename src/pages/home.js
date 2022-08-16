import React from 'react'
import { SideNavBar, Hero } from '../_partials';
import "../styles/home.css";
import { Carousel } from '../components/carousel';

const Home = () => {
    //API////////////////////////////////////////
    /*const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "1faf2ccde7msh2db1032f27e10f8p1d4524jsndff7d40c9488",
            "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
    };

    fetch("https://online-movie-database.p.rapidapi.com/auto-complete?q=harry", options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            const list = response.d;
            list.map((item) => {
                const title = item.l;
                const poster = item.i.imageUrl;

            })

        })
        .catch((err) => console.error(err));*/
    //////////////////////////////////////////////////////////////

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
};;
export { Home };