import React from "react";
import "../Components/stylesheets/Line_title_style.css";

function Line_title({ text, theme }) {
  return (
    <div className="line_container">
      {theme == "dark" ? (
        <div className="LT_top">
          <div className="LT_line_dark"></div>
          <div className="LT_text_dark">{text}</div>
        </div>
      ) : (
        <div className="LT_top">
          <div className="LT_line_light"></div>
          <div className="LT_text_light">{text}</div>
        </div>
      )}
    </div>
  );
}
export default Line_title;
