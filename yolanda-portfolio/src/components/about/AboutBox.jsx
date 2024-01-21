import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function CountUpNumber({ end, duration }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <VisibilitySensor
            onChange={(visibility) => {
                if (visibility) {
                    setIsVisible(true);
                }
            }}
            delayedCall
        >
            <CountUp end={isVisible ? end : 0} duration={duration} />
        </VisibilitySensor>
    );
}

function AboutBox() {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">
                        <CountUpNumber end={404} duration={4} />
                    </h3>
                    <span className="about__subtitle">Hours without <br />a syntax error</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">
                        <CountUpNumber end={5670} duration={4} />
                    </h3>
                    <span className="about__subtitle">Cups of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-screen-desktop"></i>
                <div>
                    <h3 className="about__title">
                        <CountUpNumber end={9999} duration={4} />
                    </h3>
                    <span className="about__subtitle">Lines of code</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-magic-wand"></i>
                <div>
                    <h3 className="about__title">
                        <CountUpNumber end={109} duration={4} />
                    </h3>
                    <span className="about__subtitle">Bugs turned <br />into features</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;
