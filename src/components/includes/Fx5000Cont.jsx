import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";

import FxModeItem from "../item/FxModeItem";
import FxExperimentItem from "../item/FxExperimentItem";
import ContMain from "../layout/ContMain";
import SpecItem2 from "../item/SpecItem2";

import Active01 from "../../assets/img/hair_01_active.png";
import Active02 from "../../assets/img/hair_02_active.png";
import Active03 from "../../assets/img/hair_03_active.png";
import Active04 from "../../assets/img/hair_04_active.png";
import MainImg from "../../assets/img/fx-5000_main.png";
// import BgImg from "../../assets/img/mobile_bg_fx-5000.png";
import Line from "../../assets/img/pageLine.svg";
import Pura1 from "../../assets/img/certifi_pura_01.png";
import Pura2 from "../../assets/img/certifi_pura_02.png";
import Pura3 from "../../assets/img/certifi_pura_03.png";
import lmdt1 from "../../assets/img/certifi_lmdt_01.png";
import lmdt2 from "../../assets/img/certifi_lmdt_02.png";
import lmdt3 from "../../assets/img/certifi_lmdt_03.png";
import lmdt4 from "../../assets/img/certifi_lmdt_04.png";
import lmdt5 from "../../assets/img/certifi_lmdt_05.png";
import { Box, Modal } from "@mui/material";

function Fx5000Cont() {
  const style = {
    width: "80%",
    height: "50%",
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "4px",
    boxShadow: 24,
    p: 1,
  };
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  return (
    <div
      style={{
        // backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        background: "linear-gradient(#FFFFFFCC 40%, #FFD6F1CC)",
      }}
    >
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          type: "custom",
          renderCustom: (swiper, current, total) => {
            return `<span style="font-size: 1.2rem;color: #55576f;font-weight:600;letter-spacing: -0.01em;">0${current}</span> 
              <img src=${Line} /> 
             <span style="font-size: 1.2rem;color:#B6BCC7;font-weight:600;letter-spacing: -0.01em;">0${total}</span>`;
          },
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <ContMain
            header="PURAXEL FX-5000"
            img={MainImg}
            miniHeader="피부 전문가를 위한 프락셔널 레이저"
            text1="소형 레이저 기술로"
            text2="에스테틱에 혁신을 가져오다"
            text3="FX-5000은 에스테틱 샵 전문가용 제품입니다. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">FX-5000은 전문가용 기기로서</span>
              <p className="contHeader2">
                <em>다섯가지 기능</em>을 제공합니다.
              </p>
            </div>
            <FxModeItem />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                퓨라셀과 각 효능에 특화된 앰플 사용후 결과
              </span>
              <p className="contHeader2">
                FX-5000 <em>임상실험</em>
              </p>
            </div>
            <FxExperimentItem />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont" style={{ height: "100vh" }}>
            <div className="contName">
              <span className="contHeader">영상으로 자세히 보기</span>
              <p className="contHeader4">
                합리적인 비용의 퓨라셀로 에스테틱의 프리미엄 가치를 높여보세요.
              </p>
              <p className="contHeader2">
                바로 일상생활이 가능한
                <br />
                <em>소형 프락셔널 레이저,</em>
                <br />
                직접 경험해보세요.
              </p>
            </div>
            <div className="video-container" onClick={handleOpen3}>
              <iframe
                src="https://www.youtube.com/embed/X6oDTHJnxq4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <Modal
              onClick={handleClose3}
              open={open3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="video-container" style={{ height: "100%" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/X6oDTHJnxq4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Box>
            </Modal>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">FX-5000</span>
              <p className="contHeader2">
                제품 <em>구성 및 사양</em>
              </p>
            </div>
            <SpecItem2
              img1={Active01}
              img2={Active02}
              img3={Active03}
              img4={Active04}
              Bs="0px 0px 20px #96547426"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                인증 받은 레이저 기기로 마음까지 편한 관리!
              </span>
              <p className="contHeader2">퓨라셀 인증</p>
            </div>
            <div className="puraCertfied">
              <p className="puraCertText">PURAXEL Certifications</p>
              <p className="puraCertText2">제품 인증</p>
            </div>
            <div className="puraCertImgs">
              <div className="puraCertImg">
                <img src={Pura1} alt="" />
              </div>
              <div className="puraCertImg2">
                <img src={Pura2} alt="" />
              </div>
            </div>
            <div className="puraCertImgs">
              <div className="puraCertImg3">
                <img src={Pura3} alt="" />
                <p>IEC60825인증(Class 1)</p>
              </div>
              <div className="puraCertImg3"></div>
            </div>
            <div className="lmdtCertfied">
              <p className="lmdtCertText">LaMeditech Certifications</p>
              <p className="lmdtCertText2">기업 인증</p>
            </div>
            <div className="lmdtCertImgs">
              <div className="lmdtCertImg">
                <img src={lmdt1} alt="" />
              </div>
              <div className="lmdtCertImg2">
                <img src={lmdt2} alt="" />
              </div>
            </div>
            <div className="lmdtCertImgs">
              <div className="lmdtCertImg">
                <img src={lmdt3} alt="" />
              </div>
              <div className="lmdtCertImg2">
                <img src={lmdt4} alt="" />
              </div>
            </div>
            <div className="lmdtCertImgs">
              <div className="lmdtCertImg">
                <img src={lmdt5} alt="" />
              </div>
              <div className="lmdtCertImg2"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Fx5000Cont;
