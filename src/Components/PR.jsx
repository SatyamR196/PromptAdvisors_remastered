import React from 'react'
import "../Components/stylesheets/PR_style.css"
import Marquee from "react-fast-marquee";
import PR_item from '../micro_components/PR_item';
function PR() {
  return (
    <div className='PR_main'>
        <div className="line_div"></div>
        <div className="PR_title">They talked about us</div>
        <div className="banner_wrap">
          <Marquee pauseOnHover={true} direction="right" gradient={true} gradientColor="rgb(230, 245, 253)" gradientWidth={75}>
            <PR_item  width={116} text="Market Realist" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65e0db8cdf403e79c07a2d75_image%2096-p-500.avif"/>
            <PR_item  width={116} text="Podfollow" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65e0db8cc3927ec95be5ae61_Group%201000001217-p-500.avif"/>
            <PR_item  width={116} text="Fiverr" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65d250d8ed89c9029a8082f2_image%2093.avif"/>
            <PR_item  width={116} text="CNBC" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65d250d87a370dc233cff0d3_image%2092.avif"/>          
            <PR_item  width={116} text="bnn Breaking" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65e0db8c015a0a2f765e4e26_Group%201000001217-1.avif"/>          
            <PR_item  width={116} text="Worklife" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65e0db8ca8bca26fda911897_Group%201000001218.avif"/>          
            <PR_item  width={116} text="Liam Ottley" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65d250d838e5a2950903733f_image%2091.avif"/>          
            <PR_item  width={116} text="The San Diego" url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/65e0db8c36a6d7ee044e31ff_Group%201000001216.avif"/>          
          </Marquee>
          
        </div>
    </div>
  )
}

export default PR
