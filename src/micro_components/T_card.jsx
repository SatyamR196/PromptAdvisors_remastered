import React from "react";
import "../Components/stylesheets/T_card_style.css";
function T_card({text,name}) {
  return (
    <div className="T_card_container">
      <div className="T_card_icons">
        <div className="quotes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60%"
            height="60%"
            viewBox="0 0 39 31"
            fill="white"
            preserveAspectRatio="xMidYMid meet"
            ariaHidden="true"
            role="img"
          >
            <path
              d="M22 30.7998V22.0998C22 16.2331 23.4333 11.4331 26.3 7.6998C29.1667 3.89981 33.4 1.43314 39 0.299805V7.7998C36.6667 8.33314 34.7333 9.33314 33.2 10.7998C31.7333 12.1998 30.7667 13.8665 30.3 15.7998H37V30.7998H22ZM0 30.7998V22.0998C0 16.2331 1.43333 11.4331 4.3 7.6998C7.16667 3.89981 11.4 1.43314 17 0.299805V7.7998C14.6667 8.33314 12.7333 9.33314 11.2 10.7998C9.73333 12.1998 8.76667 13.8665 8.3 15.7998H15V30.7998H0Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="starts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60%"
            height="60%"
            viewBox="0 0 84 16"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            ariaHidden="true"
            role="img"
          >
            <path
              d="M8 0L10.5769 4.45327L15.6085 5.52786L12.1694 9.35473L12.7023 14.4721L8 12.384L3.29772 14.4721L3.83057 9.35473L0.391548 5.52786L5.42315 4.45327L8 0Z"
              fill="white"
            ></path>
            <path
              d="M25 0L27.5769 4.45327L32.6085 5.52786L29.1694 9.35473L29.7023 14.4721L25 12.384L20.2977 14.4721L20.8306 9.35473L17.3915 5.52786L22.4231 4.45327L25 0Z"
              fill="white"
            ></path>
            <path
              d="M42 0L44.5769 4.45327L49.6085 5.52786L46.1694 9.35473L46.7023 14.4721L42 12.384L37.2977 14.4721L37.8306 9.35473L34.3915 5.52786L39.4231 4.45327L42 0Z"
              fill="white"
            ></path>
            <path
              d="M59 0L61.5769 4.45327L66.6085 5.52786L63.1694 9.35473L63.7023 14.4721L59 12.384L54.2977 14.4721L54.8306 9.35473L51.3915 5.52786L56.4231 4.45327L59 0Z"
              fill="white"
            ></path>
            <path
              d="M76 0L78.5769 4.45327L83.6085 5.52786L80.1694 9.35473L80.7023 14.4721L76 12.384L71.2977 14.4721L71.8306 9.35473L68.3915 5.52786L73.4231 4.45327L76 0Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="empty_block"></div>
      </div>

      {/* ================ Below Icons ====================== */}

      <div className="card_text">{text}</div>
      <div className="card_name"><span>{name}</span>&nbsp;&nbsp;Verified Fiverr User</div>
    </div>
  );
}
export default T_card;
