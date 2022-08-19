import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import Package from "../../assets/img/package.png";
import Product01 from "../../assets/img/fx-5000_pic_01.png";
import Product02 from "../../assets/img/fx-5000_pic_02.png";
import Product03 from "../../assets/img/fx-5000_03 - laser.png";
import Product04 from "../../assets/img/fx-5000_04 - set.png";

function SpecItem2({ img1, img2, img3, img4, Bs }) {
  const [buttonSelector, setButtonSelector] = useState("first");

  const selector = {
    onFirst: () => {
      setButtonSelector("first");
    },
    onSecond: () => {
      setButtonSelector("second");
    },
    onThird: () => {
      setButtonSelector("third");
    },
    onForth: () => {
      setButtonSelector("forth");
    },
  };

  function Product() {
    if (buttonSelector === "first") {
      return (
        <img
          src={Product01}
          alt=""
          style={{
            width: "90%",
            height: "auto",
            margin: "10% auto",
            display: "block",
          }}
          onLoad={() => console.log("img 위치 완료")}
        />
      );
    } else if (buttonSelector === "second") {
      return (
        <img
          src={Product02}
          alt=""
          style={{
            width: "87%",
            height: "auto",
            margin: "10% auto",
            display: "block",
          }}
          onLoad={() => console.log("img 위치 완료")}
        />
      );
    } else if (buttonSelector === "third") {
      return (
        <img
          src={Product03}
          alt=""
          style={{
            width: "40.2%",
            height: "auto",
            margin: "10% auto",
            display: "block",
          }}
          onLoad={() => console.log("img 위치 완료")}
        />
      );
    } else {
      return (
        <img
          src={Product04}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            margin: "10% auto",
            display: "block",
          }}
          onLoad={() => console.log("img 위치 완료")}
        />
      );
    }
  }

  const [modeSelector, setModeSelector] = useState("Laser");

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };

  const modeCondition = modeSelector === "Laser";

  const FxHairFade = () => {
    const styles = useSpring({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: { duration: 500 },
    });
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <animated.div style={styles}>{Product()}</animated.div>
        </div>
        <div className="list">
          <ul>
            <li>
              <div className="spec">
                <img
                  src={img1}
                  alt=""
                  onClick={selector.onFirst}
                  style={{
                    opacity: buttonSelector === "first" ? "1" : "0.5",
                    boxShadow: buttonSelector === "first" ? `${Bs}` : "none",
                  }}
                />
              </div>
            </li>
            <li>
              <div className="spec">
                <img
                  src={img2}
                  alt=""
                  onClick={selector.onSecond}
                  style={{
                    opacity: buttonSelector === "second" ? "1" : "0.5",
                    boxShadow: buttonSelector === "second" ? `${Bs}` : "none",
                  }}
                />
              </div>
            </li>
            <li>
              <div className="spec">
                <img
                  src={img3}
                  alt=""
                  onClick={selector.onThird}
                  style={{
                    opacity: buttonSelector === "third" ? "1" : "0.5",
                    boxShadow: buttonSelector === "third" ? `${Bs}` : "none",
                  }}
                />
              </div>
            </li>
            <li>
              <div className="spec">
                <img
                  src={img4}
                  alt=""
                  onClick={selector.onForth}
                  style={{
                    opacity: buttonSelector === "forth" ? "1" : "0.5",
                    boxShadow: buttonSelector === "forth" ? `${Bs}` : "none",
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="specs">
        <div className="specInfoBtn">
          <div
            onClick={selectorLaser}
            style={{
              backgroundColor: modeCondition ? "#4D5058" : "#F2F3F6",
              color: modeCondition ? "#FFFFFF" : "#A7ABB6",
              boxShadow: modeCondition
                ? "0 4px 8px rgba(0, 0, 0, 0.15)"
                : "none",
              fontSize: "1.6rem",
              fontWeight: "800",
            }}
          >
            정보
          </div>
          <div
            onClick={selectorGalvanic}
            style={{
              backgroundColor: modeCondition ? "#F2F3F6" : "#4D5058",
              color: modeCondition ? "#A7ABB6" : "#FFFFFF",
              marginLeft: "8px",
              boxShadow: modeCondition
                ? "none"
                : "0 4px 8px rgba(0, 0, 0, 0.15)",
              fontSize: "1.6rem",
              fontWeight: "800",
            }}
          >
            사진
          </div>
        </div>
        <div
          style={{
            position: "relative",
            height: "52rem",
            width: "100%",
            display: "inline-block",
          }}
        >
          {modeCondition ? (
            <>
              <div className="specInfos">
                <div className="specInfo">
                  <div className="specCont">
                    <p className="specInfoTitle">레이저 종류</p>
                    <p className="specInfoText">Er:YAG</p>
                  </div>
                  <div className="specCont">
                    <p className="specInfoTitle">레이저 레벨 범위</p>
                    <p className="specInfoText">1~3 level</p>
                  </div>
                  <div className="specCont">
                    <p className="specInfoTitle">제품 무게</p>
                    <p className="specInfoText">
                      Main Body: 616g
                      <br /> Cradle(배터리 포함): 503g
                    </p>
                  </div>

                  <div className="specCont">
                    <p className="specInfoTitle">제품 사이즈</p>
                    <p className="specInfoText">
                      Main body:
                      <br /> 82x201x225.3 mm
                      <br /> Cradle:
                      <br /> 250x169x135 mm
                    </p>
                  </div>
                </div>
                <div className="specInfo" style={{ marginLeft: "18px" }}>
                  <div className="specCont">
                    <p className="specInfoTitle">레이저 등급</p>
                    <p className="specInfoText">1등급(class 1)</p>
                  </div>
                  <div className="specCont">
                    <p className="specInfoTitle">기능 모드</p>
                    <p className="specInfoText">
                      1) 레이저 모드
                      <br /> 2) 초음파 모드
                      <br /> 3) 갈바닉 모드(옵션)
                      <br /> 4) 쿨링 모드(옵션)
                      <br /> 5) LED 모드(옵션)
                    </p>
                  </div>
                  <div className="specCont">
                    <p className="specInfoTitle">배터리 사양</p>
                    <p className="specInfoText">
                      11.1V 1,300mAh
                      <br /> Lithium-Polymer Battery
                      <br /> 충전 어댑터: <br /> 14VDC / 1.71A
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#A7ABB6",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                >
                  구성품
                </h1>
                <img
                  src={Package}
                  alt=""
                  style={{
                    width: "280px",
                    marginLeft: "20px",
                    marginTop: "8px",
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <FxHairFade />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SpecItem2;
