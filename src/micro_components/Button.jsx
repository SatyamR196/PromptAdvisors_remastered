import React from 'react'
import "../Components/stylesheets/button_style.css"
import { useState } from 'react';
function Button({text="Click Me",width=150,BG="white",tColor="black",onClick=null}) {

 let [Color,setColor] = useState(tColor);
  const handlehover = () => {
      if(tColor=="black"){
         setColor("white");
      }
  }

  const handleOut = () => {
    if(tColor=="black"){
      if(Color=="white"){
        setColor("black");
      }
  }
}
  
  return (
    <div style={{display:"flex",alignItems:"center"}}>
      <a href="#" className='Button_a' onClick={onClick}>
            <button type="submit" onMouseOver={handlehover} onMouseOut={handleOut} style={{width:width, backgroundColor:BG,color:Color,border:`0px solid ${BG}`}}>
              <div className="z-index-2">{text}&nbsp;</div>
              <div className="icon-embed-xxsmall z-index-2 w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 19 18"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 9.00096C19 9.45999 18.8178 9.90026 18.4934 10.225L11.9619 16.7589C11.801 16.9198 11.61 17.0474 11.3997 17.1345C11.1895 17.2216 10.9642 17.2664 10.7367 17.2664C10.5091 17.2664 10.2838 17.2216 10.0736 17.1345C9.86333 17.0474 9.67231 16.9198 9.51141 16.7589C9.35051 16.598 9.22288 16.407 9.1358 16.1967C9.04872 15.9865 9.0039 15.7612 9.0039 15.5336C9.0039 15.3061 9.04872 15.0808 9.1358 14.8705C9.22288 14.6603 9.35051 14.4693 9.51141 14.3084L13.0867 10.7332L5.72205e-06 10.7332V7.26877L13.0867 7.26877L9.51141 3.69236C9.18646 3.36741 9.0039 2.92668 9.0039 2.46712C9.0039 2.00757 9.18646 1.56684 9.51141 1.24189C9.83636 0.916932 10.2771 0.734375 10.7367 0.734375C11.1962 0.734375 11.6369 0.916932 11.9619 1.24189L18.4934 7.77688C18.8178 8.10166 19 8.54193 19 9.00096Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              </button>
              <div className="button-bg-wrapper"></div>
            </a>
    </div>
  )
}

export default Button
