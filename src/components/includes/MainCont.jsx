import React from "react";
import MainImg from "../../assets/img/main.png";

function MainCont() {
  return (
    <div className="cont">
      <div className="contName">
        <h1
          style={{
            fontSize: "4.8rem",
          }}
        >
          <em style={{ fontWeight: "600" }}>홀</em>로 빛나다
        </h1>
        <p
          style={{
            fontFamily: "Pretendard",
            fontWeight: "400",
            fontSize: "1.6rem",
            color: "#55576F",
            marginBottom: "24px",
          }}
        >
          레이저의 미세한 홀이 당신의 피부를 지켜줍니다.
        </p>
        <div className="contExplain2">
          <p>소형 미용기기의 혁신</p>
          <p className="span">
            레이저 전문 기업이 만들어
            <br />
            안전한 소형 프락셔널 레이저
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
