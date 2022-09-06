import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import FxModeItem from "../item/HairModeItem";
import FxExperimentItem2 from "../item/FxExperimentItem2";
import ContMain from "../layout/ContMain";
import SpecItem2 from "../item/SpecItem2";

import Active01 from "../../assets/img/hair_01_active.png";
import Active02 from "../../assets/img/hair_02_active.png";
import Active03 from "../../assets/img/hair_03_active.png";
import Active04 from "../../assets/img/hair_04_active.png";
// import BgImg from "../../assets/img/mobile_bg_hair.png";
import Line from "../../assets/img/pageLine.svg";
import MainImg from "../../assets/img/hair_main.png";
import Pura1 from "../../assets/img/certifi_pura_01.png";
import Pura2 from "../../assets/img/certifi_pura_02.png";
import Pura3 from "../../assets/img/certifi_pura_03.png";
import lmdt1 from "../../assets/img/certifi_lmdt_01.png";
import lmdt2 from "../../assets/img/certifi_lmdt_02.png";
import lmdt3 from "../../assets/img/certifi_lmdt_03.png";
import lmdt4 from "../../assets/img/certifi_lmdt_04.png";
import lmdt5 from "../../assets/img/certifi_lmdt_05.png";

function HairCont() {
  return (
    <div
      style={{
        // backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        background: "linear-gradient(#FFFFFFCC 40%, #FFD1AFCC)",
      }}
    >
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              `<img src=${Line}
              }}>` +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          },
        }}
      >
        <SwiperSlide>
          <ContMain
            header="PURAXEL Hair"
            img={MainImg}
            miniHeader="레이저 기술을 이용한 두피 관리, 자신있는 삶의 회복"
            text1="프락셔널 레이저는 기능성 앰플의 두피"
            text2="흡수를 도와 탈모관리에 효과적입니다."
            text4="※ 이 제품은 “두피관리기기” 입니다"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">PURAXEL Hair는</span>
              <p className="contHeader2">
                <em>4가지 기능</em>을 제공합니다.
              </p>
              <p className="contHeader3">
                레이저 조사 후, 초음파, 갈바닉, 쿨링 등의 모드를 함께 사용하시면
                <br />
                효과를 높일 수 있습니다.
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
                PURAXEL HAIR <em>임상실험</em>
              </p>
            </div>
            <FxExperimentItem2 />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont" style={{ height: "100vh" }}>
            <div className="contName">
              <span className="contHeader">
                PURAXEL Hair와 함께 하는 탈모 클리닉
              </span>
              <p className="contHeader4">
                이제 병원에서만 가능하던 프락셔널 레이저 시술을
                <br /> 에스테틱샵에서도 제공하실 수 있습니다.
              </p>
              <p className="contHeader2">
                PURAXEL HAIR가
                <br />
                <em>자신 있는 일상을</em>
                <br />
                찾아드립니다.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                height: "0",
                paddingBottom: "56.25%",
                marginTop: "16px",
              }}
            ></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">HAIR</span>
              <p className="contHeader2">
                제품 <em>구성 및 사양</em>
              </p>
            </div>
            <SpecItem2
              img1={Active01}
              img2={Active02}
              img3={Active03}
              img4={Active04}
              Bs="0px 0px 20px #A4693326"
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

export default HairCont;
