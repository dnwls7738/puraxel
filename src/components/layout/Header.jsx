import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import Ham from "../../assets/img/gnb_ic_ham.svg";
import Close from "../../assets/img/gnb_close.svg";
import Shop from "../../assets/img/gnb_ic_shop.svg";
import Logo from "../../assets/img/gnb_logo.svg";
import Inquiry from "../../assets/img/inquiry.svg";
import Youtube from "../../assets/img/sns_youtube.svg";
import Insta from "../../assets/img/sns_insta.svg";
import Facebook from "../../assets/img/sns_facebook.svg";
import Shortcut from "../../assets/img/shortcutMini.svg";

import {
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Drawer,
  List,
  IconButton,
  Backdrop,
  Modal,
  Fade,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "36px",
          fontFamily: "CaviarDreams",
          height: "43px",
          fontWeight: "bold",
        },
      },
    },
  },
});

const theme1 = createTheme({
  components: {
    // Name of the component
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: "0px",
        },
      },
    },
  },
});

const header = {
  fontFamily: "Pretendard",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "150%",
  letterSpacing: "-0.01em",
  color: "#4D5058",
};

const style2 = {
  fontFamily: "Pretendard",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "140%",
  letterSpacing: "-0.01em",
  color: "#7E818D",
};

const style = {
  position: "absolute",
  top: "82%",
  left: "50%",
  transform: "translate(-50%, -60%)",
  width: 300,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
};

function Header({ name, text }) {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDrawer = () => () => {
    setClose(!close);
  };

  function Component2() {
    if (name === "puraxel") {
      return;
    }
  }
  const list = () => (
    <Box
      role="presentation"
      sx={{
        position: "relative",
      }}
    >
      <List>
        <div className="menuHead">
          <span>product</span>
        </div>

        {["ME", "HAIR", "FX-5000", "Pura-tech"].map((text) => (
          <Link key={text} to={text}>
            <ListItemButton>
              <ListItem disablePadding>
                <ThemeProvider theme={theme}>
                  <ListItemText primary={text} />
                </ThemeProvider>
              </ListItem>
            </ListItemButton>
          </Link>
        ))}
      </List>

      <div className="mall">
        <div>
          <span className="product">puraxel mall</span>
          <Link
            to={{
              pathname: "https://lmdt.cafe24.com",
            }}
            target="_blank"
          >
            <div className="toShop">
              <span>Shop</span>
            </div>
          </Link>
        </div>

        <div className="sns">
          <span className="product">sns</span>
          <Link
            to={{
              pathname: "",
            }}
            target="_blank"
          >
            <Icon
              sx={{
                width: 32,
                height: 32,
                marginRight: "16px",
                borderRadius: "6px",
              }}
            >
              <img src={Facebook} alt="" />
            </Icon>
          </Link>

          <Link
            to={{
              pathname: "",
            }}
            target="_blank"
          >
            <Icon
              sx={{
                width: 32,
                height: 32,
                marginRight: "16px",
                borderRadius: "6px",
              }}
            >
              <img src={Insta} alt="" />
            </Icon>
          </Link>

          <Link
            to={{
              pathname: "",
            }}
            target="_blank"
          >
            <Icon
              sx={{
                width: 32,
                height: 32,
                borderRadius: "6px",
              }}
            >
              <img src={Youtube} alt="" />
            </Icon>
          </Link>
        </div>
      </div>

      <div className="info">
        <span>EN</span>
        <span>KR</span>
        <span onClick={handleOpen}>사업자정보</span>
      </div>
    </Box>
  );

  return (
    <header id="header">
      <div
        className="header__logo"
        style={{
          zIndex: 99999,
        }}
      >
        <Link to="/">
          {name === "puraxel" ? <img src={Logo} alt="" /> : <>{name}</>}
        </Link>
      </div>

      <div className="right">
        {name === "puraxel" && "PURA-TECH" ? (
          <Component2 />
        ) : name === "ME" ? (
          <Link
            to={{
              pathname: "https://lmdt.cafe24.com",
            }}
            target="_blank"
            className="shop"
          >
            <ThemeProvider theme={theme1}>
              <IconButton>
                <div className="shopText" style={{ zIndex: 99999 }}>
                  <span>{text}</span>
                </div>
                <div className="shopIcon" style={{ zIndex: 99999 }}>
                  <img src={Shop} alt="" />
                </div>
              </IconButton>
            </ThemeProvider>
          </Link>
        ) : (
          <Link to="INQUIRY" className="shop">
            <ThemeProvider theme={theme1}>
              <IconButton>
                <div className="shopText" style={{ zIndex: 99999 }}>
                  <span>{text}</span>
                </div>
                <div className="shopIcon" style={{ zIndex: 99999 }}>
                  <img src={Inquiry} alt="" />
                </div>
              </IconButton>
            </ThemeProvider>
          </Link>
        )}

        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            {!close ? (
              <ThemeProvider theme={theme1}>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                  <img
                    src={Ham}
                    sx={{
                      zIndex: 99999,
                    }}
                    alt=""
                  />
                </IconButton>
              </ThemeProvider>
            ) : (
              <ThemeProvider theme={theme1}>
                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <img
                    src={Close}
                    style={{
                      zIndex: 99999,
                    }}
                    alt=""
                  />
                </IconButton>
              </ThemeProvider>
            )}

            <Drawer
              anchor={"right"}
              open={close}
              PaperProps={{
                sx: {
                  width: 360,
                  color: "#55576F",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  zIndex: 0,
                  backdropFilter: "blur(4px)",
                },
              }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={header}
              >
                주식회사 라메디텍
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "Pretendard",
                    marginLeft: "40px",
                    background: "#F2F3F6",
                    padding: "2px 8px 2px 8px",
                    borderRadius: "4px",
                  }}
                >
                  <Link
                    to={{
                      pathname: "https://www.lameditech.com/",
                    }}
                    target="_blank"
                    style={{}}
                  >
                    라메디텍 바로가기
                    <div
                      style={{
                        display: "inline-block",
                      }}
                    >
                      <img src={Shortcut} style={{ display: "block" }} alt="" />
                    </div>
                  </Link>
                </div>
              </Typography>

              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <p style={style2}>
                  대표자 최종석 | 사업자번호 : 119-86-51786 <br />
                  통신판매업신고번호 : 제2017-서울금천-0999호
                </p>
                <br />
                <p style={style2}>
                  서울특별시 금천구 벚꽃로 234, 10층 1002호
                  <br /> (가산동, 에이스하이엔드타워 6차)
                  <br /> T. 02-852-7980
                  <br /> F. 02-852-7983
                  <br /> E. sales@lameditech.com
                </p>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </header>
  );
}

export default Header;
