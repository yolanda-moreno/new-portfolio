import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

function Portfolio() {
    const [items, setItems] = useState(Menu);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Projects</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>All</span>
                <span className="work__item" onClick={() => filterItem("Javascript")}>Javascript</span>
                <span className="work__item" onClick={() => filterItem("React")}>React</span>
                <span className="work__item" onClick={() => filterItem("Vue")}>Vue</span>
                <span className="work__item" onClick={() => filterItem("Node")}>Node</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const { id, image, title, desc, category, link } = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <h4 className="work__desc">{desc}</h4>
                            <a href={link} className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio