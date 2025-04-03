import React from 'react';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
import './About.css';

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt="About image" className='about-img' />
            <img src={play_icon} alt="About image" className='play-icon' onClick={() => setPlayState(true)} />
        </div>
        <div className="about-right">
            <h3>ABOUT THE PROFESSOR</h3>
            <h2>A Passion for Teaching and Technology</h2>
            <p>With over 7 years of experience in both teaching and software development, I specialize in full-stack web technologies, focusing on practical, hands-on learning. I hold an <strong>MSc in Computer Science and Engineering (CSE)</strong> and possess deep expertise in:</p>
            
            <ul className='about-list'>
              <li><strong>Frontend Development:</strong> Mastering React.js, Vue.js, HTML5, CSS3, and JavaScript to build responsive and interactive user interfaces.</li>
              <li><strong>Backend Development:</strong> Creating robust and scalable applications with Node.js, Laravel, and Express.js.</li>
              <li><strong>Database Management:</strong> Designing efficient data systems with MySQL and MongoDB.</li>
              <li><strong>Blockchain Development:</strong> Experienced in developing smart contracts, Ethereum, and Solidity for decentralized applications.</li>
              <li><strong>Software Engineering Practices:</strong> Applying clean code principles, version control, and agile methodologies for seamless project execution.</li>
            </ul>
            <p>I am dedicated to mentoring students and professionals to thrive in the ever-evolving tech industry. Over the years, my students have built successful careers as developers and engineers in leading tech companies.</p>
        </div>
    </div>
  )
}

export default About