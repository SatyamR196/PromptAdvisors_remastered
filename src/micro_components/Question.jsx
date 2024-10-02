import React from "react";
import "../Components/stylesheets/pico.conditional.zinc.css";
import "../Components/stylesheets/Question_style.css";

function Question({ text,answer }) {
  return (
    <div className="Q_main pico container">
      <details >
        <summary style={{color:"white",fontWeight:"bold",lineHeight:"1.8"}}>{text}</summary>
        <p style={{color:"white",lineHeight:"1.4"}}>{answer}</p>
      </details>
    </div>
  );
}

export default Question;

// <a href="#">
//         <div className="Q_text">{text}</div>
//         <div className="Q_logo">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="32px"
//             height="32px"
//             viewBox="0 0 24 24"
//             fill="none"
//             preserveAspectRatio="xMidYMid meet"
//             ariaHidden="true"
//             role="img"
//           >
//             <path
//               d="M9 18L15 12L9 6"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             ></path>
//           </svg>
//         </div>
//       </a>
