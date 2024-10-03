import React from 'react'
import "../Components/stylesheets/landing_element.css"
import Line_title from './Line_title'
import Button from './Button'

function Landing_element({title,text,url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66d82c5ef6a310f44318273a_home-1-bg-2.avif"}) {
  return (
    <div className="LE_container">
        
        <div className="LE_right" style={{backgroundImage: `url(${url})`}}>
            <div className="LE_left">
                <Line_title theme="dark"/>
                <div className="LE_title">{title}</div>
                <div className="LE_text">{text}</div>
                <Button text='Tell us about your project' width={225} BG="white" tColor="black"/>
            </div>
        </div>
        
       
    </div>
  )
}

export default Landing_element
