import React from "react";
import LaserEx from "../../assets/img/puraxelLaser.svg";
import Point from "../../assets/img/me_point.svg";

function PuraxelLaser() {
  return (
    <div>
      <div className="ex3">
        <img className="senserImg" src={LaserEx} alt="" />
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
        <img className="point" src={Point} alt="" />
        <img className="point2" src={Point} alt="" />
      </div>
    </div>
  );
}

export default PuraxelLaser;
