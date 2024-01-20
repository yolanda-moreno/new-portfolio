import React from 'react';
import './contact.css';

function Contact() {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <div className="contact__container grid">
                <div className="contact__info" style={{ backgroundImage: `url("https://bolby-react.vercel.app/images/map.svg")` }}>
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Don't like forms? Send me an <a href="mailto:yolandamorenoarranz@hotmail.com" className='contact__mailto'>email</a>.👋</p>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Your name' />
                        </div>
                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder='Email address' />
                        </div>

                    </div>
                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder='Subject' />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Message'></textarea>
                    </div>
                    <button className='btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact