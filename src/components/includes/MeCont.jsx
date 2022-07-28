import React, { useEffect, useRef } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import HowItem from "../item/HowItem";
import MeModeItem from "../item/MeModeItem";
import PriceItem from "../item/PriceItem";
import Oval from "../../assets/img/mobile_oval_me.svg";

function MeCont() {
  const boxRef = useRef();

  return (
    <>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              "-" +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          },
        }}
        onSlideChange={(index) => {
          if (index.activeIndex === 0) {
            gsap.to(boxRef.current, {
              x: "0px",
              y: "0px",
              duration: 1.5,
            });
          }
          if (index.activeIndex === 1) {
            gsap.to(boxRef.current, {
              x: "330px",
              y: "170px",
              duration: 1.5,
            });
          }
          if (index.activeIndex === 2) {
            gsap.to(boxRef.current, {
              x: "350px",
              y: "0px",
              duration: 1.5,
            });
          }
          if (index.activeIndex === 3) {
            gsap.to(boxRef.current, {
              x: "400px",
              y: "200px",
              duration: 1.5,
            });
          }
          console.log(index.activeIndex);
        }}
        scrollbar={{ draggable: true }}
      >
        <img src={Oval} alt="" className="ovalImg" ref={boxRef} />
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                <em>홈 에스테틱</em> 레이저의 시작
              </span>
              <h1>PURAXEL ME</h1>
            </div>
            <div className="contMain">
              <p className="contExplain">
                소형 레이저 기술로 가정용 미용기기에 혁신을 가져오다
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">하나의 디바이스로</span>
              <p className="contHeader2">
                <em>레이저</em>와 <em>갈바닉 케어</em>를 한번에
              </p>
            </div>
            <div
              style={{
                width: "360px",
                height: "500px",
              }}
            >
              <MeModeItem />
            </div>
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
                width: "360px",
                height: "500px",
              }}
            >
              <HowItem />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <PriceItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MeCont;
