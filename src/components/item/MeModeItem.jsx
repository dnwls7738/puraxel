import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

import MeItem from "../item/MeItem";
import bgLaser from "../../assets/img/me_02_b.png";
import bgGal from "../../assets/img/me_02_a.png";
import PuraxelLaser from "./PuraxelLaser";
import Galbanic from "./Galbanic";

function MeModeItem() {
  return (
    <Swiper
      slidesPerView={1}
      modules={[EffectFade]}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
    >
      <SwiperSlide className="laser">
        <MeItem
          headEN="PURAXEL LASER"
          headKR="레이저 모드"
          expain="한번의 레이저로 0.2mm 이하의 얕은 피부층에 작은 홀을
                  생성하여 크림과 앰플의 
                  피부흡수율을 높여줍니다."
          bgImg={bgLaser}
        />
        <PuraxelLaser />
      </SwiperSlide>

      <SwiperSlide>
        <MeItem
          headEN="GALVANIC MODE"
          headKR="갈바닉 모드"
          expain="같은 극끼리 밀어내는 갈바닉 전류의 성질을 이용하여
                  이온화된 화장품의 흡수율을 높입니다. 레이저 모드를 함께
                  사용하면 피부 흡수율을 극대화할 수 있습니다."
          bgImg={bgGal}
        />
        <Galbanic />
      </SwiperSlide>
    </Swiper>
  );
}

export default MeModeItem;
