import React from "react";

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
          <img className="img" src={LaserImg} alt="" />
        </div>
      </div>
    </>
  );
};

const LaserText = () => {
  return (
    <p>
      피부층에 레이저로 한 번에 100개의 0.02mm 이하의 작은 홀을 생성하여 화장품
      및 앰플 등의 피부 흡수를 높여줍니다.(5~10분 사용시 약 5,000개이상의 홀
      생성)
    </p>
  );
};

const GarbanicText = () => {
  return (
    <p>
      갈바닉은 같은 극끼리 밀어내고, 반대 극끼리는 당기는 성질의 갈바닉 전류를
      활용하여 화장품 및 앰플 등의 유효성분을 이온화시켜 피부 깊숙이
      침투시킵니다.
    </p>
  );
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
            <LaserExplain />
          </animated.div>
        ) : (
          <animated.div style={styles}>
            <GalvanicImage />
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
                color: modeCondition ? "#f8f9fa" : "#000000",
                boxShadow: modeCondition ? "0 8px 8px #00000020" : "none",
              }}
            >
              <p>
                LASER MODE <br />
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
                color: modeCondition ? "#000000" : "#f8f9fa",
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
