import React from "react";
import LaserEx from "../../assets/img/puraxelLaser.svg";
import Senser from "../../assets/img/senser.svg";

function PuraxelLaser() {
  return (
    <>
      <div className="ex3">
        <img className="senserImg" src={Senser} alt="" />
        <p className="senserEx">
          피부에 닿을 때만 <br />
          레이저가 나와 안전합니다.
        </p>
      </div>
      <div className="ex">
        <img className="laserImg" src={LaserEx} alt="" />
        <p className="laserEx">
          피부 두께에 따라
          <br /> 레이저 세기를
          <br /> 조정할 수 있습니다.
        </p>
      </div>
    </>
  );
}

export default PuraxelLaser;
