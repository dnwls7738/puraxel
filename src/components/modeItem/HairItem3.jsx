import React from "react";

import hair from "../../assets/img/functionIllust_galvanicH.png";

function HairItem3() {
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
              갈바닉 모드
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
              #딥 클렌징
              <br /> #피부 속 영양분
              <br /> 침투 촉진
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
            같은 극끼리 밀어내는 갈바닉 기술을 활용하여 이온화된 화장품의
            흡수율을 높입니다. 레이저 모드와 함께 사용하면 피부 흡수율을
            극대화할 수 있습니다.
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
            기능성 솔루션과 함께 음이온(-ION)으로
            <br /> 영양분 침투에 도움
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
            갈바닉+이온(+ION)으로 노폐물을 배출
          </p>
        </div>
      </div>
    </>
  );
}

export default HairItem3;
