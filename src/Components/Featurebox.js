import React from 'react';

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt='' />
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Exercises include squats, deadlifts, bench presses for effective workouts.</p>
        </div>
    </div>
  )
}

export default Featurebox;