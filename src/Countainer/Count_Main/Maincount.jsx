import React from 'react'
import './Main_count.css'


function Maincount() {
  return (
    <div className='Main_count'>
      <div className="Main_count_left">
        <span className='Mac'>MacBook Air</span>
        <span className='battery'>Supercharged by M2</span>
        <div className="main_count_link">
          <span>Learn more</span>
          <span>Buy</span>
        </div>
      </div>
      <div className="Main_count_right">
          <img src="https://www.apple.com/v/home/aq/images/heroes/macbook-air/hero_macbookair__el7scava26mq_large.png" alt="" />
      </div>
    </div>
  )
}

export default Maincount