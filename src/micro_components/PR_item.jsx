import React from 'react'
import "../Components/stylesheets/PR_item_style.css"
function PR_item({url,text,width=116}) {

  return (
    <div className='padDiv'>
    <div className="PR_item_main" style={{width:width}}>
      <img src={url} loading="lazy" alt="" sizes="(max-width: 991px) 80px, (max-width: 1919px) 128px, 160px" className="home-talked-grid_item-image"></img>
      <h4>{text}</h4>
    </div>
    </div>
  )
}

export default PR_item