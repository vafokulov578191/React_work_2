import React from 'react'
import './Main.css'

function Main({ item }) {
  let { name, description, Image, Color } = item
  let main_title = "main_title"
  if(Color === 'true') {
    main_title += ` active`
  }

  return (
    <div className='Main' data-back={Color}>
      <div className={main_title}>
        <span className='main_title_text'>{name}</span>
        <span className='main_title_text_2'>{description}</span>
        <div className="main_links">
          <span>Learn more</span>
          <span>Buy</span>
        </div>
      </div>
      <div className="main_img">
        <img src={Image} alt="" />
      </div>
    </div>
  )
}

export default Main