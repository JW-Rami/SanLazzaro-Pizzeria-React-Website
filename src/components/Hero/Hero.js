import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Burger from "../../assets/images/Pizza.png";

function Hero() {
    const hero = useRef(null);
    const image = useRef(null);

    const randNum = () => {
        return Math.floor(Math.random() * 10);
    };

    useEffect(() => {
        hero.current.addEventListener("mousemove", () => {
            image.current.style.transform = `translate(${randNum()}px, ${randNum()}px)`;
        });
    }, []);

    return (
        <div className="hero" ref={hero}>
            <div className="container hero-container">
                <div className="hero__textbox">
                    <h1 className="hero__title">
                        SAN LAZZARO VENEZIANO
                    </h1>
                    <p className="hero__text">
                       Laissez vous tentez par les pizzas de San Lazzaro
                    </p>
                </div>
                <div className="hero__burger">
                    <img
                        src={Burger}
                        alt="Pizza"
                        className="hero__img"
                        ref={image}
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;
