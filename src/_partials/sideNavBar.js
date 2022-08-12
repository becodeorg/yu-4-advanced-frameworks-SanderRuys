import React from "react";
import "../styles/sideNavBar.css";
import avatar from "../assets/icons/avatar.svg";
import { FaHome, FaSearch, FaTv, FaFilm, FaKiwiBird, FaShapes, FaPlus, FaRegShareSquare } from "react-icons/fa";
import { useState } from "react";


const SideNavBar = () => {
    const [isExpended, setExpendState] = useState(false);
    const menuItems = [
        {
            text: "Homepage",
            icon: <FaHome />,
        },
        {
            text: "Search",
            icon: <FaSearch />,
        },
        {
            text: "Series",
            icon: <FaTv />,
        },
        {
            text: "Movies",
            icon: <FaFilm />,
        },
        {
            text: "Categories",
            icon: <FaShapes />,
        },
        {
            text: "Favorites",
            icon: <FaPlus />,
        },
    ];
    return (
        <div className={isExpended ? "sideNavBarContainer" : "sideNavBarContainer sideNavBarContainerNotExpanded"}>
            <div className="navUpper">
                <div className="navHeading">
                    <div className="brandLogo">
                        <FaKiwiBird />
                    </div>
                    {isExpended && (
                        <div className="navBrand">
                            <h2>Netflixinator</h2>
                        </div>
                    )}
                    <button className={isExpended ? "hamburgerMenu hamburgerMenuIn" : "hamburgerMenu hamburgerMenuOut"} onClick={() => setExpendState(!isExpended)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="navMenu">
                    {menuItems.map(({ text, icon }, index) => (
                        <a key={Math.random() * 1000 * index} href="#" className={isExpended ? "menuItem" : "menuItem menuItemNotExpended"}>
                            <div className="menuIcon">{icon}</div>
                            {isExpended && <p>{text}</p>}
                            {!isExpended && <div className="toolTip">{text}</div>}
                        </a>
                    ))}
                </div>
            </div>
            <div className="navFooter">
                {isExpended && (
                    <div className="navDetails">
                        <img src={avatar} alt="avatar icon" />
                        <div className="navFooterInfo">
                            <p className="navFooterUserName">Nick Drake</p>
                        </div>
                    </div>
                )}
                <div className="logoutIcon">
                    <FaRegShareSquare />
                </div>
            </div>
        </div>
    );
};

export { SideNavBar };
