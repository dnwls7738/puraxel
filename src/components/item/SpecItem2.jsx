import React, { useState } from "react";
import Package from "../../assets/img/package.png";

function SpecItem2({ img1, img2, img3, img4 }) {
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
            }}
          >
            사진
          </div>
        </div>
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
                style={{ width: "280px", marginLeft: "20px", marginTop: "8px" }}
              />
            </div>
          </>
        ) : (
          <div className="list">
            <ul>
              <li>
                <div className="spec">
                  <img
                    src={img1}
                    alt=""
                    onClick={selector.onFirst}
                    style={{
                      filter:
                        buttonSelector === "first"
                          ? "grayscale(0)"
                          : "grayscale(80%)",
                      marginBottom: buttonSelector === "first" ? "8px" : "0",
                      marginTop: buttonSelector === "first" ? "0" : "11px",
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
                      filter:
                        buttonSelector === "second"
                          ? "grayscale(0)"
                          : "grayscale(80%)",
                      marginBottom: buttonSelector === "second" ? "8px" : "0",
                      marginTop: buttonSelector === "second" ? "0" : "11px",
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
                      filter:
                        buttonSelector === "third"
                          ? "grayscale(0)"
                          : "grayscale(80%)",
                      marginBottom: buttonSelector === "third" ? "8px" : "0",
                      marginTop: buttonSelector === "third" ? "0" : "11px",
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
                      filter:
                        buttonSelector === "forth"
                          ? "grayscale(0)"
                          : "grayscale(80%)",
                      marginBottom: buttonSelector === "forth" ? "8px" : "0",
                      marginTop: buttonSelector === "forth" ? "0" : "11px",
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SpecItem2;
