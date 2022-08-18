import React, { useState } from "react";
import Active01 from "../../assets/img/me_01_active.png";
import Active02 from "../../assets/img/me_02_active.png";
import Active03 from "../../assets/img/me_03_active.png";
import Active04 from "../../assets/img/me_04_active.png";

function SpecItem() {
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
                ? "0px 0px 20px rgba(0, 0, 0, 0.15)"
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
                : "0px 0px 20px rgba(0, 0, 0, 0.15)",
              fontSize: "1.6rem",
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
            <div className="specInfo" style={{ marginLeft: "18px" }}>
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
          <div className="list">
            <ul>
              <li>
                <div className="spec">
                  <img
                    src={Active01}
                    alt=""
                    onClick={selector.onFirst}
                    style={{
                      opacity: buttonSelector === "first" ? "1" : "0.5",
                      boxShadow:
                        buttonSelector === "first"
                          ? "0px 0px 20px #5c549626"
                          : "none",
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
                      opacity: buttonSelector === "second" ? "1" : "0.5",
                      boxShadow:
                        buttonSelector === "first"
                          ? "0px 0px 20px #5c549626"
                          : "none",
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
                      opacity: buttonSelector === "third" ? "1" : "0.5",
                      boxShadow:
                        buttonSelector === "first"
                          ? "0 4px 8px #5c549626"
                          : "none",
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
                      opacity: buttonSelector === "forth" ? "1" : "0.5",
                      boxShadow:
                        buttonSelector === "first"
                          ? "0px 0px 20px #5c549626"
                          : "none",
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

export default SpecItem;
