import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../images/logo1.png';

function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // Mengetahui path saat ini

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  const isHomePage = location.pathname === '/'; // Mengecek apakah di halaman utama

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <RouterLink to="/" className="logo">
        <img src={logo} alt="" />
      </RouterLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        {isHomePage ? (
          // Saat di halaman utama, gunakan react-scroll
          <>
            <li>
              <ScrollLink to="main" smooth={true} duration={1000}>
                Header
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="features" smooth={true} duration={1000}>
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="offer" smooth={true} duration={1000}>
                Offer
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={1000}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="faq" smooth={true} duration={1000}>
                Faq
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="footer" smooth={true} duration={1000}>
                Contact
              </ScrollLink>
            </li>
          </>
        ) : (
          // Saat di halaman lain, gunakan react-router-dom untuk navigasi
          <>
            <li>
              <RouterLink to="/">Header</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Features</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Offer</RouterLink>
            </li>
            <li>
              <RouterLink to="/">About</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Faq</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Contact</RouterLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
