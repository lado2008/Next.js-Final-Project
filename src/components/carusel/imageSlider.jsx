
"use client";

import React from 'react';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './Arrows';
import styles from './ImageSlider.module.css';

const Carousel = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={`Slide ${index}`} className="carousel-image" />
                        <div className="overlay">
                            <div className={styles.texts}>
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                            <button className={styles.button}>See More</button>
                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx>{`
                .slide {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                }
                .carousel-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                }
                .overlay {
                    position: absolute;
                    bottom: 250px;
                    left: 100px;
                }
                .overlay h2 {
                    color: #b0ffbe;
                    margin: 0;
                    font-size: 40px;
                }
                .overlay p {
                    margin: 5px 0 0;
                    font-size: 20px;
                    color: #fff;
                }
                @media (max-width: 765px) {
                    .overlay {
                        bottom: 250px;
                        left: 50px;
                    }
                   .overlay h2 {
                        font-size: 25px;
                    }
                   .overlay p {
                        font-size: 15px;
                    }
                }
                @media (max-width: 590px) {
                    left: 20px;
                }
            `}</style>
        </div>
    );
};

export default Carousel;
