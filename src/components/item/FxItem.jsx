import React, { useState } from "react";
import Laser from "../../assets/img/functionIllust_laser.png";
import Laser2 from "../../assets/img/functionIllust_laser2.png";
import Option from "../../assets/img/functionIllust_option.png";
import Option2 from "../../assets/img/functionIllust_option2.png";
import Ultrasonic from "../../assets/img/functionIllust_ultrasonic.png";
import Ultrasonic2 from "../../assets/img/functionIllust_ultrasonic2.png";
import Galvanic from "../../assets/img/functionIllust_galvanic.png";
import Galvanic2 from "../../assets/img/functionIllust_galvanic2.png";
import Cooling from "../../assets/img/functionIllust_cooling.png";
import Cooling2 from "../../assets/img/functionIllust_cooling2.png";
import number1 from "../../assets/img/number1.png";
import number2 from "../../assets/img/number2.png";
import number3 from "../../assets/img/number3.png";
import number4 from "../../assets/img/number4.png";
import Alert from "../../assets/img/alert_line.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const LaserText = () => {
  return (
    <p>
      한번의 레이저로 0.2mm 이하의 얕은 피부층에 작은 홀을 생성하여
      <em>크림과 앰플의 피부흡수율을 높여줍니다.</em>
    </p>
  );
};

const GarbanicText = () => {
  return (
    <p>
      강한 파장의 <em>음파에서 발생하는 진동</em>초으로 피부를 이완시켜{" "}
      <em>자극없이 노폐물을 제거</em>해줍니다. 마사지로 기능성 솔루션의 흡수력을
      높여줍니다.
    </p>
  );
};

