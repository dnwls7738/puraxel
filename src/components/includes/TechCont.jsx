import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import PriceItem from "../item/PriceItem";
// import Oval from "../../assets/img/mobile_oval_me.svg";
import Line from "../../assets/img/pageLine.svg";

function TechCont() {
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
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="cont_4">
            <div className="contName_4">
              <span className="contHeader_4">에스테틱 레이저의 시작</span>
              <h1>tech</h1>
            </div>
            <p className="contExplain_4">
              레이저 기술로
              <br />
              <em>에스테틱에 혁신을 가져오다</em>
            </p>
            <div className="contMain_4"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <PriceItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TechCont;
