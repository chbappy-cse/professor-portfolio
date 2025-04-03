import React from 'react';
import { Link } from 'react-scroll';
import dark_arrow from '../../assets/dark-arrow.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero edu-container' id='hero'>
        <div className="hero-text">
            <h1>Empowering Minds Through Code and Creativity</h1>
            <p>“Learn from the Best React.js and Blockchain Developer. With expertise in modern technologies and hands-on experience, I’ll guide you to excel in full-stack web and blockchain development.”</p>
            <Link className="button" to='about' smooth={true} offset={-150} duration={500}>Explore More <img src={dark_arrow} alt="arrow" /></Link>
        </div>
    </div>
  )
}

export default Hero