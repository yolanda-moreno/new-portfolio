import React from 'react'

function AboutBox() {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">404</h3>
                    <span className="about__subtitle">Hours without <br />a syntax error</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__subtitle">Cups of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-screen-desktop"></i>
                <div>
                    <h3 className="about__title">9999</h3>
                    <span className="about__subtitle">Lines of code</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-magic-wand"></i>
                <div>
                    <h3 className="about__title">109</h3>
                    <span className="about__subtitle">Bugs turned <br />into features</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox