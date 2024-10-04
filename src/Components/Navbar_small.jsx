import React from "react";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
// import Button from "../micro_components/Button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "../Components/stylesheets/Navbar_small.css";
import Dynamic_link from "../micro_components/Dynamic_link";

function Navbar_small() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="NS_container">
      <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div className="side_container">
          <h2 className="NS_logo_side"><img
          className="nav_logo_img"
          src="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66ddbdec3555ab75c6796de4_logo%20jasne.svg"
          alt="logo"
          loading="lazy"
          /></h2>
          <p id="Para">
            <Dynamic_link url="#" name="HOME" cls="nav_link_text nav_active nav_fontsize" />
            <Dynamic_link url="#" name="SERVICES" cls="nav_link_text nav_fontsize" />
            <Dynamic_link url="#" name="ABOUT US" cls="nav_link_text nav_fontsize" />
            <Dynamic_link url="#" name="INBOUND AGENT" cls="nav_link_text nav_fontsize" />
            <Dynamic_link url="#" name="CAREERS" cls="nav_link_text nav_fontsize" />
            <Dynamic_link url="#" name="MEDIA CENTRE" cls="nav_link_text nav_fontsize" />
          </p>
        </div>
        </Sidebar>
        {/* <Button onClick={() => setVisible(true) } text="" width={70}/> */}
        <Button
          id="NS_btn"
          label="&nbsp;&#8801;&nbsp;"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="NS_logo">
        <img
          className="nav_logo_img"
          src="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66ddbdec3555ab75c6796de4_logo%20jasne.svg"
          alt="logo"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Navbar_small;
