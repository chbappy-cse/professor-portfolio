import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import dark_arrow from '../../assets/dark-arrow.png';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {

  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })

  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`edu-container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="Logo" className='logo' />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='subject' smooth={true} offset={-260} duration={500}>Subjects</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='feedback' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='blog' smooth={true} offset={-260} duration={500}>Blog</Link></li>
            <li><Link to='contact' className='button' smooth={true} offset={-260} duration={500}>Contact <img src={dark_arrow} alt="dark arrow" /> </Link></li>
        </ul>
        <img src={menu_icon} alt="Nav icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar