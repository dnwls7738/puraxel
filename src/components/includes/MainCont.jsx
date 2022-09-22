import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import MainImg from "../../assets/img/home_main.png";
import MainImg2 from "../../assets/img/home_main2.png";
import MainImg3 from "../../assets/img/home_main3.png";

function MainCont() {
  return (
    <div className="cont">
      <div className="contName">
        <h1
          style={{
            fontSize: "4.8rem",
          }}
        >
          <em style={{ fontWeight: "600" }}>홀</em>로 빛나다
        </h1>
        <p
          style={{
            fontFamily: "Pretendard",
            fontWeight: "400",
            fontSize: "1.6rem",
            color: "#55576F",
            marginBottom: "20px",
          }}
        >
          레이저의 미세한 홀이 당신의 피부를 지켜줍니다.
        </p>
      </div>
      <div className="contMain2">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={300}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={MainImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MainImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MainImg3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MainCont;
