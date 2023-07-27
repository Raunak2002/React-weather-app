import React from "react";
import {FaGithub,FaLinkedin} from 'react-icons/fa';

import './contact.css';

function Contact() {

    return <div className="overlay">
        <div className="contact_section">
        <div className="contact">
            <p>Send a Message</p>
            <div className="buttons">
            <button onClick={()=>{window.location.replace('https://github.com/Raunak2002')}}><FaGithub/><p>Github</p></button>
            <button onClick={()=>{window.location.replace('https://www.linkedin.com/in/raunak-sharma-6852ba213/')}}><FaLinkedin/><p>LinkedIn</p></button>
            </div>
        </div>
        <div className="project_description">Welcome to the Weather App! This is a dynamic weather application that allows users to fetch weather data for cities and countries, mark favorite cities (Requires Sign In), and toggle between dark and light themes. The app also provides temperature conversion functionality between Celsius and Fahrenheit. The data is fetched using Redux for efficient state management.</div>
        </div>
    </div>
}
export default Contact;