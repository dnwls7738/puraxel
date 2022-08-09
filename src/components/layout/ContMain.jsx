import React from "react";

function Main({ header, img, bg }) {
  return (
    <div
      className="cont"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="contName">
        <span className="contHeader">홈 에스테틱 레이저의 시작</span>
        <h1>{header}</h1>
        <p className="contExplain">
          레이저 기술로
          <br />
          <em>에스테틱에 혁신을 가져오다</em>
        </p>
      </div>
      <div className="contMain">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Main;
