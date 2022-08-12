import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import Line from "../../assets/img/pageLine.svg";
import BgImg from "../../assets/img/mobile_bg_tech.png";
import MainImg from "../../assets/img/tech_main.png";
import criticalImg1 from "../../assets/img/criticaltech.png";
import criticalImg2 from "../../assets/img/criticaltech2.png";
import action1 from "../../assets/img/action1.png";
import action2 from "../../assets/img/action2.png";
import action3 from "../../assets/img/action3.png";
import action4 from "../../assets/img/action4.png";

import Pura1 from "../../assets/img/certifi_pura_01.png";
import Pura2 from "../../assets/img/certifi_pura_02.png";
import lmdt1 from "../../assets/img/certifi_lmdt_01.png";
import lmdt2 from "../../assets/img/certifi_lmdt_02.png";
import lmdt3 from "../../assets/img/certifi_lmdt_03.png";
import lmdt4 from "../../assets/img/certifi_lmdt_04.png";
import lmdt5 from "../../assets/img/certifi_lmdt_05.png";

import CollapseItem from "../item/CollapseItem";

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
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                하이브리드 레이저의 에스테틱 솔루션 퓨라셀의 기술력
              </span>
              <h1>
                Fractional + <br /> MTS function
              </h1>
              <div className="techExplain">
                갈바닉, 초음파, LED, Cooling으로 흡수율 향상
              </div>
            </div>
            <div className="contMain">
              <img src={MainImg} alt="" />
              <div className="techExplain2">
                피부 재생 레이저를 적용,
                <br /> 피부에 Micro hole을 생성해
                <br /> 화장품 등의 영양물질의 흡수를 촉진합니다.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">Fractional 레이저 작동 방식</span>
              <p className="contHeader2">
                <em>프락셔널 레이저</em> 작동 방식
              </p>
            </div>
            <CollapseItem />
          </div>
        </SwiperSlide>

        <SwiperSlide>
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
            <div className="ErYag">
              <p className="ErYagText1">
                퓨라셀에 사용된 미용 레이저, 어븀야그
              </p>
              <p className="ErYagText2"> Er : Yag, 2940nm</p>
            </div>
            <div className="ErYagConts">
              <p className="ErYagCont">
                수분에 대한 에너지 흡수도가 높아 레이저 조사 시
                <span>
                  피부의 물분자 결합을 깨면서 나오는 높은 에너지로 피부표면을
                  순간적으로 증발시켜 미세한 홀을 만드는 원리
                </span>
                의 미용 레이저입니다.
              </p>
              <p className="ErYagCont2">
                레이저로 인한 천공 깊이는
                <span>단위면적당 레이저 에너지 밀도(세기)</span>에 따라 실제
                피부에 천공되는 깊이에 차이를 줍니다.
              </p>
              <p className="ErYagCont3">
                때문에 <span>동일한 에너지로 단위면적이 작으면</span>
                에너지 밀도가 높아 레이저 침투 깊이가 깊어지고 이에 따라
                <span>천공되는 깊이도 차이</span> 가 발생됩니다.
              </p>
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
        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">
                인증 받은 레이저 기기로 마음까지 편한 관리!
              </span>
              <p className="contHeader2">퓨라셀 인증</p>
            </div>
            <div className="puraCertfied">
              <p className="puraCertText">PURAXEL Certifications</p>
              <p className="puraCertText2">퓨라셀 인증</p>
            </div>
            <div className="puraCertImgs">
              <div className="puraCertImg">
                <img src={Pura1} alt="" />
              </div>
              <div className="puraCertImg2">
                <img src={Pura2} alt="" />
              </div>
            </div>
            <div className="lmdtCertfied">
              <p className="lmdtCertText">LaMeditech Certifications</p>
              <p className="lmdtCertText2">기업 인증</p>
            </div>
            <div className="lmdtCertImgs">
              <div className="lmdtCertImg">
                <img src={lmdt1} alt="" />
              </div>
              <div className="lmdtCertImg2">
                <img src={lmdt2} alt="" />
              </div>
            </div>
            <div className="lmdtCertImgs">
              <div className="lmdtCertImg">
                <img src={lmdt3} alt="" />
              </div>
              <div className="lmdtCertImg2">
                <img src={lmdt4} alt="" />
              </div>
            </div>
            <div className="lmdtCertImgs">
              <div className="lmdtCertImg">
                <img
                  src={lmdt5}
                  alt=""
                  style={{
                    width: "156px",
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TechCont;
