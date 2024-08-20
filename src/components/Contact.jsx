// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_hsy7hzq', 'template_7y1ljwf', e.target, 'Ch1Hrymup6-E-WaMv')
            .then((result) => {
                console.log('Email sent:', result.text);
                alert("Thank you for reaching out! I'll get back to you soon.");
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error('Email sending error:', error.text);
                alert("Sorry, there was an error sending your message. Please try again later.");
            });
    };

    return (
        <section id="contact" className="contact-page">
            <div className="contact-info">
                <div className='border-Contact'></div>
                <h1>Contact Me</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
