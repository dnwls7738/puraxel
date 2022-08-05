import React, { useState } from "react";

function ExperimentBtn() {
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

  const modeCondition = buttonSelector === "first";

  return (
    <div className="buttons">
      <div className="button">
        <div
          className="btn"
          onClick={selector.onFirst}
          style={{
            background: modeCondition ? "#55576F" : "#f2f3f6",
            color: modeCondition ? "#f8f9fa" : "#a7abb6",
          }}
        >
          <p>01</p>
          <p>미 임상실험</p>
        </div>
        <div
          className="btn2"
          onClick={selector.onSecond}
          style={{
            background: modeCondition ? "#55576F" : "#f2f3f6",
            color: modeCondition ? "#f8f9fa" : "#a7abb6",
          }}
        >
          <p>02</p>
          <p>미 임상실험</p>
        </div>
      </div>
      <div className="button">
        <div
          className="btn"
          onClick={selector.onThird}
          style={{
            background: modeCondition ? "#55576F" : "#f2f3f6",
            color: modeCondition ? "#f8f9fa" : "#a7abb6",
          }}
        >
          <p>03</p>
          <p>미 임상실험</p>
        </div>
        <div
          className="btn2"
          onClick={selector.onForth}
          style={{
            background: modeCondition ? "#55576F" : "#f2f3f6",
            color: modeCondition ? "#f8f9fa" : "#a7abb6",
          }}
        >
          <p>04</p>
          <p>미 임상실험</p>
        </div>
      </div>
    </div>
  );
}

export default ExperimentBtn;
