import React from 'react';
import { Link } from 'react-router-dom';

function Offer() {
  return (
    <div id='offer'>
        <div className='pr-heading'>
            <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
            <p className='details'>Lorm ipsum dolor sit amnt consectetur adipisicing</p>
            <div className='pr-btns'>
                <Link to='/membership' className='pr-btn'>JOIN NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Offer;