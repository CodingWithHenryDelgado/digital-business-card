import React from 'react';
import twitter from "../images/Twitter-Icon.svg";
import github from "../images/GitHub-Icon.svg";

export default function Footer() {
    return(
        <div className='footer'>
            <a href="https://twitter.com/Glitch_Delgado" target="_blank"><i class="fa-brands fa-twitter-square fa-2x"></i></a>
            <a href="https://github.com/HenryDelGlitch" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>
        </div>
    );
}