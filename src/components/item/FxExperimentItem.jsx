import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import Skin1 from "../../assets/img/skin1.png";
import Skin2 from "../../assets/img/skin2.png";
import Skin3 from "../../assets/img/skin3.png";
import Skin4 from "../../assets/img/skin4.png";
import Skin5 from "../../assets/img/skin5.png";
import Skin6 from "../../assets/img/skin6.png";
import Skin7 from "../../assets/img/skin7.png";
import Skin8 from "../../assets/img/skin8.png";
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
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <div className="ModeExplain">
      <div className="exInfo">
        <p>
          시험기간 <span>2020 . 5 . 21 ~ 7.13</span>
        </p>
        <p>
          시험기관 <span>한국피부과학연구원</span>
        </p>
        <p>
          피시험자 <span>여성 21명</span>
        </p>
        <p>
          부위 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>안면부위와 전완부위 (2주 사용후 2배 증가)</span>
        </p>
      </div>
      <div className="laserConts">
        <div className="laserCont" onClick={handleOpen}>
          <p>
            피부보습력 <br />
            3배 증가
          </p>
          <img
            src={Skin1}
            alt=""
            style={{
              width: "60%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont" onClick={handleOpen2}>
          <p>
            피부 치밀도
            <br /> 30% 증가
          </p>
          <img
            src={Skin2}
            alt=""
            style={{
              width: "60%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont" onClick={handleOpen3}>
          <p>
            피부톤(맑기)
            <br /> 2배 증가
          </p>
          <img
            src={Skin3}
            alt=""
            style={{
              width: "60%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont">
          <p>
            색소 침착
            <br /> 개선
          </p>
          <img
            src={Skin4}
            alt=""
            style={{
              width: "60%",
              height: "100%",
            }}
          />
        </div>
        <div className="laserCont">
          <p>
            안티에이징
            <br /> 효과
          </p>
          <img
            src={Skin5}
            alt=""
            style={{
              width: "60%",
              height: "100%",
            }}
          />
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
                margin: "4px 4px 0 4px",
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
                    padding: "8px",
                  }}
                >
                  피부 보습력 3배 증가
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
            <Typography
              id="modal-modal-description2"
              sx={{
                fontFamily: "Pretendard",
                fontSize: "1.4rem",
                fontWeight: 300,
                margin: "0 20px 24px 12px",
              }}
            >
              피부 수분 변화에 대한 통계분석 결과, 화장품+퓨라셀 1회 사용 직후
              300%이상 증가
            </Typography>
            <img
              src={Skin6}
              alt=""
              style={{
                padding: "4px",
                width: "100%",
              }}
            />
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
                margin: "4px 4px 0 4px",
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
                    padding: "8px",
                  }}
                >
                  피부 치밀도 30% 증가
                </p>
              </div>
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
            <Typography
              id="modal-modal-description2"
              sx={{
                fontFamily: "Pretendard",
                fontSize: "1.4rem",
                fontWeight: 300,
                margin: "0 20px 24px 12px",
              }}
            >
              피부치밀도를 나타내는 Density 값이 퓨라셀 <br />
              사용전과 비교하여 4주 사용후 30% 증가
            </Typography>
            <img
              src={Skin7}
              alt=""
              style={{
                padding: "4px",
                width: "100%",
              }}
            />
          </Box>
        </Modal>
        <Modal
          open={open3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              id="modal-modal-title2"
              variant="h6"
              component="h2"
              style={{
                margin: "4px 4px 0 4px",
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
                    padding: "8px ",
                  }}
                >
                  피부톤(맑기) 2배 증가
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
            <Typography
              id="modal-modal-description2"
              sx={{
                fontFamily: "Pretendard",
                fontSize: "1.4rem",
                fontWeight: 300,
                margin: "0 20px 24px 12px",
              }}
            >
              피부톤을 나타내는 L*value가 퓨라셀 사용전과 비교하여 2주 사용후
              2배 증가
            </Typography>
            <img
              src={Skin8}
              alt=""
              style={{
                padding: "4px",
                width: "100%",
              }}
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default FxExItem;
