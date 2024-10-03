import React from 'react'
import "../Components/stylesheets/stats_cube_style.css"

function S_cube({num,text,cls}) {
    return (
        <div className={`cube_container ${cls}`}>
            <div className="cube_top">{num}</div>
            <div className="cube_bottom">{text}</div>
        </div>
      )
}

export default S_cube
