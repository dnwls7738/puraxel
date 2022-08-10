import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import PriceItem from "../item/PriceItem";
import Line from "../../assets/img/pageLine.svg";
import BgImg from "../../assets/img/mobile_bg_tech.png";
import MainImg from "../../assets/img/tech_main.png";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

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
          <div
            className="cont"
            style={{
              backgroundImage: `url(${BgImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
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
          <div
            className="cont"
            style={{
              backgroundImage: `url(${BgImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="contName">
              <span className="contHeader">Fractional 레이저 작동 방식</span>
              <p className="contHeader2">
                <em>프락셔널 레이저</em> 작동 방식
              </p>
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                ></AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
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

export default TechCont;
