import React from "react";
import MainImg from "../../assets/img/main.png";

function MainCont() {
  return (
    <div className="cont">
      <div className="contName">
        <span className="contHeader_2">고품격 홈 레이저 퓨라셀</span>
        <h1>
          홈 에스테틱
          <br /> 레이저의 시작
        </h1>
        <div className="contExplain2">
          <p>프락셔널 레이저 모듈로 생성되는 5000개의 마이크로 홀.</p>
          <p className="span">
            레이저, 시작부터 프로페셔널.
            <br /> 홈 레이저 뷰티 케어의 시작.
            <br /> 퓨라셀 ME.
          </p>
        </div>
      </div>
      <div className="contMain2">
        <img src={MainImg} alt="" />
      </div>
    </div>
  );
}

export default MainCont;
