import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

function HowTo() {
  return (
    <Swiper spaceBetween={10}>
      <SwiperSlide>
        <div className="howTo">
          <div className="howToTitle">
            <h1 className="title">제품 사용 방법 01</h1>
          </div>
          <div className="howToExplain">
            <p className="explain">
              사용방법 01 내용입니다. 제품 구성에 따른 간단한 사용 방법이
              들어갑니다. 내용 구성 방법은 추후 달라질 수 있습니다.
            </p>
          </div>
          <div className="howToConts1">
            <div className="howToCont"></div>
            <div className="howToCont"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="howTo">
          <div className="howToTitle">
            <h1 className="title">제품 사용 방법 02</h1>
          </div>
          <div className="howToExplain">
            <p className="explain">
              제품을 어떻게 사용하고 얼마나 해도 되는지 등 상세한 과정과 내용이
              필요합니다. 그에 따른 사용 방법이 아래 이미지 또는 영상으로 들어갈
              예정입니다. 콘텐츠 형식은 정헤져 있지 않습니다. 콘텐츠에 따라 사용
              방법 디자인이 크게 달라질 수 있습니다.
            </p>
          </div>
          <div className="howToCont2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="howTo">
          <div className="howToTitle">
            <h1 className="title">제품 사용 방법 03</h1>
          </div>
          <div className="howToExplain">
            <p className="explain">
              제품을 어떻게 사용하고 얼마나 해도 되는지 등 상세한 과정과 내용이
              필요합니다. 그에 따른 사용 방법이 아래 이미지 또는 영상으로 들어갈
              예정입니다. 콘텐츠 형식은 정헤져 있지 않습니다. 콘텐츠에 따라 사용
              방법 디자인이 크게 달라질 수 있습니다.
            </p>
          </div>
          <div className="howToConts2">
            <div className="howToCont3"></div>
            <div className="howToCont3"></div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HowTo;
