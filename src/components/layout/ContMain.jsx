import React from "react";

function Main({ header, img, miniHeader, text1, text2, text3, text4 }) {
  return (
    <div className="cont">
      <div className="contName">
        <span className="contHeader">{miniHeader}</span>
        <h1>{header}</h1>
        <div className="contExplain">
          {text1}
          <br />
          {text2}
          <br />
          <p>{text3}</p>
        </div>
      </div>
      <div className="contMain">
        <img src={img} alt="" />
        <p className="warning">{text4}</p>
      </div>
    </div>
  );
}

export default Main;
