import React from "react";
import MainImg from "../../assets/img/main.png";

function MainCont() {
  return (
    <div className="cont">
      <div className="contName">
        <span className="contHeader">홈 에스테틱 레이저의 시작</span>
        <h1>
          홈 에스테틱
          <br /> 레이저의 시작
        </h1>
        <p className="contExplain">
          레이저 기술로
          <br />
          <em>에스테틱에 혁신을 가져오다</em>
        </p>
      </div>
      <div className="contMain">
        <img src={MainImg} alt="" />
      </div>
    </div>
  );
}

export default MainCont;
