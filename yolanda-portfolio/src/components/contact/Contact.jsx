import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            console.log('Form submitted:', formData);
        } else {
            alert('Please fill in all fields before submitting.');
        }
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <div className="contact__container grid">
                <div className="contact__info" style={{ backgroundImage: `url("https://bolby-react.vercel.app/images/map.svg")` }}>
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Don't like forms? Send me an <a href="mailto:yolandamorenoarranz@hotmail.com" className='contact__mailto'>email</a>.👋</p>
                </div>
                <form method="POST" className="contact__form" data-netlify="true">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder='Your name'
                                name="name"
                                id='name'
                                value={formData.name}
                                onChange={handleInputChange} required
                            />
                        </div>
                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder='Email address'
                                name="email"
                                id='email'
                                value={formData.email}
                                onChange={handleInputChange} required
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
                            value={formData.subject}
                            onChange={handleInputChange} required
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
                            value={formData.message}
                            onChange={handleInputChange} required
                        ></textarea>
                    </div>
                    <button type="submit" className='btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
