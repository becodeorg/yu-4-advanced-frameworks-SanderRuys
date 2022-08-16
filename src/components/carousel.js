import React from "react";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/carousel.css";
import { Thumbnail } from "./thumbnail";

const Carousel = () => {

 

    const [slideNumber, setSlideNumber] = useState(0);
    const carouselRef = useRef();

    const handleClick = (direction) => {
        let distance = carouselRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            carouselRef.current.style.transform = `translate(${232 + distance}px)`;
            console.log("left " + slideNumber);
            console.log(distance);
        }
        if (direction === "right" && slideNumber < 10) {
            setSlideNumber(slideNumber + 1);
            carouselRef.current.style.transform = `translate(${-232 + distance}px)`;
            console.log("right " + slideNumber);
            console.log(distance);
        }
        //console.log(distance);
    };

    return (
        <div className="carousel">
            <span className="carouselTitle">Continue to watch</span>
            <div className="wrapper">
                <FaChevronLeft className="sliderArrow left" onClick={() => handleClick("left")} />
                <div className="movieContainer" ref={carouselRef}>
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                </div>
                <FaChevronRight className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    );
};

export { Carousel };
