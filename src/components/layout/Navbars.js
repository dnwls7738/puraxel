import { useEffect, useState } from "react";
import { Box, Menu, Button, MenuItem, createTheme } from "@mui/material";

import navStyle from "./Nav.module.css";

import layoutHeaderKr from "./layoutHeader.json";

import NavIconButton from "./NavIconButton";

export default function Navbars() {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Pretendard",
            color: "var(--primary01)",
            opacity: "0.5",
            marginRight: "3.1rem",
            fontWeight: "500",
            fontSize: "2rem",
            lineHeight: "120%",
            letterSpacing: "-0.03em",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: "Pretendard",
            color: "var(--primary01)",
            opacity: "0.5",
            marginRight: "4rem",
            fontWeight: "600",
            fontSize: "1.6rem",
            lineHeight: "140%",
            letterSpacing: "-0.03em",
          },
        },
      },
    },
  });

  const theme2 = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Pretendard",
            color: "var(--primary01)",
            opacity: "0.5",
            fontWeight: "600",
            fontSize: "1.2rem",
            padding: 0,
            marginRight: "31px",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: "Pretendard",
            color: "var(--primary01)",
            opacity: "0.5",
            marginRight: "4rem",
            fontWeight: "600",
            fontSize: "1.2rem",
            lineHeight: "140%",
            letterSpacing: "-0.03em",
          },
        },
      },
    },
  });

  const [companyOpenState, setCompanyInfoOpenState] = useState(false);
  const [companyInfoAnchorState, setCompanyInfoAnchorState] =
    useState(undefined);

  const [snsOpenState, setSnsOpenState] = useState(false);
  const [snsAnchorState, setSnsAnchorState] = useState(undefined);

  const [productOpenState, setProductOpenState] = useState(false);
  const [productAnchorState, setProductAnchorState] = useState(undefined);

  const handleSNSButton = (e) => {
    setSnsAnchorState(e.currentTarget);
    setSnsOpenState(!snsOpenState);
  };

  const handleSNSCloseButton = () => {
    setSnsAnchorState(undefined);
  };

  const handleCompanyInfoButton = (e) => {
    setCompanyInfoAnchorState(e.currentTarget);
    setCompanyInfoOpenState(!companyOpenState);
  };

  const handleCompanyInfoCloseButton = () => {
    setCompanyInfoAnchorState(undefined);
  };

  const handleProductInfoButton = (e) => {
    setProductAnchorState(e.currentTarget);
    setProductOpenState(!productOpenState);
  };

  const handleProductInfoCloseButton = () => {
    setProductAnchorState(undefined);
  };

  const companyInfoOpenStateCodition = companyOpenState === false;
  // const snsCodition = snsOpenState === false;

  const [currentPage, setCurrentPage] = useState(undefined);

  const currentPageChecker = () => {
    if (document.documentURI.includes("hair")) {
      setCurrentPage("product");
    }

    if (document.documentURI.includes("fx5000")) {
      setCurrentPage("product");
    }

    if (document.documentURI.includes("me")) {
      setCurrentPage("product");
    }

    if (document.documentURI.includes("tech")) {
      setCurrentPage("tech");
    }
  };

  useEffect(() => {
    return currentPageChecker();
  }, []);

  return (
    <nav className={navStyle.header}>
      <section className={navStyle.leftNav}>
        <Box
          className={navStyle.logo}
          onClick={() => {
            window.location.href = "/";
          }}
        ></Box>

        <div className={navStyle.rightNav}>
          <Button
            onClick={handleProductInfoButton}
            className={`${navStyle.gnbMenu} ${
              currentPage === "product" ? navStyle.underliner__gnb : undefined
            }`}
            disableRipple
            theme={theme}
          >
            제품
            <Menu
              open={productOpenState}
              onClose={handleProductInfoCloseButton}
              anchorEl={productAnchorState}
              sx={{ marginTop: "20px" }}
            >
              <div className={navStyle.gnb__container}>
                <MenuItem
                  disableRipple
                  onClick={() => {
                    window.location.href = "/PURAXEL-Me";
                  }}
                  theme={theme}
                >
                  PURAXEL-Me
                </MenuItem>
                <MenuItem
                  disableRipple
                  onClick={() => {
                    window.location.href = "/PURAXEL";
                  }}
                  theme={theme}
                >
                  PURAXEL
                </MenuItem>
                <MenuItem
                  disableRipple
                  onClick={() => {
                    window.location.href = "/PURAXEL-Hair";
                  }}
                  theme={theme}
                >
                  PURAXEL-Hair
                </MenuItem>
              </div>
            </Menu>
          </Button>

          <NavIconButton
            onClick={() => {
              window.location.href = "/핵심기술";
            }}
            title={"핵심기술"}
            className={`${navStyle.gnbMenu} ${
              currentPage === "tech" ? navStyle.underliner : undefined
            }`}
          />
        </div>
      </section>

      <section className={navStyle.rightNav}>
        {/* <NavIconButton
          title={"notice"}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
          sx={{ paddingRight: "10px", paddingLeft: "10px" }}
        ></NavIconButton> */}

        {/* <NavIconButton
          title={"newsletter"}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
        ></NavIconButton> */}

        <Button
          onClick={handleSNSButton}
          className={`${navStyle.subMenu}`}
          disableRipple
          theme={theme2}
        >
          {layoutHeaderKr.sns}
          <Menu
            open={snsOpenState}
            onClose={handleSNSCloseButton}
            anchorEl={snsAnchorState}
            className={navStyle.menu__sns__container}
            sx={{ marginTop: "20px" }}
          >
            <div className={navStyle.SNSContainer}>
              <MenuItem
                disableRipple
                className={`${navStyle.SNSMenu} ${navStyle.SNSMenuFirst}`}
                onClick={() => {
                  window.open("https://www.instagram.com/puraxel/", "_blank");
                }}
                theme={theme2}
              >
                INSTAGRAM
              </MenuItem>
              <MenuItem
                disableRipple
                className={navStyle.SNSMenu}
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/Puraxel.official/",
                    "_blank"
                  );
                }}
                theme={theme2}
              >
                FACEBOOK
              </MenuItem>
              <MenuItem
                disableRipple
                className={`${navStyle.SNSMenu} ${navStyle.SNSMenuLast}`}
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ",
                    "_blank"
                  );
                }}
                theme={theme2}
              >
                YOUTUBE
              </MenuItem>
            </div>
          </Menu>
        </Button>

        {/* <NavIconButton title={layoutHeaderKr.sns}></NavIconButton> */}

        {/* <NavIconButton title={layoutHeaderKr.lameditech}></NavIconButton> */}

        <Button
          disableRipple
          onClick={handleCompanyInfoButton}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
          theme={theme2}
        >
          {companyInfoOpenStateCodition
            ? layoutHeaderKr.lameditechInfoOpen
            : layoutHeaderKr.lameditechInfoClose}
          <Menu
            open={companyOpenState}
            onClose={handleCompanyInfoCloseButton}
            anchorEl={companyInfoAnchorState}
            className={`${navStyle.applyKRFont} ${navStyle.temp}`}
          >
            <section
              className={`${navStyle.companyInfoMenuContainer} ${navStyle.companyInfoMenuContainerText}`}
            >
              {/* 근데 다국어는 어떻게 처리할거임 이렇게 이미지로 하면? */}
              {/* 이것도 상태관리 이미지 변경? condition ? kr : en 요렇게? */}
              {/* 위치 옮기는 거 어떻게 하지? Menu와 div 사이에 element인데 이걸 어떻게 찾지*/}

              <span className={navStyle.companyInfoMenuContainerTop}>
                <span className={navStyle.companyInfoMenuContainerTitle}>
                  주식회사 라메디텍
                </span>
                <span
                  className={navStyle.companyInfoMenuContainerLink}
                  onClick={() => {
                    window.open("https://lameditech.com/");
                  }}
                ></span>
              </span>
              <br />
              <span className={navStyle.companyInfoMenuContainerText}>
                <span>대표자 최종석 | 사업자번호 : 119-86-51786</span>
                <br />
                <span>통신판매업신고번호 : 제2017-서울금천-0999호</span>
                <br style={{ marginBottom: "0.8rem" }} />
                <span>서울특별시 금천구 벚꽃로 234, 10층 1002호</span>
                <br />
                <span>(가산동, 에이스하이엔드타워 6차)</span>
                <br />
                <span>T. 02-852-7980</span>
                <br />
                <span>F. 02-852-7983</span>
                <br />
                <span>E. sales@lameditech.com</span>
              </span>
            </section>
          </Menu>
        </Button>
        <NavIconButton
          title={layoutHeaderKr.kr}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu} ${navStyle.lang__button_kr}`}
          sx={{
            textDecoration: "underline",
            textDecorationThickness: "0.2rem",
            // opacity: 1,
          }}
        ></NavIconButton>
        <NavIconButton
          title={layoutHeaderKr.en}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu} ${navStyle.lang__button_en}`}
        ></NavIconButton>
      </section>
    </nav>
  );
}
