import React from "react";
import LaserEx from "../../assets/img/03.svg";
import Senser from "../../assets/img/senser.svg";
import GalbanicEx from "../../assets/img/galvanicMode.svg";
import LaserImg from "../../assets/img/me_02_laser.png";
import GalbanicImg from "../../assets/img/me_02_galvanic.png";

import { useSpring, animated } from "react-spring";
import { useRecoilState } from "recoil";
import { modeState } from "../../Atom";

const LaserExplain = () => {
  return (
    <>
      <div>
        <div className="ex2">
          <img className="senserImg" src={Senser} alt="senser" />
          <p className="senserEx">
            피부에 닿을 때만 <br />
            레이저가 나와 안전합니다.
          </p>
        </div>
        <div className="ex">
          <img className="laserImg" src={LaserEx} alt="laser" />
          <p className="laserEx">
            피부 두께에 따라
            <br /> 레이저 세기를
            <br /> 조정할 수 있습니다.
          </p>
        </div>
      </div>
    </>
  );
};

const GalvanicExplain = () => {
  return (
    <>
      <div>
        <div className="ex3">
          <img className="galvanicImg" src={GalbanicEx} alt="galbanic" />
          <p className="galbanicEx">
            갈바닉 전류 기술을 활용하여
            <br /> 크림, 앰플을 피부에 <br /> 깊숙이 스며들게 합니다.
          </p>
        </div>
      </div>
    </>
  );
};

const LaserText = () => {
  return (
    <p>
      한번의 레이저로 0.2mm 이하의 얕은 피부층에 작은
      <br /> 홀을 생성하여
      <em>크림과 앰플의 피부흡수율을 높여줍니다.</em>
    </p>
  );
};

const GarbanicText = () => {
  return (
    <p>
      같은 극끼리 밀어내는 <em>갈바닉 전류의 성질</em>을 이용하여
      <br />
      <em>이온화된 화장품의 흡수율을 높입니다.</em> 레이저 모드를
      <br /> 함께 사용하면 피부 흡수율을 극대화할 수 있습니다.
    </p>
  );
};

const LaserImage = () => {
  return <img className="img" src={LaserImg} alt="" />;
};
const GalvanicImage = () => {
  return <img className="img" src={GalbanicImg} alt="" />;
};

function MeModeItem() {
  const [modeSelector, setModeSelector] = useRecoilState(modeState);

  const selectorLaser = () => {
    setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    setModeSelector("Galvanic");
  };

  const modeCondition = modeSelector === "Laser";

  const Exs = () => {
    const styles = useSpring({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: { duration: 500 },
    });
    return (
      <>
        {modeCondition ? (
          <animated.div style={styles}>
            <LaserImage />
            <LaserExplain />
          </animated.div>
        ) : (
          <animated.div style={styles}>
            <GalvanicImage />
            <GalvanicExplain />
          </animated.div>
        )}
      </>
    );
  };

  return (
    <>
      <div className="ModeExplain">
        <div className="modes">
          <div className="modeBox">
            <div
              className="mode1"
              onClick={selectorLaser}
              style={{
                background: modeCondition
                  ? "linear-gradient(rgba(147, 132, 234, 1), rgba(105, 101, 155, 1))"
                  : "#f2f3f6",
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
                background: modeCondition
                  ? "#f2f3f6"
                  : "linear-gradient(rgba(147, 132, 234, 1), rgba(105, 101, 155, 1))",
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
          </div>
          <div className="modeEx">
            {modeCondition ? <LaserText /> : <GarbanicText />}
          </div>
        </div>

        <div className="exs">
          <Exs />
        </div>
      </div>
    </>
  );
}

export default MeModeItem;
