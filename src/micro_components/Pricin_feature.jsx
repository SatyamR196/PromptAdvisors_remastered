import React from "react";
import "../Components/stylesheets/pricing_feature_style.css";
import Button from "./Button";

function Pricin_feature({ f_array ,order}) {
  return (
    <div className="pf_container grid_layout" style={{order:order}}>
      <div className="pf_main">
        <div className="pf_title"><b>Features:</b></div>
        <div className="pf_bullets">
          {f_array.map((ele) => (
            <div style={{display:"flex",gap:"0.4rem",alignItems:"center"}}>
              <svg style={{minWidth:"16px"}}
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 10 11"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                ariaHidden="true"
                role="img"
                className="cz-color-1380624"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5C6.32608 0.5 7.59785 1.02678 8.53553 1.96447C9.47322 2.90215 10 4.17392 10 5.5C10 6.82608 9.47322 8.09785 8.53553 9.03553C7.59785 9.97322 6.32608 10.5 5 10.5C3.67392 10.5 2.40215 9.97322 1.46447 9.03553C0.526784 8.09785 0 6.82608 0 5.5ZM4.71467 7.64L7.59333 4.04133L7.07333 3.62533L4.61867 6.69267L2.88 5.244L2.45333 5.756L4.71467 7.64Z"
                  fill="currentColor"
                  class="cz-color-1380624"
                ></path>
              </svg>
              <p className="pf_text">{ele}</p>
            </div>
          ))}
        </div>
      </div>
      <Button text="Book a call" width={150} BG="black" tColor="white" />
    </div>
  );
}

export default Pricin_feature;

{
  /* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 10 11"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            ariaHidden="true"
            role="img"
            class="cz-color-1380624"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5C6.32608 0.5 7.59785 1.02678 8.53553 1.96447C9.47322 2.90215 10 4.17392 10 5.5C10 6.82608 9.47322 8.09785 8.53553 9.03553C7.59785 9.97322 6.32608 10.5 5 10.5C3.67392 10.5 2.40215 9.97322 1.46447 9.03553C0.526784 8.09785 0 6.82608 0 5.5ZM4.71467 7.64L7.59333 4.04133L7.07333 3.62533L4.61867 6.69267L2.88 5.244L2.45333 5.756L4.71467 7.64Z"
              fill="currentColor"
              class="cz-color-1380624"
            ></path>
          </svg>
          <p className="pf_text"></p> */
}
