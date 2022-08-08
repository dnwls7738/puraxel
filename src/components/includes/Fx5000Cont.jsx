import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import "swiper/scss";
import "swiper/scss/pagination";

// import Oval from "../../assets/img/mobile_oval_me.svg";
import Line from "../../assets/img/pageLine.svg";
import Fx5000 from "../../assets/img/fx-5000_main.png";
import FxModeItem from "../item/FxModeItem";
import FxExperimentItem from "../item/FxExperimentItem";

function Fx5000Cont() {
  const boxRef = useRef();
  return (
    <>
      <Swiper
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
        {/* <img className="oval" src={Oval} ref={boxRef} alt="" /> */}
        <SwiperSlide>
          <div className="cont_3">
            <div className="contName_3">
              <span className="contHeader_3">에스테틱 레이저의 시작</span>
              <h1>PURAXEL FX-5000</h1>
            </div>
            <p className="contExplain_3">
              레이저 기술로
              <br />
              <em>에스테틱에 혁신을 가져오다</em>
            </p>
            <div
              className="contMain_3"
              // style={{
              //   backgroundImage: `url(${Fx5000})`,
              // }}
            >
              <img src={Fx5000} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont_3">
            <div className="contName_3">
              <span className="contHeader_3">
                레이저와 초음파 기술을 활용한
              </span>
              <p className="contHeader2">
                퓨라셀의 <em>다섯가지 기능</em>
              </p>
            </div>
            <FxModeItem />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont_3">
            <div className="contName_3">
              <span className="contHeader_3">
                퓨라셀과 각 효능에 특화된 앰플 사용후 결과
              </span>
              <p className="contHeader2">
                퓨라셀 <em>임상실험</em>
              </p>
            </div>
            <FxExperimentItem />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Fx5000Cont;
