import React, { useState } from "react";
import Active01 from "../../assets/img/me_01_active.png";
import Active02 from "../../assets/img/me_02_active.png";
import Active03 from "../../assets/img/me_03_active.png";
import Active04 from "../../assets/img/me_04_active.png";

function SpecBtn() {
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
            }}
          >
            사진
          </div>
        </div>
        {modeCondition ? (
          <div className="specInfos">
            <div className="specInfo">
              <div className="specCont">
                <p className="specInfoTitle">레이저 종류</p>
                <p className="specInfoText">Er:YAG</p>
              </div>
              <div className="specCont">
                <p className="specInfoTitle">레이저 출력 범위</p>
                <p className="specInfoText">80~140mJ (±20%)</p>
              </div>
              <div className="specCont">
                <p className="specInfoTitle">레이저 레벨 범위</p>
                <p className="specInfoText">1~2 level</p>
              </div>
              <div className="specCont">
                <p className="specInfoTitle">제품 무게</p>
                <p className="specInfoText">
                  Main Body: 350g
                  <br /> Cradle: 110g
                </p>
              </div>
              <div className="specCont">
                <p className="specInfoTitle">배터리 사양</p>
                <p className="specInfoText">
                  Built-in Rechargeable
                  <br /> 11.1V 850mAh
                  <br /> Lithium-Polymer Battery
                </p>
              </div>
            </div>
            <div div className="specInfo" style={{ marginLeft: "18px" }}>
              <div className="specCont">
                <p className="specInfoTitle">레이저 파장</p>
                <p className="specInfoText">2940nm(±1%)</p>
              </div>
              <div className="specCont">
                <p className="specInfoTitle">레이저 반복</p>
                <p className="specInfoText">3~5seconds interval</p>
              </div>
              <div className="specCont">
                <p className="specInfoTitle">기능 모드</p>
                <p className="specInfoText">
                  1) Fractional Laser
                  <br /> 2) Galvanic
                </p>
              </div>
              <div className="specCont">
                <p className="specInfoTitle">제품 사이즈</p>
                <p className="specInfoText">
                  Main body:
                  <br /> 50x57x220 mm
                  <br /> Cradle:
                  <br /> 98x98x85 mm
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <ul>
              <li>
                <div className="spec" style={{}}>
                  <img
                    src={Active01}
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
                    src={Active02}
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
                    src={Active03}
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
                    src={Active04}
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
          </>
        )}
      </div>
    </>
  );
}

export default SpecBtn;
