import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";

function HairCont() {
  return (
    <>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: "fraction",
          formatFractionCurrent: function (number) {
            return "0" + number;
          },
          formatFractionTotal: function (number) {
            return "0" + number;
          },
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                <em>에스테틱</em> 레이저의 시작
              </span>
              <h1>PURAXEL HAIR</h1>
            </div>
            <div className="contMain">
              <div className="contExplain">
                <p>
                  레이저 기술로 <br />
                  에스테틱에
                  <br /> 혁신을 가져오다
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HairCont;
