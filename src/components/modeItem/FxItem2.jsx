import React from "react";

import hair from "../../assets/img/functionIllust_ultrasonic.png";

function HairItem2() {
  return (
    <>
      <div className="modesEx">
        <div className="modeEx">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "Pretendard",
                fontSize: "1.6rem",
                color: "#000000",
                fontWeight: "700",
              }}
            >
              초음파 모드
            </p>
            <p
              style={{
                fontFamily: "Pretendard",
                fontSize: "1.2rem",
                color: "#CA1657",
                fontWeight: "600",
                lineHeight: "144%",
              }}
            >
              #영양 흡수
              <br /> #영양 공급
            </p>
          </div>
          <div>
            <img
              src={hair}
              alt=""
              style={{
                width: "100%",
                paddingLeft: "12px",
                marginBottom: "12px",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Pretendard",
              fontSize: "1.6rem",
              color: "#000000",
              fontWeight: "500",
              marginTop: "12px",
              lineHeight: "150%",
            }}
          >
            기능성 솔루션을 바른 후 마사지하면 높은 <br /> 흡수력으로 더
            탄력있고 촘촘한 피부 관리를
            <br /> 도와줍니다.
          </p>
        </div>
      </div>

      <div
        style={{
          marginLeft: "20px",
          height: "auto",
          width: "32rem",
          position: "relative",
        }}
      >
        <div className="etcEx" style={{ width: "25rem" }}>
          <p
            style={{
              padding: "12px 22px 25px 12px",
              borderRadius: "4px",
            }}
          >
            1MHz의 강한 파장의 초음파를 이용하여
            <br /> 초당 약 100만회로 발생되는 진동으로
            <br /> 피부를 이완시켜 자극없이 노폐물 제거와
          </p>
        </div>
        <div
          className="etcEx"
          style={{
            width: "25rem",
            marginBottom: "65px",
            position: "absolute",
            top: "80%",
            right: "0",
          }}
        >
          <p
            style={{
              padding: "12px 24px 12px 12px",
              borderRadius: "4px",
            }}
          >
            기능성 솔루션을 바른 후 충분히 흡수되도록 도움을 줍니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default HairItem2;
