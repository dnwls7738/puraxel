import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import Line from "../../assets/img/pageLine.svg";
// import BgImg from "../../assets/img/mobile_bg_tech.png";
import MainImg from "../../assets/img/tech_main.png";
// import criticalImg1 from "../../assets/img/criticaltech.png";
// import criticalImg2 from "../../assets/img/criticaltech2.png";
import action1 from "../../assets/img/action1.png";
import action2 from "../../assets/img/action2.png";
import action3 from "../../assets/img/action3.png";
import action4 from "../../assets/img/action4.png";

// import CollapseItem from "../item/CollapseItem";

function TechCont() {
  return (
    <div
      style={{
        // backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        background: "linear-gradient(#FFFFFFCC 40%, #AFCFFFCC)",
      }}
    >
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          type: "custom",
          renderCustom: (swiper, current, total) => {
            return `<span style="font-size: 1.2rem;color: #000000;font-weight:600;letter-spacing: -0.01em;">0${current}</span> 
              <img src=${Line} /> 
             <span style="font-size: 1.2rem;color:#B6BCC7;font-weight:600;letter-spacing: -0.01em;">0${total}</span>`;
          },
        }}
      >
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">프락셔널 레이저</span>
              <h1>퓨라셀의 기술</h1>
            </div>
            <div className="contMain">
              <img src={MainImg} alt="" style={{ width: "50%" }} />
              <p className="techExHeader">
                프락셔널 레이저 <em>원리</em>
              </p>
              <div className="techExplain2">
                레이저 빔이 Array Lens를 통과하며, 피부에 약 100개의 미세한
                구멍(마이크로 홀)을 생성합니다. 이 때, 생성되는 마이크로 홀은
                피부의 약 0.2mm 이하의 표피 조직에 위치하게 되며, 이 미세한
                홀들을 통해 기능성 화장품 등의 영양 물질 흡수율을 높일 수
                있습니다.
              </div>
              <div className="techExplain2">
                퓨라셀은 2940nm 파장 대의 Er:Yag 레이저를 사용합니다. Er:Yag는
                표피의 수분에 대부분 흡수되는 성질을 갖고 있으며, 열손상이 적어
                천공 깊이의 조절이 가능한 장점이 있습니다.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">프락셔널 레이저 & 갈바닉</span>
              <p className="contHeader2">작용원리</p>
            </div>
            <div className="action">
              <div className="actionImg">
                <img src={action1} alt="" />
              </div>
              <div className="actionImg">
                <img src={action2} alt="" />
              </div>
              <div className="actionImg">
                <img src={action3} alt="" />
              </div>
              <div className="actionImg">
                <img src={action4} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TechCont;
