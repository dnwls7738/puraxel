import React from "react";
import { useSpring, animated } from "react-spring";
import { useRecoilState } from "recoil";
import { modeState2 } from "../../Atom";

import num from "../../assets/img/num.png";
import num2 from "../../assets/img/num2.png";
import num3 from "../../assets/img/num3.png";
import num4 from "../../assets/img/num4.png";

import Fx1 from "../../assets/img/fx_01.png";
import Fx2 from "../../assets/img/hair_01.png";
import Fx3 from "../../assets/img/hair_02.png";
import Fx4 from "../../assets/img/hair_03.png";

import HairItem from "../modeItem/HairItem";
import HairItem2 from "../modeItem/HairItem2";
import HairItem3 from "../modeItem/HairItem3";
import HairItem4 from "../modeItem/HairItem4";

function FxItem() {
  const [modeSelector, setModeSelector] = useRecoilState(modeState2);

  const selector = () => {
    setModeSelector("num1");
  };
  const selector2 = () => {
    setModeSelector("num2");
  };
  const selector3 = () => {
    setModeSelector("num3");
  };
  const selector4 = () => {
    setModeSelector("num4");
  };

  function Mode() {
    if (modeSelector === "num1") {
      return <HairItem />;
    } else if (modeSelector === "num2") {
      return <HairItem2 />;
    } else if (modeSelector === "num3") {
      return <HairItem3 />;
    } else if (modeSelector === "num4") {
      return <HairItem4 />;
    }
  }

  const HairFade = () => {
    const styles = useSpring({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: { duration: 500 },
    });
    return (
      <>
        <animated.div style={styles}>{Mode()}</animated.div>
      </>
    );
  };

  return (
    <>
      <div className="ModeExplain">
        <div className="modes2">
          <div className="laserM">
            <div
              className="fx1"
              onClick={selector}
              style={{
                backgroundColor:
                  modeSelector === "num1"
                    ? "rgba(255, 255, 255, 1)"
                    : "#f2f3f6",
                outline:
                  modeSelector === "num1"
                    ? "1px solid rgba(223, 225, 232, 1)"
                    : "none",
                boxShadow:
                  modeSelector === "num1" ? "0px 4px 40px #00000014" : "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  paddingLeft: "8px",
                  paddingBottom: "8px",
                  width: "100%",
                  backgroundImage: "linear-gradient(#fff0,#fff)",
                  backdropFilter: "blur(0.7px)",
                }}
              >
                <img
                  src={num}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
                <span
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    color: "#000000",
                    fontSize: "1.4rem",
                    marginLeft: "4px",
                  }}
                >
                  레이저
                </span>
              </div>
              <img className="fxImg" src={Fx1} alt="" />
            </div>
          </div>
          <div className="etcM">
            <div
              className="fx2"
              onClick={selector2}
              style={{
                backgroundColor:
                  modeSelector === "num2"
                    ? "rgba(255, 255, 255, 1)"
                    : "#f2f3f6",
                outline:
                  modeSelector === "num2"
                    ? "1px solid rgba(223, 225, 232, 1)"
                    : "none",
                boxShadow:
                  modeSelector === "num2" ? "0px 4px 40px #00000014" : "none",
              }}
            >
              <div style={{ paddingLeft: "6px", width: "100%" }}>
                <img
                  src={num2}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
                <span
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    color: "#000000",
                    fontSize: "1.4rem",
                    marginLeft: "4px",
                  }}
                >
                  초음파
                </span>
              </div>
              <img className="fx2Img" src={Fx2} alt="" />
            </div>
            <div
              className="fx3"
              onClick={selector3}
              style={{
                backgroundColor:
                  modeSelector === "num3"
                    ? "rgba(255, 255, 255, 1)"
                    : "#f2f3f6",
                outline:
                  modeSelector === "num3"
                    ? "1px solid rgba(223, 225, 232, 1)"
                    : "none",
                boxShadow:
                  modeSelector === "num3" ? "0px 4px 40px #00000014" : "none",
              }}
            >
              <div style={{ paddingLeft: "6px", width: "100%" }}>
                <img
                  src={num3}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
                <span
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    color: "#000000",
                    fontSize: "1.4rem",
                    marginLeft: "4px",
                  }}
                >
                  갈바닉
                </span>
              </div>
              <img className="fx3Img" src={Fx3} alt="" />
            </div>
            <div
              className="fx4"
              onClick={selector4}
              style={{
                backgroundColor:
                  modeSelector === "num4"
                    ? "rgba(255, 255, 255, 1)"
                    : "#f2f3f6",
                outline:
                  modeSelector === "num4"
                    ? "1px solid rgba(223, 225, 232, 1)"
                    : "none",
                boxShadow:
                  modeSelector === "num4" ? "0px 4px 40px #00000014" : "none",
              }}
            >
              <div style={{ paddingLeft: "6px", width: "100%" }}>
                <img
                  src={num4}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
                <span
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    color: "#000000",
                    fontSize: "1.4rem",
                    marginLeft: "4px",
                  }}
                >
                  쿨링
                </span>
              </div>
              <img className="fx4Img" src={Fx4} alt="" />
            </div>
          </div>
        </div>
        <HairFade />
      </div>
    </>
  );
}

export default FxItem;
