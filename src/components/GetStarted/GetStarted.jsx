import React from 'react';
import dark_arrow from '../../assets/dark-arrow.png';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className='get-started '>
        <div className="edu-container">
            <div className="get-start">
                <h3>Ready to Build Your Future?</h3>
                <p>Join Professor Ch’s classes to learn full-stack web and blockchain development from an industry expert. <br /> Transform your coding skills and start your journey toward success!</p>
                <button className="button">Get Started Today <img src={dark_arrow} alt="White Arrow" /></button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted