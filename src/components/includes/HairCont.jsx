import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
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
import BgImg from "../../assets/img/mobile_bg_hair.png";
import Line from "../../assets/img/pageLine.svg";
import MainImg from "../../assets/img/hair_main.png";
import Move from "../../assets/img/Vector 254.svg";
import { Link } from "react-router-dom";

function HairCont() {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        width: "100%",
        heigth: "100%",
      }}
    >
      <Swiper
        style={{
          overflow: "auto",
        }}
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar]}
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
            header="PURAXEL HAIR"
            img={MainImg}
            miniHeader="두피 전문가를 위한 프락셔널 레이저"
            text1="소형 레이저 기술로"
            text2="에스테틱에 혁신을 가져오다"
            text3="HAIR는 에스테틱 샵에서만 구매 가능한
            전문가용 제품입니다."
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
            <Link to="/핵심기술">
              <div className="techMove">
                <p>
                  프락셔널 레이저 <em>작동 방식 보기</em>
                </p>
                <img src={Move} alt="" />
              </div>
            </Link>
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
            <FxExperimentItem2 />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont" style={{ height: "100vh" }}>
            <div className="contName">
              <span className="contHeader">
                이제는 집에서 혼자 쉽고 편하게!
              </span>
              <p className="contHeader2">
                셀프 홈케어 <em>팁</em>
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
      </Swiper>
    </div>
  );
}

export default HairCont;
