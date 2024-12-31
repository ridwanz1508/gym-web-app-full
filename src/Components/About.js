import React from 'react';
import aboutImage  from '../images/about1.png';

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutImage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>A gym is a workout facility that provides equipment and an environment to enhance physical fitness. 
              With various amenities like treadmills and weights, gyms cater to individuals seeking a place 
              to execute their fitness programs</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About;