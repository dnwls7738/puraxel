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
          프락셔널 레이저 모듈로 생성되는
          <br /> 5000개의 마이크로 홀.
        </p>
      </div>
      <div className="contMain">
        <img src={MainImg} alt="" />
      </div>
    </div>
  );
}

export default MainCont;
