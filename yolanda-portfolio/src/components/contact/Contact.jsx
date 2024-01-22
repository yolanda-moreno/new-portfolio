import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <div className="contact__container grid">
                <div className="contact__info" style={{ backgroundImage: `url("https://bolby-react.vercel.app/images/map.svg")` }}>
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Don't like forms? Send me an <a href="mailto:yolandamorenoarranz@hotmail.com" className='contact__mailto'>email</a>.👋</p>
                </div>
                <form name="contact" method="POST" className="contact__form">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder='Your name'
                                name="name"
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)} required
                            />
                        </div>
                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder='Email address'
                                name="email"
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} required
                            />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder='Subject'
                            name="subject"
                            id='subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)} required
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            className='contact__form-input'
                            placeholder='Message'
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} required
                        ></textarea>
                    </div>
                    <button type="submit" className='btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
