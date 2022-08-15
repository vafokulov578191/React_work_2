import React from 'react'
import './bottom.css'

function Bottomcount() {
  return (
    <div className='Bottom_count'>
      <div className="Bottom_count_text">
        <span className='Bottom_count_span1'>iPhone 13</span>
        <span className='Bottom_count_span2'>Your new superpower.</span>
        <div className="Bottom_count_link">
          <span>Learn more</span>
          <span>Buy</span>
        </div>
      </div>
      <div className="Bottom_count_img">
        <img src="https://www.apple.com/v/home/aq/images/heroes/iphone-13/hero_iphone13_avail__gnqqkzuai6um_largetall.jpg" alt="" />
      </div>
    </div>
  )
}

export default Bottomcount