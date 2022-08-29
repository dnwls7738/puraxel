import React, { useState } from "react";

import number1 from "../../assets/img/number1.png";
import number2 from "../../assets/img/number2.png";
import number3 from "../../assets/img/number3.png";
import number4 from "../../assets/img/number4.png";

import hair from "../../assets/img/functionIllust_laserH.png";
import Move from "../../assets/img/Vector 254.svg";
import Alert from "../../assets/img/alert_line.png";
import Close from "../../assets/img/gnb_close.svg";

import { IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30rem",
  bgcolor: "#fff",
  borderRadius: "12px",
  boxShadow: 24,
};

function HairItem() {
  const [open3, setOpen3] = useState(false);

  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
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
                fontWeight: "800",
              }}
            >
              레이저 모드
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
              #두피 속 채널 생성
              <br /> #모공 관리
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
              color: "#4D5058",
              fontWeight: "600",
              marginTop: "12px",
              lineHeight: "150%",
            }}
          >
            두피 두께에 맞는 단계 설정으로 원하는 부위에 <br /> 레이저를
            조사하여 두피 속 마이크로 채널을 <br />
            생성합니다.
          </p>
        </div>
      </div>
      <div className="laserConts">
        <div className="safes" onClick={handleOpen3}>
          <h1>안전기능</h1>
          <div className="safe">
            <div className="safe1">
              <div className="safe1_1">
                <img src={number1} alt="" />
                긴급 멈춤
              </div>
              <div className="safe1_2">
                <img src={number2} alt="" />
                접속 센서
              </div>
            </div>
            <div className="safe1">
              <div className="safe1_1">
                <img src={number3} alt="" />
                그립 센서
              </div>
              <div className="safe1_2">
                <img src={number4} alt="" />
                조사 스위치
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="techMove">
        <Link to="/핵심기술">
          <p>
            프락셔널 레이저 <em>작동 방식 보기 </em>
          </p>
          <img src={Move} alt="" />
        </Link>
      </div>

      <Modal
        open={open3}
        aria-labelledby="modal-modal-title3"
        aria-describedby="modal-modal-description3"
      >
        <Box sx={style}>
          <div
            id="modal-modal-title2"
            variant="h6"
            component="h2"
            style={{
              marginLeft: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "#55576f",
                }}
              >
                안전기능
              </p>
            </div>
            <IconButton onClick={handleClose3}>
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
            id="modal-modal-description3"
            style={{
              fontFamily: "Pretendard",
              margin: "12px",
            }}
          >
            <div>
              <ul>
                <li>
                  <div
                    style={{
                      padding: "8px 12px",
                      width: "100%",
                      display: "flex",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#55576F",
                      alignItems: "center",
                      background: "#F8F9FA",
                    }}
                  >
                    <img
                      src={number1}
                      alt=""
                      style={{
                        width: "1.6rem",
                        height: "auto",
                        marginRight: "8px",
                      }}
                    />
                    <div>긴급 멈춤</div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "#4D5058",
                      margin: "8px 0 20px 35px",
                    }}
                  >
                    응급 시 제품을 놓을 경우, 센서에 의해 즉시 동작이 멈춥니다.
                  </div>
                </li>
                <li>
                  <div
                    style={{
                      padding: "8px 12px",
                      width: "100%",
                      display: "flex",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#55576F",
                      alignItems: "center",
                      background: "#F8F9FA",
                    }}
                  >
                    <img
                      src={number2}
                      alt=""
                      style={{
                        width: "1.6rem",
                        height: "auto",
                        marginRight: "8px",
                      }}
                    />
                    <div>접속 센서</div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "#4D5058",
                      margin: "8px 0 20px 35px",
                    }}
                  >
                    접촉 센서에 의해 레이저 헤드가 피부
                    <br />에 닿아야만 작동합니다.
                  </div>
                </li>
                <li>
                  <div
                    style={{
                      padding: "8px 12px",
                      width: "100%",
                      display: "flex",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#55576F",
                      alignItems: "center",
                      background: "#F8F9FA",
                    }}
                  >
                    <img
                      src={number3}
                      alt=""
                      style={{
                        width: "1.6rem",
                        height: "auto",
                        marginRight: "8px",
                      }}
                    />
                    <div>그립 센서</div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "#4D5058",
                      margin: "8px 0 20px 35px",
                    }}
                  >
                    적외선 센서에 의해 손잡이 파지 시에만
                    <br /> 작동합니다.
                  </div>
                </li>
                <li>
                  <div
                    style={{
                      padding: "8px 12px",
                      width: "100%",
                      display: "flex",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#55576F",
                      alignItems: "center",
                      background: "#F8F9FA",
                    }}
                  >
                    <img
                      src={number4}
                      alt=""
                      style={{
                        width: "1.6rem",
                        height: "auto",
                        marginRight: "8px",
                      }}
                    />
                    <div>조사 스위치</div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "#4D5058",
                      margin: "8px 0 20px 34px",
                    }}
                  >
                    조사 버튼을 누를 때만 레이저가 조사됩니다.
                  </div>
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#F8F9FA",
                padding: "12px",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Pretendard",
                  fontSize: "1.2rem",
                }}
              >
                <img
                  src={Alert}
                  alt=""
                  style={{
                    width: "1.6rem",
                    marginRight: "2px",
                  }}
                />
                주의
              </div>
              <div
                style={{
                  fontFamily: "Pretendard",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "#7E818D",
                  marginTop: "8px",
                }}
              >
                본 장비는 눈에 보이지 않는 레이저를 사용하고 있어 눈에 직접 또는
                반사되는 레이저 조사 시 위험합니다. 반드시 보안경 착용 후
                사용하며 절대 직·간접적으로 보지 말아야 합니다.
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default HairItem;
