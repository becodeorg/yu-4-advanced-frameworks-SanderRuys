import React from "react";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/carousel.css";
import { Thumbnail } from "./thumbnail";

const Carousel = () => {

    const carouselRef = useRef();

    const handleClick=(direction)=>{
        let distance =carouselRef.current.getBoundingClientRect().x - 50;
        if (direction==='left') {
            carouselRef.current.style.transform = `translate(${230 + distance}px)`;
        }
        console.log(distance);
    }

    return (
        <div className="carousel">
            <span className="carouselTitle">Continue to watch</span>
            <div className="wrapper">
                <FaChevronLeft className="sliderArrow left" onClick={() => handleClick('left')} />
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
                </div>
                <FaChevronRight className="sliderArrow right" onClick={() => handleClick('right')} />
            </div>
        </div>
    );
}

export { Carousel };
