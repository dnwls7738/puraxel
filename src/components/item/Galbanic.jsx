import React from "react";
import GalbanicEx from "../../assets/img/galvanicMode.svg";

function Galbanic() {
  return (
    <>
      <div className="ex2">
        <img className="galbanicImg" src={GalbanicEx} alt="" />
        <p className="galbanicEx">
          갈바닉 전류 기술을 활용하여 크림, 앰플을 피부에 <br /> 깊숙이 스며들게
          합니다.
        </p>
      </div>
    </>
  );
}

export default Galbanic;
