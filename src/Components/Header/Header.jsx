import React from 'react'
import './Header.css'
import logo from './search-13-16.png'

function Header() {
  return (
    <div className="header">
      <div className="header_count">
        <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt="" />
        <span>Store</span>
        <span>Mac</span>
        <span>iPad</span>
        <span>iPhone</span>
        <span>Watch</span>
        <span>Airpods</span>
        <span>TV & Home</span>
        <span>Only on Apple</span>
        <span>Accessories</span>
        <span>Support</span>
        <img src={logo} alt="" />
        <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg" alt="" />
      </div>
    </div>
  )
}

export default Header