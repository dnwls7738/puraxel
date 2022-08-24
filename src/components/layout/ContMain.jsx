import React from "react";

function Main({ header, img, miniHeader, text1, text2, text3 }) {
  return (
    <div className="cont">
      <div className="contName">
        <span className="contHeader">{miniHeader}</span>
        <h1>{header}</h1>
        <div className="contExplain">
          <em>{text1}</em>
          <br />
          {text2}
          <br />
          <p>{text3}</p>
        </div>
      </div>
      <div className="contMain">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Main;
