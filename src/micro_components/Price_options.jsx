import React from 'react'
import "../Components/stylesheets/price_option.css"

function Price_options({title,text,price,recommended=false,order}) {
    return (
        <div className='option_container grid_layout' style={{order:order}}>
          {recommended==true ? <div className="rec_flag">Recommended</div> : <></>}
          <div className="option_top">
            <div className="otd1"><h4>{title}</h4></div>
            <div className="otd2">{text}</div>
          </div>
          <div className="option_bottom">
            <div className="obd1">Starting at</div>
            <div className="obd2">{`$${price}`}<sub>/month</sub></div>
          </div>
        </div>
      )
}

export default Price_options