function FxItem() {
  const [modeSelector, setModeSelector] = useState("Laser");

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };

  const modeCondition = modeSelector === "Laser";

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <>
      <div className="ModeExplain">
        <div className="modes">
          <div className="modeBox">
            <div
              className="mode1"
              onClick={selectorLaser}
              style={{
                background: modeCondition
                  ? "linear-gradient(#CA7C98, #866370)"
                  : "#f2f3f6",
                color: modeCondition ? "#f8f9fa" : "#a7abb6",
                boxShadow: modeCondition ? "0 8px 8px #00000020" : "none",
              }}
            >
              <p>
                PURAXEL LASER <br />
                <em>레이저 모드</em>
              </p>
            </div>

            <div
              className="mode2"
              onClick={selectorGalvanic}
              style={{
                background: modeCondition
                  ? "#f2f3f6"
                  : "linear-gradient(#CA7C98, #866370)",
                borderColor: modeCondition ? "#f2f3f6" : "#4d5058",
                color: modeCondition ? "#a7abb6" : "#f8f9fa",
                boxShadow: modeCondition ? "none" : "0 8px 8px #00000020",
              }}
            >
              <p>
                ULTRASONIC <br />
                <em>초음파 모드</em>
              </p>
            </div>
          </div>
          <div className="modeEx">
            {modeCondition ? <LaserText /> : <GarbanicText />}
          </div>
        </div>
        <div className="laserConts">
          {modeCondition ? (
            <>
              <div className="laserCont" onClick={handleOpen}>
                <p>
                  레이저
                  <br />
                  <em>피부속 채널 생성, 모공 관리</em>
                </p>
                <img src={Laser} alt="" />
              </div>
              <div className="laserCont" onClick={handleOpen2}>
                <p>
                  LED
                  <br />
                  <em>보습 탄력 및 트러블 진정</em>
                </p>
                <img src={Option} alt="" />
              </div>
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
            </>
          ) : (
            <>
              <div className="laserCont" onClick={handleOpen}>
                <p>
                  초음파
                  <br />
                  <em>영양흡수, 공급</em>
                </p>
                <img src={Ultrasonic} alt="" />
              </div>
              <div className="laserCont" onClick={handleOpen3}>
                <p>
                  갈바닉
                  <br />
                  <em>딥클렌징, 피부속 영양분 침투 촉진</em>
                </p>
                <img src={Galvanic} alt="" />
              </div>
              <div className="laserCont" onClick={handleOpen2}>
                <p>
                  쿨링 <br />
                  <em>피부진정, 모공 축소</em>
                </p>
                <img src={Cooling} alt="" />
              </div>
            </>
          )}
          {modeCondition ? (
            <Modal
              open={open}
              onClick={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title2"
                  variant="h6"
                  component="h2"
                  sx={{ margin: "12px" }}
                >
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#55576f",
                    }}
                  >
                    레이저
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      diplay: "block",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#a292a3",
                    }}
                  >
                    피부 속 채널생성, 모공관리
                  </span>
                </Typography>
                <Typography
                  id="modal-modal-description2"
                  sx={{
                    fontFamily: "Pretendard",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    marginBottom: "24px",
                    margin: "12px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    피부 재생용 레이저
                  </span>
                  를 피부에 조사하여, 5~200µm의 표피층에 1회 약 100개의
                  Multi-Micro pore을 만들어
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    화장품 등의 약물 흡수율을 증가
                  </span>
                  시킵니다.
                </Typography>
                <img
                  src={Laser2}
                  alt=""
                  style={{
                    margin: "2px",
                    width: "99%",
                  }}
                />
              </Box>
            </Modal>
          ) : (
            <Modal
              open={open}
              onClick={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title2"
                  variant="h6"
                  component="h2"
                  sx={{ margin: "12px" }}
                >
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#55576f",
                    }}
                  >
                    초음파
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      diplay: "block",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#a292a3",
                    }}
                  >
                    영양흡수, 공급
                  </span>
                </Typography>
                <Typography
                  id="modal-modal-description2"
                  sx={{
                    fontFamily: "Pretendard",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    marginBottom: "24px",
                    margin: "12px",
                  }}
                >
                  기능성 솔루션을 바른 후 마사지하면
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    높은 흡수력
                  </span>
                  으로 더
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    탄력있고 촘촘한 피부 관리
                  </span>
                  도와줍니다.
                </Typography>
                <img
                  src={Ultrasonic2}
                  alt=""
                  style={{
                    margin: "2px",
                    width: "99%",
                  }}
                />
              </Box>
            </Modal>
          )}

          {modeCondition ? (
            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title2"
              aria-describedby="modal-modal-description2"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title2"
                  variant="h6"
                  component="h2"
                  sx={{ margin: "12px" }}
                >
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#55576f",
                    }}
                  >
                    LED
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      diplay: "block",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#a292a3",
                    }}
                  >
                    보습 탄력 및 트러블 진정
                  </span>
                </Typography>
                <Typography
                  id="modal-modal-description2"
                  sx={{
                    fontFamily: "Pretendard",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    marginBottom: "24px",
                    margin: "12px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    3가지 파장의 빛
                  </span>
                  으로 피부 깊숙한 곳까지 건강하고 탄력 있게 관리해줍니다.
                </Typography>
                <img
                  src={Option2}
                  alt=""
                  style={{
                    margin: "2px",
                    width: "99%",
                  }}
                />
              </Box>
            </Modal>
          ) : (
            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title2"
              aria-describedby="modal-modal-description2"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title2"
                  variant="h6"
                  component="h2"
                  sx={{ margin: "12px" }}
                >
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#55576f",
                    }}
                  >
                    쿨링
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      diplay: "block",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#a292a3",
                    }}
                  >
                    피부진정, 모공축소
                  </span>
                </Typography>
                <Typography
                  id="modal-modal-description2"
                  sx={{
                    fontFamily: "Pretendard",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    marginBottom: "24px",
                    margin: "12px",
                  }}
                >
                  차가운 쿨링효과로 피부를 진정시키고 모공 축소를 도와줍니다.
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      marginTop: "8px",
                      color: "#7E818D",
                    }}
                  >
                    레이저, 초음파, LED 사용 후 쿨링모드 사용시 피부를 차갑게
                    진정 시켜, 확장된 모공 축소에 도움을 줍니다.
                  </span>
                </Typography>
                <img
                  src={Cooling2}
                  alt=""
                  style={{
                    margin: "2px",
                    width: "99%",
                  }}
                />
              </Box>
            </Modal>
          )}
          {modeCondition ? (
            <Modal
              open={open3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title3"
              aria-describedby="modal-modal-description3"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title3"
                  variant="h6"
                  component="h2"
                  sx={{ margin: "12px" }}
                >
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#55576f",
                    }}
                  >
                    안전기능
                  </span>
                  <br />
                </Typography>
                <Typography
                  id="modal-modal-description3"
                  sx={{
                    fontFamily: "Pretendard",
                    margin: "12px",
                  }}
                >
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
                        응급 시 제품을 놓을 경우, 센서에 의해 즉시 동작이
                        멈춥니다.
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
                          src={number1}
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
                          src={number1}
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
                          src={number1}
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
                      본 장비는 눈에 보이지 않는 레이저를 사용하고 있어 눈에
                      직접 또는 반사되는 레이저 조사 시 위험합니다. 반드시
                      보안경 착용 후 사용하며 절대 직·간접적으로 보지 말아야
                      합니다.
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>
          ) : (
            <Modal
              open={open3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title3"
              aria-describedby="modal-modal-description3"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title2"
                  variant="h6"
                  component="h2"
                  sx={{ margin: "12px" }}
                >
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#55576f",
                    }}
                  >
                    갈바닉
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "Pretendard",
                      diplay: "block",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#a292a3",
                    }}
                  >
                    딥 클렌징, 피부속 영양분 침투 촉진
                  </span>
                </Typography>
                <Typography
                  id="modal-modal-description2"
                  sx={{
                    fontFamily: "Pretendard",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    marginBottom: "24px",
                    margin: "12px",
                  }}
                >
                  같은 극끼리 밀어내는 갈바닉 기술을 활용하여 <br />
                  이온화된 화장품의 흡수율을 높입니다.
                  <br /> 레이저 모드와 함께 사용하면 피부 흡수율을 <br />
                  극대화할 수 있습니다.
                  <span
                    style={{
                      display: "block",
                      marginTop: "8px",
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#7E818D",
                    }}
                  >
                    갈바닉+이온(+ION)으로 노폐물을 배출
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: "8px",
                      marginBottom: "8px",
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#7E818D",
                    }}
                  >
                    기능성 솔루션과 함께
                    <br /> 음이온(-ION)으로 영양분 침투에 도움
                  </span>
                  <img
                    src={Galvanic2}
                    alt=""
                    style={{
                      margin: "2px",
                      width: "99%",
                    }}
                  />
                </Typography>
              </Box>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default FxItem;
