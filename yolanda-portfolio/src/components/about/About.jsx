import React from 'react';
import "./about.css";
import Me from "../../assets/myself-modified.png";
import AboutBox from './AboutBox';
import MyPDF from '../../assets/cv/YolandaMoreno-CV.pdf';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={Me} alt="" className='about__img' />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am a Full Stack Web Developer and design lover. I always give the best of myself in every job. My goal is to keep learning and improving every day, meeting my own goals. I believe that technology is human's best ally!🚀</p>
                        <a href={MyPDF} className="btn" download="YolandaMoreno-CV.pdf">Download CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Front End</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage frontend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Back End</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage backend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX design</h3>
                                <span className="skills__number">85%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About