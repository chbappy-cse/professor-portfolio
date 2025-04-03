import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // For regular routing links (Home, Blog)
import { Link } from 'react-scroll'; // For smooth scroll links
import dark_arrow from '../../assets/dark-arrow.png';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`edu-container ${sticky ? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo} alt="Logo" className="logo" /></Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to="subject" smooth={true} offset={-260} duration={500}>Subjects</Link></li>
        <li><Link to="gallery" smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li><Link to="feedback" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><RouterLink to="#">Blog</RouterLink></li>
        <li><Link to="contact" className="button" smooth={true} offset={-260} duration={500}>Contact <img src={dark_arrow} alt="dark arrow" /></Link></li>
      </ul>
      <img src={menu_icon} alt="Nav icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
