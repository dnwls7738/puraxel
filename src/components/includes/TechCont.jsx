import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import Line from "../../assets/img/pageLine.svg";
import BgImg from "../../assets/img/mobile_bg_tech.png";
import MainImg from "../../assets/img/tech_main.png";
// import criticalImg1 from "../../assets/img/criticaltech.png";
// import criticalImg2 from "../../assets/img/criticaltech2.png";
import action1 from "../../assets/img/action1.png";
import action2 from "../../assets/img/action2.png";
import action3 from "../../assets/img/action3.png";
import action4 from "../../assets/img/action4.png";

import Pura1 from "../../assets/img/certifi_pura_01.png";
import Pura2 from "../../assets/img/certifi_pura_02.png";
import Pura3 from "../../assets/img/certifi_pura_03.png";
import lmdt1 from "../../assets/img/certifi_lmdt_01.png";
import lmdt2 from "../../assets/img/certifi_lmdt_02.png";
import lmdt3 from "../../assets/img/certifi_lmdt_03.png";
import lmdt4 from "../../assets/img/certifi_lmdt_04.png";
import lmdt5 from "../../assets/img/certifi_lmdt_05.png";

// import CollapseItem from "../item/CollapseItem";

function TechCont() {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
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

        {/* <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">Fractional 레이저 작동 방식</span>
              <p className="contHeader2">
                <em>프락셔널 레이저</em> 작동 방식
              </p>
            </div>
            <CollapseItem />
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">Critical Technology</span>
              <p className="contHeader2">
                에너지 세기에 따른 <em>천공 깊이</em>
              </p>
            </div>
            <div className="criticalTech">
              <div className="criticalCont">
                <img src={criticalImg1} alt="" />
                <p>
                  단위 면적당
                  <br /> 에너지 세기에 따른 피부 깊이
                </p>
              </div>
              <div className="criticalCont2">
                <img src={criticalImg2} alt="" />
                <p>
                  동일 에너지에서
                  <br /> 단위면적이 다를 때 천공 깊이
                </p>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="ErYag">
                <p className="ErYagText1">
                  퓨라셀에 사용된 미용 레이저, 어븀야그
                </p>
                <p className="ErYagText2"> Er : Yag, 2940nm</p>
              </div>
              <div className="ErYagConts">
                <p className="ErYagCont">
                  수분에 대한 에너지 흡수도가 높아 레이저 조사 시
                  <em>
                    피부의 물분자 결합을 깨면서 나오는 높은 에너지로 피부표면을
                    순간적으로 증발시켜 미세한 홀을 만드는 원리
                  </em>
                  의 미용 레이저입니다.
                </p>
                <p className="ErYagCont2">
                  레이저로 인한 천공 깊이는&nbsp;
                  <em>
                    단위면적당 레이저
                    <br /> 에너지 밀도(세기)
                  </em>
                  에 따라 실제 피부에 천공되는 깊이에 차이를 줍니다.
                </p>
                <p className="ErYagCont3">
                  때문에 <em>동일한 에너지로 단위면적이 작으면</em> 에너지
                  밀도가 높아 레이저 침투 깊이가 깊어지고 이에 따라 &nbsp;
                  <em>천공되는 깊이도 차이</em>가 발생됩니다.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

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
