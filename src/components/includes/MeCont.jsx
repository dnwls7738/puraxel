import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import MeItem from "../essential/MeItem";

function MeCont() {
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
                <em>홈 에스테틱</em> 레이저의 시작
              </span>
              <h1>PURAXEL ME</h1>
            </div>
            <div className="contMain">
              <p className="contExplain">
                소형 레이저 기술로 가정용 미용기기에 혁신을 가져오다
              </p>
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
            <div
              style={{
                width: "360px",
                height: "500px",
              }}
            >
              <Swiper slidesPerView={1}>
                <SwiperSlide>
                  <MeItem
                    headEN="PURAXEL LASER"
                    headKR="레이저 모드"
                    expain="한번의 레이저로 0.2mm 이하의 얕은 피부층에 작은 홀을
                            생성하여 크림과 앰플의 
                            피부흡수율을 높여줍니다."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <MeItem
                    headEN="GALVANIC MODE"
                    headKR="갈바닉 모드"
                    expain="같은 극끼리 밀어내는 갈바닉 전류의 성질을 이용하여
                            이온화된 화장품의 흡수율을 높입니다. 레이저 모드를 함께
                            사용하면 피부 흡수율을 극대화할 수 있습니다."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
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
                width: "360px",
                height: "500px",
              }}
            >
              <Swiper spaceBetween={10}>
                <SwiperSlide>
                  <div className="howTo">
                    <div className="howToTitle">
                      <h1 className="title">제품 사용 방법 01</h1>
                    </div>
                    <div className="howToExplain">
                      <p className="expain">
                        사용방법 01 내용입니다. 제품 구성에 따른 간단한 사용
                        방법이 들어갑니다. 내용 구성 방법은 추후 달라질 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="howTo">
                    <div className="howToTitle">
                      <h1 className="title">제품 사용 방법 02</h1>
                    </div>
                    <div className="howToExplain">
                      <p className="expain">
                        사용방법 01 내용입니다. 제품 구성에 따른 간단한 사용
                        방법이 들어갑니다. 내용 구성 방법은 추후 달라질 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="howTo">
                    <div className="howToTitle">
                      <h1 className="title">제품 사용 방법 03</h1>
                    </div>
                    <div className="howToExplain">
                      <p className="expain">
                        사용방법 01 내용입니다. 제품 구성에 따른 간단한 사용
                        방법이 들어갑니다. 내용 구성 방법은 추후 달라질 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cont">
            <div className="contName">
              <span className="contHeader">쇼핑몰</span>
              <p className="contHeader2">추천제품</p>
            </div>

            <div className="contPrice">
              <div className="price">
                <div className="priceMain">
                  <p className="priceName">퓨라셀 ME</p>
                  <p className="mainPrice">1,890,000원</p>
                </div>

                <div className="priceSub">
                  <p className="month">12개월</p>
                  <p className="subPrice">월 157,500원</p>
                </div>
              </div>
              <div className="price2">
                <div className="priceMain">
                  <p className="priceName">
                    퓨라셀 ME+ <br />
                    퓨라더마앰플
                  </p>
                  <p className="mainPrice">
                    <em className="mainSub">2,433,000원</em> -&gt; 1,890,000원
                  </p>
                </div>
                <p className="discount">
                  <p className="disPrice">23% off</p>
                </p>
                <div className="priceSub">
                  <p className="month">12개월</p>
                  <p className="subPrice">월 164,800원</p>
                </div>
              </div>
              <div className="details">
                <span className="detailText">
                  제품을 어떻게 사용하고 얼마나 해도 되는지 등 상세한 과정과
                  내용이 필요합니다. 그에 따른 사용 방법이 아래 이미지 또는
                  영상으로 들어갈 예정입니다. 콘텐츠 형식은 정헤져 있지
                  않습니다. 콘텐츠에 따라 사용 방법 디자인이 크게 달라질 수
                  있습니다.
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MeCont;
