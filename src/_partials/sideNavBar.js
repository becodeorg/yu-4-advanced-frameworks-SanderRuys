import React from "react";
import "../styles/sideNavBar.css";
import logo from '../assets/icons/logo.svg'
import { useState } from "react";

const SideNavBar = () => {
    const [isExpended, setExpendState] = useState(false);
    return (
        <div className={isExpended ? "sideNavBarContainer" : "sideNavBarContainer sideNavBarContainerNotExpanded"}>
            <div className="navUpper">
                <div className="navHeading">
                    {isExpended && (
                        <div className="navBrand">
                            <img src={logo} alt="logo icon" />
                            <h2>Showkart</h2>
                        </div>
                    )}
                    <button className={isExpended ? "hamburgerMenu hamburgerMenuIn" : "hamburgerMenu hamburgerMenuOut"} onClick={() => setExpendState(!isExpended)}>
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