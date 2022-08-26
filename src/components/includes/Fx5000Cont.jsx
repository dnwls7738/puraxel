import React from "react";
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
import BgImg from "../../assets/img/mobile_bg_fx-5000.png";
import Line from "../../assets/img/pageLine.svg";

function Fx5000Cont() {
  const params = {
    on: {
      slideChange: (index) => {
        console.log(index.snapIndex);
      },
    },
  };
  console.log(params);
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        heigth: "100%",
      }}
    >
      <Swiper
        style={{
          overflow: "auto",
        }}
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
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <ContMain
            header="PURAXEL FX-5000"
            img={MainImg}
            miniHeader="피부 전문가를 위한 프락셔널 레이저"
            text1="소형 레이저 기술로"
            text2="에스테틱에 혁신을 가져오다"
            text3="FX-5000은 에스테틱 샵에서만 구매 가능한
            전문가용 제품입니다."
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
                이제 병원에서만 가능하던 프락셔널 레이저 시술을
                <br /> 에스테틱샵에서도 제공하실 수 있습니다.
              </p>
              <p className="contHeader2">
                바로 일상생활이 가능한
                <br />
                <em>소형 프락셔널 레이저,</em>
                <br />
                직접 경험해보세요.
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
      </Swiper>
    </div>
  );
}

export default Fx5000Cont;
