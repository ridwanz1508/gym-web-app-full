import React from 'react';
import { useNavigate } from 'react-router-dom';

function Membership() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div id="membership">
      <h1>MEMBERSHIP</h1>
      <div className="membership-container">
        <div className="membership-card">
          <div className="header">
            <p><strong>3</strong> Months</p>
            <span className="discount">10%</span>
          </div>
          <h2>Rp385.000 <small>per month</small></h2>
          <p className="price">Rp1.155.000</p>
          <div className='member-btns'>
            <button className='member-btn' onClick={handleRegister}>Register</button>
          </div>
        </div>
        <div className="membership-card">
          <div className="header">
            <p><strong>6</strong> Months</p>
            <span className="discount">20%</span>
          </div>
          <h2>Rp325.000 <small>per month</small></h2>
          <p className="price">Rp1.950.000</p>
          <p>Bonus 1 free Personal Trainer session</p>
          <div className='member-btns'>
            <button className='member-btn' onClick={handleRegister}>Register</button>
          </div>
        </div>
        <div className="membership-card popular">
          <div className="header">
            <p><strong>12</strong> Months</p>
            <span className="popular-badge">MOST POPULAR</span>
          </div>
          <h2>Rp275.000 <small>per month</small></h2>
          <p className="price">Rp3.300.000</p>
          <p>Bonus 2 free Personal Trainer sessions</p>
          <div className='member-btns'>
            <button className='member-btn' onClick={handleRegister}>Register</button>
          </div>
        </div>
        <div className="membership-card">
          <div className="header">
            <p><strong>18</strong> Months</p>
            <span className="discount">36%</span>
          </div>
          <h2>Rp259.000 <small>per month</small></h2>
          <p className="price">Rp4.662.000</p>
          <p>Bonus 2 free Personal Trainer sessions</p>
          <div className='member-btns'>
            <button className='member-btn' onClick={handleRegister}>Register</button>
          </div>
        </div>
        <div className="membership-card best-value">
          <div className="header">
            <p><strong>24</strong> Months</p>
            <span className="best-value-badge">BEST VALUE</span>
          </div>
          <h2>Rp249.000 <small>per month</small></h2>
          <p className="price">Rp5.976.000</p>
          <p>Bonus 2 free Personal Trainer sessions</p>
          <div className='member-btns'>
            <button className='member-btn' onClick={handleRegister}>Register</button>
          </div>
        </div>
        {/* Corporate Membership */}
        <div className="membership-card corporate">
          <h3>Corporate Membership</h3>
          <p>Healthy facilities for company employees</p>
          <div className='sales-btns'>
            <button className='sales-btn' onClick={handleRegister}>Sales Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
