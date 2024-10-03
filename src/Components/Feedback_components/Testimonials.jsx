import React from 'react'
import "../stylesheets/Testimonials.css"
import Marquee from "react-fast-marquee";
import T_card from '../../micro_components/T_card';
import Line_title from '../../micro_components/Line_title';
import Button from '../../micro_components/Button';
import { useState } from 'react';

function Testimonials() {
  const [velocity,setVelocity] = useState(50);
  // const handleMD =()=>{
  //   setVelocity(200);
  // }
  // const handleMU =()=>{
  //   setVelocity(50);
  // }
  // onMouseDown={handleMD} onMouseUp={handleMU}
  const handleClick =()=>{
      if(velocity==50){
        setVelocity(200);
      }else{
        setVelocity(50);
      }
    }
  return (
    <div className='T_Container' onClick={handleClick}>
        <Line_title theme="dark" text='See what our clients say about us'/>
        <div className="T_mid">
              <div className="T_title">Testimonials</div>
              <Button text='See all testimonials'/>
        </div>
        <div className="T_bottom">
            <div className="upper_scroll">
              <Marquee speed={velocity} pauseOnHover={true} direction="right" gradient={true} gradientColor="rgb(0, 0, 0)" gradientWidth={75}>
                <T_card
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos recusandae id ducimus voluptatum, a dolore neque esse exercitationem rerum libero tempora laborum illum cumque nostrum minima ea molestiae. Saepe adipisci eius quae recusandae facere error illo." 
                name="paultaylor28"
                />
                <T_card
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos recusandae id ducimus voluptatum, a dolore neque esse exercitationem rerum libero tempora laborum illum cumque nostrum minima ea molestiae. Saepe adipisci eius quae recusandae facere error illo." 
                name="paultaylor28"
                />
                <T_card
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos recusandae id ducimus voluptatum, a dolore neque esse exercitationem rerum libero tempora laborum illum cumque nostrum minima ea molestiae. Saepe adipisci eius quae recusandae facere error illo." 
                name="paultaylor28"
                />
              </Marquee>
            </div>
            <div className="lower_scroll">
            <Marquee speed={velocity} pauseOnHover={true} direction="left" gradient={true} gradientColor="rgb(0, 0, 0)" gradientWidth={75}>
                <T_card
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos recusandae id ducimus voluptatum, a dolore neque esse exercitationem rerum libero tempora laborum illum cumque nostrum minima ea molestiae. Saepe adipisci eius quae recusandae facere error illo." 
                name="paultaylor28"
                />
                <T_card
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos recusandae id ducimus voluptatum, a dolore neque esse exercitationem rerum libero tempora laborum illum cumque nostrum minima ea molestiae. Saepe adipisci eius quae recusandae facere error illo." 
                name="paultaylor28"
                />
                <T_card
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos recusandae id ducimus voluptatum, a dolore neque esse exercitationem rerum libero tempora laborum illum cumque nostrum minima ea molestiae. Saepe adipisci eius quae recusandae facere error illo." 
                name="paultaylor28"
                />
              </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
