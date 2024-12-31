import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h2>STEP UP YOUR</h2>
            <h1><span>FITNESS</span> WITH US</h1>
            <p className='details'>Build Your Body and Fitness With Profesional Touch</p>
            <div className='header-btns'>
               <Link to="/membership" className="header-btn">JOIN US</Link>
            </div>
        </div>
    </div>
  )
}

export default Header;

