import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import Hair1 from "../../assets/img/hair1.png";
import Hair2 from "../../assets/img/functionIllust_hair1.png";
import Hair3 from "../../assets/img/functionIllust_hair2.png";
import Chart from "../../assets/img/chart1.png";
import Chart2 from "../../assets/img/chart2.png";
import Chart3 from "../../assets/img/chart3.png";
import Chart4 from "../../assets/img/chart4.png";

import Close from "../../assets/img/gnb_close.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30rem",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
};

function FxExItem() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [modeSelector, setModeSelector] = useState("Laser");

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };

  const modeCondition = modeSelector === "Laser";
  return (
    <div className="ModeExplain">
      <div className="exInfo">
        <p>
          시험기간 <span>2020년 8월 21일~ 5월 30일</span>
        </p>
        <p>
          시험기관 <span> **성형외과의원</span>
        </p>
        <p>
          피시험자 <span>30~60세 성인 남성</span>
        </p>
        <p>
          부위 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>피시험자의 정수리와 M자 </span>
        </p>
      </div>
      <div className="laserConts">
        <div className="laserCont" onClick={handleOpen}>
          <p>
            정수리/M자
            <br /> 탈모 개선
          </p>
          <img
            src={Hair1}
            alt=""
            style={{
              width: "50%",
              height: "100%",
            }}
          />
        </div>

        <div className="graphConts" onClick={handleOpen2}>
          <div className="graphCont">
            <h1>모량 테스트</h1>
            <div className="hairCont">
              <p className="graphPart">원형 탈모 부위</p>
              <p className="graphFigure">31.0% 증가</p>
            </div>
            <div className="hairCont">
              <p className="graphPart">M자 탈모 부위</p>
              <p className="graphFigure">11.5% 증가</p>
            </div>

            <img
              src={Chart3}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </div>
          <div className="graphCont">
            <h1>모발 테스트</h1>
            <div className="hairCont">
              <p className="graphPart">원형 탈모 부위</p>
              <p className="graphFigure">28.6% 증가</p>
            </div>
            <div className="hairCont">
              <p className="graphPart">M자 탈모 부위</p>
              <p className="graphFigure">51.5% 증가</p>
            </div>

            <img
              src={Chart4}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>

        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              id="modal-modal-title2"
              variant="h6"
              component="h2"
              style={{
                marginLeft: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    fontSize: "2rem",
                    color: "#000000",
                    padding: "12px",
                  }}
                >
                  정수리/M자 탈모 개선
                </p>
              </div>
              <IconButton onClick={handleClose}>
                <img
                  src={Close}
                  style={{
                    width: "3.2rem",
                  }}
                  alt=""
                />
              </IconButton>
            </div>
            <div
              className="specs"
              style={{
                margin: "0 16px",
              }}
            >
              <div
                className="specInfoBtn"
                style={{
                  marginLeft: 0,
                }}
              >
                <div
                  onClick={selectorLaser}
                  style={{
                    backgroundColor: modeCondition ? "#808591" : "#F2F3F6",
                    color: modeCondition ? "#FFFFFF" : "#000000",
                    boxShadow: modeCondition ? "0 4px 8px #00000026" : "none",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                  }}
                >
                  정수리 탈모
                </div>
                <div
                  onClick={selectorGalvanic}
                  style={{
                    backgroundColor: modeCondition ? "#F2F3F6" : "#808591",
                    color: modeCondition ? "#000000" : "#FFFFFF",
                    boxShadow: modeCondition ? "none" : "0 4px 8px #00000026",
                    fontSize: "1.6rem",
                    marginLeft: "8px",
                    fontWeight: 600,
                  }}
                >
                  M자 탈모
                </div>
              </div>
            </div>
            <Typography
              id="modal-modal-description2"
              sx={{
                fontFamily: "Pretendard",
                fontSize: "1.4rem",
                fontWeight: 300,
                marginBottom: "24px",
                margin: "12px 16px 22px 16px ",
                color: "#4D5058",
              }}
            >
              퓨라셀 + 미스터케어 발모개선 앰플
              <br /> 3개월 적용 후 사진
            </Typography>
            {modeCondition ? (
              <img
                src={Hair2}
                alt=""
                style={{
                  padding: "4px",
                  width: "100%",
                }}
              />
            ) : (
              <img
                src={Hair3}
                alt=""
                style={{
                  padding: "4px",
                  width: "100%",
                }}
              />
            )}
          </Box>
        </Modal>

        <Modal
          open={open2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              id="modal-modal-title2"
              variant="h6"
              component="h2"
              style={{
                marginLeft: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#000000",
                  padding: "12px",
                }}
              >
                모량/모발 테스트 결과
              </p>
              <IconButton onClick={handleClose2}>
                <img
                  src={Close}
                  style={{
                    width: "3.2rem",
                  }}
                  alt=""
                />
              </IconButton>
            </div>
            <div
              className="specs"
              style={{
                margin: "0 16px",
              }}
            >
              <div
                className="specInfoBtn"
                style={{
                  marginLeft: 0,
                }}
              >
                <div
                  onClick={selectorLaser}
                  style={{
                    backgroundColor: modeCondition ? "#808591" : "#F2F3F6",
                    color: modeCondition ? "#FFFFFF" : "#B6BCC7",
                    boxShadow: modeCondition ? "0 4px 8px #00000026" : "none",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                  }}
                >
                  모량 테스트
                </div>
                <div
                  onClick={selectorGalvanic}
                  style={{
                    backgroundColor: modeCondition ? "#F2F3F6" : "#808591",
                    color: modeCondition ? "#B6BCC7" : "#FFFFFF",
                    boxShadow: modeCondition ? "none" : "0 4px 8px #00000026",
                    marginLeft: "8px",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                  }}
                >
                  모발 테스트
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "16px 0 16px 16px",
              }}
            >
              {modeCondition ? (
                <div
                  style={{
                    display: "flex",
                    marginTop: "1.6rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 600,
                        fontSize: "1.4rem",
                        color: "#808591",
                      }}
                    >
                      원형 탈모 부위
                    </p>
                    <span
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 700,
                        fontSize: "2.4rem",
                        color: "#808591",
                      }}
                    >
                      31.0% 증가
                    </span>
                  </div>
                  <div
                    style={{
                      marginLeft: "2.4rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 600,
                        fontSize: "1.4rem",
                        color: "#808591",
                      }}
                    >
                      M자 탈모 부위
                    </p>
                    <span
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 700,
                        fontSize: "2.4rem",
                        color: "#808591",
                      }}
                    >
                      11.5% 증가
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    marginTop: "1.6rem",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 600,
                        fontSize: "1.4rem",
                        color: "#808591",
                      }}
                    >
                      원형 탈모 부위
                    </p>
                    <span
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 700,
                        fontSize: "2.4rem",
                        color: "#808591",
                      }}
                    >
                      28.6% 증가
                    </span>
                  </div>
                  <div
                    style={{
                      marginLeft: "2.4rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 600,
                        fontSize: "1.4rem",
                        color: "#808591",
                      }}
                    >
                      M자 탈모 부위
                    </p>
                    <span
                      style={{
                        fontFamily: "Pretendard",
                        fontWeight: 700,
                        fontSize: "2.4rem",
                        color: "#808591",
                      }}
                    >
                      51.5% 증가
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div id="modal-modal-description2">
              {modeCondition ? (
                <img
                  src={Chart}
                  alt=""
                  style={{
                    margin: "16px",
                    width: "89%",
                  }}
                />
              ) : (
                <img
                  src={Chart2}
                  alt=""
                  style={{
                    margin: "16px",
                    width: "89%",
                  }}
                />
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default FxExItem;
