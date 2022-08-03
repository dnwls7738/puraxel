import React, { useEffect, useRef, useState } from "react";
import LaserEx from "../../assets/img/puraxelLaser.svg";
import Senser from "../../assets/img/senser.svg";
import GalbanicEx from "../../assets/img/galvanicMode.svg";
import LaserImg from "../../assets/img/me_01.png";
import GalbanicImg from "../../assets/img/me_02.png";
import { gsap } from "gsap";

const LaserImage = {
  backgroundImage: `url(${LaserImg} )`,
};
const GalbanicImage = {
  backgroundImage: `url(${GalbanicImg} )`,
};

const LaserExplain = () => {
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
};

const GalvanicExplain = () => {
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
};

const LaserText = () => {
  return (
    <p>
      한번의 레이저로 0.2mm 이하의 얕은 피부층에 작은 <br />
      홀을 생성하여 크림과 앰플의 피부흡수율을 높여줍니다.
    </p>
  );
};

const GarbanicText = () => {
  return (
    <p>
      같은 극끼리 밀어내는 갈바닉 전류의 성질을 이용하여
      <br /> 이온화된 화장품의 흡수율을 높입니다. 레이저 모드를 <br />
      함께 사용하면 피부 흡수율을 극대화할 수 있습니다.
    </p>
  );
};

function MeItem() {
  const [modeSelector, setModeSelector] = useState("Laser");

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };

  const modeCondition = modeSelector === "Laser";

  return (
    <>
      <div className="ModeExplain">
        <div className="modes">
          <div
            className="mode1"
            onClick={selectorLaser}
            style={{
              backgroundColor: modeCondition ? "#4d5058" : "#f2f3f6",
              borderColor: modeCondition ? "#4d5058" : "#f2f3f6",
              color: modeCondition ? "#f8f9fa" : "#a7abb6",
              boxShadow: modeCondition ? "0 8px 8px #00000020" : "none",
            }}
          >
            <p>
              PURAXEL LASER <br />
              <em>레이저 모드</em>
            </p>
          </div>

          <div
            className="mode2"
            onClick={selectorGalvanic}
            style={{
              backgroundColor: modeCondition ? "#f2f3f6" : "#4d5058",
              borderColor: modeCondition ? "#f2f3f6" : "#4d5058",
              color: modeCondition ? "#a7abb6" : "#f8f9fa",
              boxShadow: modeCondition ? "none" : "0 8px 8px #00000020",
            }}
          >
            <p>
              GALBANIC <br />
              <em>갈바닉 모드</em>
            </p>
          </div>
          <div className="modeEx">
            {modeCondition ? <LaserText /> : <GarbanicText />}
          </div>
        </div>
        <div className="exs" style={modeCondition ? LaserImage : GalbanicImage}>
          {modeCondition ? <LaserExplain /> : <GalvanicExplain />}
        </div>
      </div>
    </>
  );
}

export default MeItem;
