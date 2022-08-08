import React from "react";
import Skin1 from "../../assets/img/skin1.png";
import Skin2 from "../../assets/img/skin2.png";
import Skin3 from "../../assets/img/skin3.png";
import Skin4 from "../../assets/img/skin4.png";
import Skin5 from "../../assets/img/skin5.png";

function FxExItem() {
  return (
    <div className="ModeExplain">
      <div className="exInfo">
        <p>
          시험기간 <span>2020 . 5 . 21 ~ 7.13</span>
        </p>
        <p>
          시험기관 <span>한국피부과학연구원</span>
        </p>
        <p>
          피시험자 <span>여성 21명</span>
        </p>
        <p>
          부위 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>안면부위와 전완부위 (2주 사용후 2배 증가)</span>
        </p>
      </div>
      <div className="laserConts">
        <div className="laserCont">
          <p>
            피부보습력 <br />
            3배 증가
          </p>
          <img
            src={Skin1}
            alt=""
            style={{
              width: "65%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont">
          <p>
            피부 치밀도
            <br /> 30% 증가
          </p>
          <img
            src={Skin2}
            alt=""
            style={{
              width: "65%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont">
          <p>
            피부톤(맑기)
            <br /> 2배 증가
          </p>
          <img
            src={Skin3}
            alt=""
            style={{
              width: "65%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont">
          <p>
            색소 침착
            <br /> 개선
          </p>
          <img
            src={Skin4}
            alt=""
            style={{
              width: "65%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont">
          <p>
            안티에이징
            <br /> 효과
          </p>
          <img
            src={Skin5}
            alt=""
            style={{
              width: "65%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FxExItem;
