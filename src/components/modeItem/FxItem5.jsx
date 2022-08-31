import React from "react";

import hair from "../../assets/img/functionIllust_led.png";

function FxItem5() {
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
                color: "rgba(85, 87, 111, 1)",
                fontWeight: "700",
              }}
            >
              LED 모드
            </p>
            <p
              style={{
                fontFamily: "Pretendard",
                fontSize: "1.2rem",
                color: "#A292A3",
                fontWeight: "600",
                lineHeight: "144%",
              }}
            >
              #보습
              <br /> #탄력
              <br /> #트러블 진정
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
              color: "#808591",
              fontWeight: "500",
              marginTop: "12px",
              lineHeight: "150%",
            }}
          >
            3가지 파장의 빛으로 피부 깊숙한 곳까지
            <br /> 건강하고 탄력 있게 관리해줍니다.
          </p>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          marginLeft: "20px",
          width: "32rem",
        }}
      >
        <div className="etcEx" style={{ width: "25rem" }}>
          <p
            style={{
              padding: "12px 22px 25px 12px",
              borderRadius: "4px",
            }}
          >
            Red, Blue, Pink 모드 중<br /> 원하는 기능 사용으로
          </p>
        </div>
        <div
          className="etcEx"
          style={{
            width: "25rem",
            marginLeft: "20px",
            position: "absolute",
            top: "80%",
            right: "0",
            marginBottom: "65px",
          }}
        >
          <p
            style={{
              padding: "12px 24px 12px 12px",
              borderRadius: "4px",
            }}
          >
            피부 진정과 보습・탄력, 트러블 완화에
            <br /> 도움을 줍니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default FxItem5;
