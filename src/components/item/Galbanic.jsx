import React from "react";
import GalbanicEx from "../../assets/img/galvanicMode.svg";
import Point from "../../assets/img/me_point.svg";

function Galbanic() {
  return (
    <div>
      <div className="ex2">
        <img className="galbanicImg" src={GalbanicEx} alt="" />
        <p className="galbanicEx">
          갈바닉 전류 기술을 활용하여 크림, 앰플을 피부에 <br /> 깊숙이 스며들게
          합니다.
        </p>
        <img className="point3" src={Point} alt="" />
      </div>
    </div>
  );
}

export default Galbanic;
