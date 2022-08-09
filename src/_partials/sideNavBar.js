import React from "react";
import "../styles/sideNavBar.css";
import logo from '../assets/icons/logo.svg'
import { useState } from "react";

const SideNavBar = () => {
    const [isExpended, setExpendState] = useState(false);
    const menuItems = [
        {
            text: "Homepage",
            icon: logo,
        },
        {
            text: "Series",
            icon: logo,
        },
        {
            text: "Movies",
            icon: logo,
        },
        {
            text: "Categories",
            icon: logo,
        },
        {
            text: "Favorites",
            icon: logo,
        },
    ];
    return (
        <div className={isExpended ? "sideNavBarContainer" : "sideNavBarContainer sideNavBarContainerNotExpanded"}>
            <div className="navUpper">
                <div className="navHeading">
                    {isExpended && (
                        <div className="navBrand">
                            <img src={logo} alt="logo icon" />
                            <h2>Snotflix</h2>
                        </div>
                    )}
                    <button className={isExpended ? "hamburgerMenu hamburgerMenuIn" : "hamburgerMenu hamburgerMenuOut"} onClick={() => setExpendState(!isExpended)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="navMenu">
                    {menuItems.map(({ text, icon }) => (
                        <a href="#" className={isExpended ? "menuItem" : "menuItem menuItemNotExpended"}>
                            <img src={icon} alt="" />
                            {isExpended && <p>{text}</p>}
                            {!isExpended && <div className="toolTip">{text}</div>}
                        </a>
                    ))}
                </div>
            </div>
            <div className="navFooter">
                {isExpended && (<div className="navDetails">
                    <img src={logo} alt="logo icon" />
                    <div className="navFooterInfo">
                        <p className="navFooterUserName">Nick Drake</p>
                    </div>
                </div>)}
                <img className="logoutIcon" src={logo} alt="logo icon" />
            </div>
        </div>
    );
};

export { SideNavBar };