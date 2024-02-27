import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

function Portfolio() {
    const [items, setItems] = useState(Menu);
    const [activeCategory, setActiveCategory] = useState(null);

    const filterItem = (selectedCategories) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category.some((category) => selectedCategories.includes(category));
        });

        setItems(updatedItems);
        setActiveCategory(selectedCategories.length === 0 ? null : selectedCategories[0]);
    }

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Projects</h2>

            <div className="work__filters">
                <span
                    className={`work__item ${activeCategory === null ? 'active' : ''}`}
                    onClick={() => {
                        setItems(Menu);
                        setActiveCategory(null);
                    }}
                >
                    All
                </span>
                <span
                    className={`work__item ${activeCategory === "Javascript" ? 'active' : ''}`}
                    onClick={() => filterItem(["Javascript"])}
                >
                    Javascript
                </span>
                <span
                    className={`work__item ${activeCategory === "React" ? 'active' : ''}`}
                    onClick={() => filterItem(["React"])}
                >
                    React
                </span>
                <span
                    className={`work__item ${activeCategory === "Vue" ? 'active' : ''}`}
                    onClick={() => filterItem(["Vue"])}
                >
                    Vue
                </span>
                <span
                    className={`work__item ${activeCategory === "Node" ? 'active' : ''}`}
                    onClick={() => filterItem(["Node"])}
                >
                    Node
                </span>
                <span
                    className={`work__item ${activeCategory === "C#" ? 'active' : ''}`}
                    onClick={() => filterItem(["C#"])}
                >
                    C#
                </span>
                <span
                    className={`work__item ${activeCategory === ".NET" ? 'active' : ''}`}
                    onClick={() => filterItem([".NET"])}
                >
                    .NET
                </span>
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

                            <span className="work__category">
                                {category && category.length > 0 ? category.join(', ') : ''}
                            </span>
                            <h3 className="work__title">{title}</h3>
                            <h4 className="work__desc">{desc}</h4>
                            <a href={link} className="work__button" target="_blank" rel="noopener noreferrer">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Portfolio;
