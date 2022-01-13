import React from 'react';
import picture from "../images/me.jpg";

export default function Header() {
    return (
        <div className='top-half'>
            <img className="header-image" src={picture} alt="My picture"/>
            <h1 className='header-name'>Henry Delgado</h1>
            <h3 className='header-title'>Frontend Developer</h3>
            <h5 className='header-website'><a href="https://glitchportfolio.com/" target="_blank">https://glitchportfolio.com/</a></h5>
            <div className='header-buttons'>
                <a className='email-button' href='mailto:CodingWHenry@gmail.com'><i class="fa-solid fa-envelope"></i> Email</a>
                <a className='linkedin-button' href="https://www.linkedin.com/in/glitchdelgado/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    );
}