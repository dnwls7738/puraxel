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
        <div className="specInfo">
          <div
            onClick={selectorLaser}
            style={{
              backgroundColor: modeCondition ? "#7E818D" : "#F2F3F6",
              color: modeCondition ? "#FFFFFF" : "#A7ABB6",
            }}
          >
            정보
          </div>
          <div
            onClick={selectorGalvanic}
            style={{
              backgroundColor: modeCondition ? "#F2F3F6" : "#7E818D",
              color: modeCondition ? "#A7ABB6" : "#FFFFFF",

              marginLeft: "8px",
            }}
          >
            사진
          </div>
        </div>
        <ul>
          <li>
            <div className="spec">
              <img
                src={Active01}
                alt=""
                onClick={selector.onFirst}
                style={{
                  filter:
                    buttonSelector === "first"
                      ? "grayscale(0)"
                      : "grayscale(80%)",
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
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SpecBtn;
