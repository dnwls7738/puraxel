import React from "react";
import LaserEx from "../../assets/img/me_02_functionLabel_puraxellaser.svg";

function PuraxelLaser() {
  return (
    <div>
      <div className="line"></div>
      <div className="ex">
        <img className="laserImg" src={LaserEx} alt="" />
        <p className="laserEx">
          피부 두께에 따라 레이저 세기를 조정할 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default PuraxelLaser;
