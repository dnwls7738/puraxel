import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { gsap } from "gsap";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import MeModeItem from "../item/MeModeItem";
// import Oval from "../../assets/img/mobile_oval_me.svg";
import Line from "../../assets/img/pageLine.svg";
import Main from "../../assets/img/me_main.png";
import ExpermentBtn from "../item/ExperimentBtn";
import SpecBtn from "../item/SpecBtn";
import SwipeableEdgeDrawer from "../item/SwipeableEdgeDrawer";

function MeCont() {
  // const boxRef = useRef();

  return (
    <>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        observer="true"
        observeParents="true"
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
          //   if (index.activeIndex === 0) {
          //     gsap.to(boxRef.current, {
          //       x: "0px",
          //       y: "0px",
          //       duration: 1.5,
          //     });
          //   }
          //   if (index.activeIndex === 1) {
          //     gsap.to(boxRef.current, {
          //       x: "220px",
          //       y: "60px",
          //       duration: 1.5,
          //     });
          //   }
          //   if (index.activeIndex === 2) {
          //     gsap.to(boxRef.current, {
          //       x: "270px",
          //       y: "100px",
          //       duration: 1.5,
          //     });
          //   }
          //   if (index.activeIndex === 3) {
          //     gsap.to(boxRef.current, {
          //       x: "300px",
          //       y: "100px",
          //       duration: 1.5,
          //     });
          //   }

          if (index.activeIndex === 4) {
            return <SwipeableEdgeDrawer />;
          }
          //   console.log(index.activeIndex);
        }}
        scrollbar={{ draggable: true }}
      >
        {/* <img className="oval" src={Oval} ref={boxRef} alt="oval" /> */}
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">홈 에스테틱 레이저의 시작</span>
              <h1>PURAXEL ME</h1>
              <p className="contExplain">
                레이저 기술로
                <br />
                <em>에스테틱에 혁신을 가져오다</em>
              </p>
            </div>
            <div className="contMain">
              <img src={Main} alt="" />
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

            <MeModeItem />
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
              <span className="contHeader">임상 실험 임시 페이지</span>
              <p className="contHeader2">
                퓨라셀 <em>임상실험 임시 내용 페이지</em>
              </p>
              <ExpermentBtn />
            </div>
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
            <SpecBtn />
            <SwipeableEdgeDrawer />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MeCont;
