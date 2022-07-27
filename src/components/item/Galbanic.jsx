import React from "react";
import GalbanicEx from "../../assets/img/me_02_functionLabel_galvanicmode.svg";

function Galbanic() {
  return (
    <div>
      <div className="line2"></div>
      <div className="ex2">
        <img className="galbanicImg" src={GalbanicEx} alt="" />
        <p className="galbanicEx">
          갈바닉 전류 기술을
          <br /> 활용하여 크림, 앰플을 <br />
          피부에 깊숙이 <br />
          스며들게 합니다.
        </p>
      </div>
    </div>
  );
}

export default Galbanic;
