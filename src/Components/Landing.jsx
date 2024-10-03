import React from "react";
import "../Components/stylesheets/landing_style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../micro_components/Button";
import Landing_element from "../micro_components/Landing_element";

function Landing() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };

  return (
    <>
      <div className="landing_container">
        <div
          style={{
            position: "relative",
          }}
        >
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable={false}
            focusOnSelect={false}
            infinite
            itemClass=""
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
          >
          <Landing_element
          title="Leveraging Advanced Al Technologies to Unleash Business Potential"
          text="We are an Al automation agency focused on simplifying the integration of Al into your business operations."
          url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66d82c5cdae65024b10e2252_home-3-content.avif"        
          />
          <Landing_element
          title="Leveraging Advanced Al Technologies to Unleash Business Potential"
          text="We are an Al automation agency focused on simplifying the integration of Al into your business operations."
        />
        <Landing_element
          title="Intelligent Data,Smarter Operations"
          text="We are an Al automation agency focused on simplifying the integration of Al into your business operations."
          url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66ce4524b04bef486aed6829_mobile-image-01.avif"        
        />
        <Landing_element
          title="Leveraging Advanced Al Technologies to Unleash Business Potential"
          text="We are an Al automation agency focused on simplifying the integration of Al into your business operations."
          url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66d82c5dbb3a68aee49ba865_home-1-content.avif"        
        />
        <Landing_element
          title="Intelligent Data,Smarter Operations"
          text="We are an Al automation agency focused on simplifying the integration of Al into your business operations."
          url="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66d82c5ea684ca4ffc219bd2_home-1-bg-1.avif"        
        />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Landing;
