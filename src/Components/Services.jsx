import React from 'react'
import "../Components/stylesheets/services_style.css"
import Line_title from '../micro_components/Line_title'

function Services() {
  return (
    <div className='service_container'>
      <div style={{maxWidth:"750px"}}>
        <Line_title 
        text="Automate tasks, enhance productivity, save time, cut costs.
        Grow your business now." theme="dark"/>
      </div>
      <div className="service_main">

        <div className="service_item">
          <div className="item_top">Consultations</div>
          <div className="item_bottom">Prompt Engineering &nbsp;&#8226; Generative Al App Development &nbsp;&#8226; Consulting Al Program Development and Strategy Consulting</div>
        </div>
        <div className="service_item">
          <div className="item_top">AI Audits</div>
          <div className="item_bottom">Prompt Engineering &nbsp;&#8226; Generative Al App Development &nbsp;&#8226; Consulting Al Program Development and Strategy Consulting</div>
        </div>
        <div className="service_item">
          <div className="item_top">AI Product Development</div>
          <div className="item_bottom">Prompt Engineering &nbsp;&#8226; Generative Al App Development &nbsp;&#8226; Consulting Al Program Development and Strategy Consulting</div>
        </div>
      </div>
    </div>
  )
}

export default Services
