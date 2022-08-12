//rfc + Enter
import React from 'react'
import "../styles/hero.css";
import totoro  from "../assets/images/totoro.jpg";


const Hero = () => {

    return(
        <div className="heroImage">
            <img src={totoro} alt="" />
        </div>
    );
};

export {Hero};
