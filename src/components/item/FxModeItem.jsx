import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import num from "../../assets/img/num.png";
import num2 from "../../assets/img/num2.png";
import num3 from "../../assets/img/num3.png";
import num4 from "../../assets/img/num4.png";
import num5 from "../../assets/img/num5.png";

import Fx1 from "../../assets/img/fx_01.png";
import Fx2 from "../../assets/img/fx_02.png";
import Fx3 from "../../assets/img/fx_03.png";
import Fx4 from "../../assets/img/fx_04.png";
import Fx5 from "../../assets/img/fx_05.png";

import FxItem from "../modeItem/FxItem";
import FxItem2 from "../modeItem/FxItem2";
import FxItem3 from "../modeItem/FxItem3";
import FxItem4 from "../modeItem/FxItem4";
import FxItem5 from "../modeItem/FxItem5";

function FxModeItem() {
  const [modeSelector, setModeSelector] = useState("num1");

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
  const selector5 = () => {
    setModeSelector("num5");
  };

  function Mode() {
    if (modeSelector === "num1") {
      return <FxItem />;
    } else if (modeSelector === "num2") {
      return <FxItem2 />;
    } else if (modeSelector === "num3") {
      return <FxItem3 />;
    } else if (modeSelector === "num4") {
      return <FxItem4 />;
    } else if (modeSelector === "num5") {
      return <FxItem5 />;
    }
  }

  const FxFade = () => {
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
        <div className="modes3">
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
                    color: "#55576F",
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
            <div style={{ marginRight: "8px", width: "100%" }}>
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
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "6px",
                    paddingBottom: "8px",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  <img
                    src={num2}
                    alt=""
                    style={{ width: "2rem", height: "2rem" }}
                  />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#55576F",
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
                <div
                  style={{
                    paddingLeft: "6px",
                    paddingBottom: "8px",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  <img
                    src={num4}
                    alt=""
                    style={{ width: "2rem", height: "2rem" }}
                  />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#55576F",
                      fontSize: "1.4rem",
                      marginLeft: "4px",
                    }}
                  >
                    쿨링
                  </span>
                </div>
                <img className="fx3Img" src={Fx4} alt="" />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div
                className="fx4"
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
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "6px",
                    position: "absolute",
                    bottom: 0,
                    paddingBottom: "8px",
                  }}
                >
                  <img
                    src={num3}
                    alt=""
                    style={{ width: "2rem", height: "2rem" }}
                  />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#55576F",
                      fontSize: "1.4rem",
                    }}
                  >
                    갈바닉
                  </span>
                </div>
                <img className="fx4Img" src={Fx3} alt="" />
              </div>
              <div
                className="fx5"
                onClick={selector5}
                style={{
                  backgroundColor:
                    modeSelector === "num5"
                      ? "rgba(255, 255, 255, 1)"
                      : "#f2f3f6",
                  outline:
                    modeSelector === "num5"
                      ? "1px solid rgba(223, 225, 232, 1)"
                      : "none",
                  boxShadow:
                    modeSelector === "num5" ? "0px 4px 40px #00000014" : "none",
                }}
              >
                <div
                  style={{
                    paddingLeft: "6px",
                    position: "absolute",
                    bottom: 0,
                    paddingBottom: "8px",
                  }}
                >
                  <div>
                    <img
                      src={num5}
                      alt=""
                      style={{ width: "2rem", height: "2rem" }}
                    />
                    <span
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 700,
                        color: "#55576F",
                        fontSize: "1.4rem",
                        marginLeft: "4px",
                      }}
                    >
                      LED
                    </span>
                  </div>
                </div>
                <img className="fx5Img" src={Fx5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <FxFade />
      </div>
    </>
  );
}

export default FxModeItem;
