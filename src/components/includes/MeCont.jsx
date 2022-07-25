import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";

import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { bgcolor } from "@mui/system";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #efefef`,
  borderRadius: "4px",
  boxShadow: "0px 4.46774px 11.1693px rgba(169, 121, 124, 0.1)",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: (theme.palette.mode = "#fffff"),

    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function MeCont() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
              <p className="explain">
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
              <Swiper>
                <SwiperSlide>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Pretendard",
                          padding: "0 0 0 0",
                        }}
                      >
                        <span style={{ fontSize: "16px", color: "#55576F" }}>
                          PURAXEL LASER
                          <em
                            style={{
                              fontSize: "12px",
                              paddingLeft: "10px",
                              color: "#7E818D",
                            }}
                          >
                            레이저 모드
                          </em>
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontFamily: "Pretendard",
                          marginBottom: 2,
                        }}
                      >
                        한번의 레이저로 0.2mm 이하의 얕은 피부층에 작은 홀을
                        생성하여 크림과 앰플의 의 피부흡수율을 높여줍니다.
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails
                      sx={{ padding: "10px 0 10px 10px", bgcolor: "#F2F3F6" }}
                    >
                      <Link to="">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Pretendard",
                          }}
                        >
                          <span style={{ fontSize: "12px", color: "#55576F" }}>
                            프락셔널 레이저 기술
                            <em
                              style={{
                                fontSize: "10px",
                                paddingLeft: "10px",
                                color: "#7E818D",
                              }}
                            >
                              자세히 보기 &gt;
                            </em>
                          </span>
                        </Typography>
                      </Link>
                    </AccordionDetails>
                  </Accordion>

                  <div className="contMain"></div>
                </SwiperSlide>

                <SwiperSlide>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Pretendard",
                          padding: "0 0 0 0",
                        }}
                      >
                        <span style={{ fontSize: "16px", color: "#55576F" }}>
                          GALVANIC MODE
                          <em
                            style={{
                              fontSize: "12px",
                              paddingLeft: "10px",
                              color: "#7E818D",
                            }}
                          >
                            갈바닉 모드
                          </em>
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontFamily: "Pretendard",
                          marginBottom: 2,
                        }}
                      >
                        같은 극끼리 밀어내는 갈바닉 전류의 성질을 이용하여
                        이온화된 화장품의 흡수율을 높입니다. 레이저 모드를 함께
                        사용하면 피부 흡수율을 극대화할 수 있습니다.
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails
                      sx={{ padding: "10px 0 10px 10px", bgcolor: "#F2F3F6" }}
                    >
                      <Link to="">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Pretendard",
                          }}
                        >
                          <span style={{ fontSize: "12px", color: "#55576F" }}>
                            갈바닉 모드 기술
                            <em
                              style={{
                                fontSize: "10px",
                                paddingLeft: "10px",
                                color: "#7E818D",
                              }}
                            >
                              자세히 보기 &gt;
                            </em>
                          </span>
                        </Typography>
                      </Link>
                    </AccordionDetails>
                  </Accordion>

                  <div className="contMain"></div>
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
              <Swiper>
                <SwiperSlide> 제품사용방법1</SwiperSlide>
                <SwiperSlide> 제품사용방법2 </SwiperSlide>
                <SwiperSlide> 제품사용방법3</SwiperSlide>
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

            <div className="contMain">
              <div className="price">
                <div className="priceMain">
                  <p className="priceName">퓨라셀 ME</p>
                  <p className="mainPrice">1,890,000원</p>
                </div>

                <div className="priceSub">
                  <p className="month">12개월</p>
                  <p className="subPrice">월 164,800원</p>
                </div>
              </div>
              <div className="price">
                <div className="priceMain">
                  <p className="priceName">
                    퓨라셀 ME+ <br />
                    퓨라더마앰플
                  </p>
                  <p className="mainPrice">1,890,000원</p>
                </div>
                <p className="disconunt">23% off</p>
                <div className="priceSub">
                  <p className="month">12개월</p>
                  <p className="subPrice">월 164,800원</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MeCont;
