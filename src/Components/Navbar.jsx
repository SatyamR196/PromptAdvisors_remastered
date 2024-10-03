import React from 'react';
import "../Components/stylesheets/navbar_style.css"
import Button from '../micro_components/Button';
import Dynamic_link from '../micro_components/Dynamic_link';

const Navbar = () => {
  // const nav_bar_style={
  //   height:"80px",
  //   width: "100%",
  //   backgroundColor: "lawngreen"
  // }
  return (
    <div className='navbar_container' >
        <div className="navbar_main">
          <div className="nav_logo">
          <img
            className="nav_logo_img"
            src="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66ddbdec3555ab75c6796de4_logo%20jasne.svg"
            alt="logo"
            loading="lazy"
          />
          </div>
          <div className="nav_links">
              <Dynamic_link url="#" name="HOME" cls="nav_link_text nav_active"/>
              <Dynamic_link url="#" name="SERVICES" cls="nav_link_text"/>
              <Dynamic_link url="#" name="ABOUT US" cls="nav_link_text"/>
              <Dynamic_link url="#" name="INBOUND AGENT" cls="nav_link_text"/>
              <Dynamic_link url="#" name="CAREERS" cls="nav_link_text"/>
              <Dynamic_link url="#" name="MEDIA CENTRE" cls="nav_link_text"/>
          </div>
          <Button text="Let's talk" width={125} BG="white" tColor="black"/>
        </div>
    </div>
  )
}

export default Navbar;

