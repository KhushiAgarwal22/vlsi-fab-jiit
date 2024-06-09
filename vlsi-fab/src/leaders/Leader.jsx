import React from 'react';
import img1 from '../assets/Jai_Prakash_Gaur.jpg';
import img2 from '../assets/Manoj_Gaur.jpeg';
import img3 from '../assets/SC_Saxena.jpg';
import img4 from '../assets/BR_Mehta.jpg';
import './Leader.css';

function Leader() {
  return (
    <div className='leader-container'>
      <h1 className='leader-heading'> Our Leaders</h1>
      <div className='leader-content'>
        <div className='leader'>
          <img src={img1} alt="Hon'ble Shree Jaiprakash Gaur Ji" />
          <p>Hon'ble Shree Jaiprakash Gaur Ji</p>
          <span>Founder Chairman, Jaypee Group</span>
        </div>

        <div className='leader'>
          <img src={img2} alt="Hon'ble Shree Manoj Gaur Ji" />
          <p>Hon'ble Shree Manoj Gaur Ji</p>
          <span>Chancellor JIIT</span>
        </div>

        <div className='leader'>
          <img src={img3} alt="Prof SC Saxena" />
          <p>Prof SC Saxena</p>
          <span>Pro Chancellor JIIT</span>
        </div>

        <div className='leader'>
          <img src={img4} alt="Prof BR Mehta" />
          <p>Prof BR Mehta</p>
          <span>Vice Chancellor JIIT</span>
        </div>
      </div>
    </div>
  );
}

export default Leader;
