import React from "react";

import TechImg from "../../assets/img/tech_main_01.png";
import TechImg2 from "../../assets/img/tech_main_02.png";
import TechImg3 from "../../assets/img/tech_main_03.png";
import TechImg_1 from "../../assets/img/tech_main_01_1.png";
import TechImg_2 from "../../assets/img/tech_main_02_2.png";
import TechImg_3 from "../../assets/img/tech_main_03_3.png";
import Tech1 from "../../assets/img/tech1.png";
import Tech1_1 from "../../assets/img/tech1_1.png";
import Tech2 from "../../assets/img/tech2.png";
import Tech2_2 from "../../assets/img/tech2_2.png";
import Tech3 from "../../assets/img/tech3.png";
import Tech3_3 from "../../assets/img/tech3_3.png";

import { Collapse, Paper, Box } from "@mui/material";

function CollapseItem() {
  const [checked, setChecked] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleChange2 = () => {
    setChecked2((prev) => !prev);
  };
  const handleChange3 = () => {
    setChecked3((prev) => !prev);
  };
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Collapse in={checked} collapsedSize={168} onClick={handleChange}>
          <Paper sx={{ m: 2 }} elevation={4}>
            <Box sx={{ width: "100%", height: "auto" }}>
              {checked === false ? (
                <img
                  src={TechImg_1}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <img
                  src={TechImg}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "12px",
                  paddingLeft: "12px",
                }}
              >
                <div>
                  {checked === false ? (
                    <img src={Tech1_1} alt="" style={{ width: "20px" }} />
                  ) : (
                    <img src={Tech1} alt="" style={{ width: "20px" }} />
                  )}
                </div>
                <h1
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: "800",
                    fontSize: "1.4rem",
                    color: "rgba(77, 80, 88, 1)",
                    paddingLeft: "8px",
                    paddingBottom: "4px",
                  }}
                >
                  레이저 출력
                </h1>
              </div>
              <p
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  color: "rgba(126, 129, 141, 1)",
                  paddingLeft: "38px",
                  paddingBottom: "12px",
                }}
              >
                Array Lens를 사용한 Fractional 형태의 레이저 <br />
                출력
              </p>
            </Box>
          </Paper>
        </Collapse>
        <Collapse in={checked2} collapsedSize={168} onClick={handleChange2}>
          <Paper sx={{ m: 2, maxWidth: "100%" }} elevation={4}>
            <Box sx={{ width: "100%", height: "auto" }}>
              {checked2 === false ? (
                <img
                  src={TechImg_2}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <img
                  src={TechImg2}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "12px",
                  paddingLeft: "12px",
                }}
              >
                <div>
                  {checked2 === false ? (
                    <img src={Tech2_2} alt="" style={{ width: "20px" }} />
                  ) : (
                    <img src={Tech2} alt="" style={{ width: "20px" }} />
                  )}
                </div>
                <h1
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: "800",
                    fontSize: "1.4rem",
                    color: "rgba(77, 80, 88, 1)",
                    paddingLeft: "8px",
                    paddingBottom: "4px",
                  }}
                >
                  마이크로 홀 생성
                </h1>
              </div>
              <p
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  color: "rgba(126, 129, 141, 1)",
                  paddingLeft: "38px",
                  paddingBottom: "12px",
                }}
              >
                방사되는 레이저 에너지는 생체에 흡수되며
                <br /> 피부 내 물분자의 결합을 파괴하며 나오는 높은
                <br /> 에너지 통해 피부를 증발 시켜 Micro hole 생성 출력
              </p>
              <p
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  fontSize: "1.2rem",
                  color: "rgba(167, 171, 182, 1)",
                  paddingLeft: "38px",
                  paddingBottom: "12px",
                }}
              >
                *1회 레이저 조사 시 약 100개 Micro holes생성
              </p>
            </Box>
          </Paper>
        </Collapse>
        <Collapse in={checked3} collapsedSize={168} onClick={handleChange3}>
          <Paper sx={{ m: 2 }} elevation={4}>
            <Box sx={{ width: "100%", height: "auto" }}>
              {checked3 === false ? (
                <img
                  src={TechImg_3}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <img
                  src={TechImg3}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "12px",
                  paddingLeft: "12px",
                }}
              >
                <div>
                  {checked3 === false ? (
                    <img src={Tech3_3} alt="" style={{ width: "20px" }} />
                  ) : (
                    <img src={Tech3} alt="" style={{ width: "20px" }} />
                  )}
                </div>
                <h1
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: "800",
                    fontSize: "1.4rem",
                    color: "rgba(77, 80, 88, 1)",
                    paddingLeft: "8px",
                    paddingBottom: "4px",
                  }}
                >
                  영양 성분 흡수율 향상
                </h1>
              </div>
              <p
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  color: "rgba(126, 129, 141, 1)",
                  paddingLeft: "38px",
                  paddingBottom: "12px",
                }}
              >
                0.2mm 이하 표피조직에만 최소한 침습 되어 <br />
                기능성 화장품 등의 영양물질 흡수율 향상 시킴
              </p>
              <p
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  fontSize: "1.2rem",
                  color: "rgba(167, 171, 182, 1)",
                  paddingLeft: "38px",
                  paddingBottom: "12px",
                }}
              >
                퓨라셀 레이저는 표피 조직에만 침입하여 부작용을 최소화 할 <br />
                수 있습니다.
              </p>
            </Box>
          </Paper>
        </Collapse>
      </Box>
    </Box>
  );
}

export default CollapseItem;
