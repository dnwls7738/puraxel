import React from "react";

import hair from "../../assets/img/functionIllust_cooling.png";

function HairItem4() {
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
              쿨링 모드
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
              #피부 진정
              <br /> #모공 축소
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
            차가운 쿨링효과로 피부를 진정시키고
            <br /> 모공 축소를 도와줍니다.
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
            레이저, 초음파 사용 후 쿨링모드 사용시 <br />
            피부를 차갑게 진정 시켜,
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
            확장된 모공 축소에 도움을 줍니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default HairItem4;
