import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";

import Line from "../../assets/img/pageLine.svg";
import MainImg from "../../assets/img/me_main.png";
import BgImg from "../../assets/img/mobile_bg_me.png";

import SpecItem from "../item/SpecItem";
import FxExperimentItem from "../item/FxExperimentItem";
import PriceItem from "../item/PriceItem";
import ContMain from "../layout/ContMain";
import MeModeItem from "../item/MeModeItem";

function MeCont() {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
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
        onSlideChange={(index) => {
          if (index.activeIndex === 0) {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
          if (index.activeIndex === 1) {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
          if (index.activeIndex === 2) {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
          if (index.activeIndex === 3) {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
          console.log(index.activeIndex);
        }}
      >
        <SwiperSlide>
          <ContMain
            header="PURAXEL ME"
            img={MainImg}
            miniHeader="홈 에스테틱 레이저의 시작"
            text1="전문 피부과에서만 사용하던"
            text2="프락셔널 레이저의 문턱을 낮췄습니다."
            text3="하루 10분, 이제 집에서 관리하세요."
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">하나의 기기로</span>
              <p className="contHeader2">
                <em>레이저</em>와 <em>갈바닉 케어</em>를 한번에
              </p>
            </div>
            <MeModeItem />
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
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                퓨라셀과 각 효능에 특화된 앰플 사용후 결과
              </span>
              <p className="contHeader2">
                퓨라셀 <em>임상실험</em>
              </p>
            </div>
            <FxExperimentItem />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">퓨라셀 ME</span>
              <p className="contHeader2">
                제품 <em>구성 및 사양</em>
              </p>
            </div>
            <SpecItem />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">쇼핑몰</span>
              <p className="contHeader2">추천제품</p>
            </div>
            <PriceItem />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MeCont;
