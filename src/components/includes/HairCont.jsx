import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import FxModeItem from "../item/FxModeItem";
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

function HairCont() {
  return (
    <>
      <Swiper
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
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
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <ContMain header="PURAXEL HAIR" img={MainImg} bg={BgImg} />
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">레이저와 초음파 기술을 활용한</span>
              <p className="contHeader2">
                퓨라셀의 <em>다섯가지 기능</em>
              </p>
            </div>
            <FxModeItem color1="#CA937C" color2="#866A63" />
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
          <div className="cont">
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
            >
              <iframe
                title="How to use puraxel"
                src="https://www.youtube.com/embed/YhWQp5RS_aU"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  left: "0",
                }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
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
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HairCont;
