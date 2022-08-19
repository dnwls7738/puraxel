import React from "react";

import hair from "../../assets/img/functionIllust_ultrasonicH.png";

function HairItem2() {
  return (
    <>
      <div className="modesEx">
        <div className="modeEx">
          <div
            style={{
              width: "160px",
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
                fontWeight: "800",
              }}
            >
              초음파 모드
            </p>
            <p
              style={{
                fontFamily: "Pretendard",
                fontSize: "1.2rem",
                color: "#A292A3",
                fontWeight: "700",
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
                width: "180px",
                heigth: "auto",
                marginLeft: "12px",
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
              color: "#4D5058",
              fontWeight: "600",
              marginTop: "12px",
              lineHeight: "150%",
            }}
          >
            기능성 솔루션을 바른 후 충분히 흡수되도록 <br />
            도움을 줍니다.
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
            1MHz의 강한 파장의 초음파를 이용하여
            <br /> 초당 약 100만회로 발생되는 진동으로
            <br /> 피부를 이완시켜 자극없이 노폐물 제거와
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
            기능성 솔루션을 바른 후 충분히 흡수되도록 도움을 줍니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default HairItem2;
