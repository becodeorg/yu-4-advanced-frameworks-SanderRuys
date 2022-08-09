import React from "react";
import "../styles/sideNavBar.css";
import logo from '../assets/icons/logo.svg'

const SideNavBar = () => {
    return (
        <div className="sideNavBarContainer">
            <div className="navUpper">
                <div className="navHeading">
                    <div className="navBrand">
                        <img src={logo} alt="logo icon" />
                        <h2>Showkart</h2>
                    </div>
                    <button className="hamburgerMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export { SideNavBar };