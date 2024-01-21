import React from 'react';
import "./services.css";
import Image1 from "../../assets/dog.png";
import Image2 from "../../assets/game.png";
import Image3 from "../../assets/art.png";

const data = [
    {
        id: 1,
        image: Image1,
        title: "Animals",
        description:
            "Animal lover extraordinaire. From the smallest bugs to the fluffiest of companions, I'm on a mission to pet them all!",
    },
    {
        id: 2,
        image: Image2,
        title: "Videogames",
        description:
            "Gamer at heart, code wizard by day. My life has cheat codes, respawn points, and a quest log to conquer. Let the games begin!",
    },
    {
        id: 3,
        image: Image3,
        title: "Art & Fashion",
        description:
            "Art geek meets fashion detective. Whether it's a canvas masterpiece or the latest runway trends, count me in for the style spectacle.",
    },
];

function Services() {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Interests</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Services