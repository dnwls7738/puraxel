import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import "swiper/scss";
import "swiper/scss/pagination";

import PriceItem from "../item/PriceItem";
import Oval from "../../assets/img/mobile_oval_me.svg";
import Line from "../../assets/img/pageLine.svg";

function HairCont() {
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
            gsap.to(boxRef.current, {
              x: "0px",
              y: "0px",
              duration: 1.5,
            });
          }
          if (index.activeIndex === 1) {
            gsap.to(boxRef.current, {
              x: "270px",
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
              x: "370px",
              y: "50px",
              duration: 1.5,
            });
          }
          console.log(index.activeIndex);
        }}
        scrollbar={{ draggable: true }}
      >
        <img className="oval" src={Oval} ref={boxRef} alt="" />
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                <em>홈 에스테틱</em> 레이저의 시작
              </span>
              <h1>PURAXEL ME</h1>
            </div>
            <p className="contExplain">
              소형 레이저 기술로
              <br /> 가정용 미용기기에 혁신을 가져오다
            </p>
            <div className="contMain"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <PriceItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HairCont;
