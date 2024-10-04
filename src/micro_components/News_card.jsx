import React from 'react'
import "../Components/stylesheets/news_card_style.css"
import Dynamic_link from './Dynamic_link'

function News_card({title,date,Linkurl,imgurl}) {
  return (
    <div className='nc_container'>
      <img src={imgurl} alt="thumbnail" loading='lazy' />
      <div className="nc_title">{title}</div>
      <div className="nc_btn">
        <Dynamic_link name="Watch now &nbsp;&#10230;" url={Linkurl} />
        <div className="nc_date">{date}</div>
      </div>
    </div>
  )
}
export default News_card
