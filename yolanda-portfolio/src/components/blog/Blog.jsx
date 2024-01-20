import React from 'react';
import "./blog.css";
import Image1 from '../../assets/technologies/Apache.png';
import Image2 from '../../assets/technologies/CSS.png';
import Image3 from '../../assets/technologies/Bootstrap.png';
import Image4 from '../../assets/technologies/Figma.png';
import Image5 from '../../assets/technologies/React.png';

function Blog() {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Technologies</h2>
            <div className="blog__container grid">
                <div className='blog__technology'>
                    <img src={Image1} alt="" className="blog__img" title="Apache" />
                    <h3 className="blog__title">Apache</h3>
                </div>
                <div className='blog__technology'>
                    <img src={Image2} alt="" className="blog__img" title="CSS" />
                    <h3 className="blog__title">CSS</h3>
                </div>
                <div className='blog__technology'>
                    <img src={Image3} alt="" className="blog__img" title="Bootstrap" />
                    <h3 className="blog__title">Bootstrap</h3>
                </div>
                <div className='blog__technology'>
                    <img src={Image4} alt="" className="blog__img" title="Figma" />
                    <h3 className="blog__title">Figma</h3>

                </div>
                <div className='blog__technology'>
                    <img src={Image5} alt="" className="blog__img" title="React" />
                    <h3 className="blog__title">React</h3>
                </div>
            </div>
            {/* <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image1} alt="" className="blog__img" />
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">5 Best App Development Tool</h3>
                        <div className="blog__meta">
                            <span>09 February, 2022</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image2} alt="" className="blog__img" />
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Common Misconceptions About Payment</h3>
                        <div className="blog__meta">
                            <span>07 February, 2022</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <img src={Image3} alt="" className="blog__img" />
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">3 Things to know about startups</h3>
                        <div className="blog__meta">
                            <span>05 February, 2022</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Blog