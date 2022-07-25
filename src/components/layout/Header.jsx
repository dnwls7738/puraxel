import React, { useState } from "react";
import { Link } from "react-router-dom";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Icon from "@mui/material/Icon";
import GroupIcon from "@mui/icons-material/Group";

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
  Button,
  Typography,
} from "@mui/material";

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
  position: "fixed",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -60%)",
  width: 300,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

function Header({ name, text }) {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDrawer = () => () => {
    setClose(!close);
  };

  const list = () => (
    <Box
      sx={{
        width: 360,
        marginTop: 10,
      }}
      role="presentation"
    >
      <List>
        <div>
          <span className="product">product</span>
        </div>

        {["ME", "HAIR", "FX-5000", "Pura-tech"].map((text, index) => (
          <Link to={text}>
            <ListItemButton>
              <ListItem key={text} disablePadding>
                <ListItemText primary={text} />
              </ListItem>
            </ListItemButton>
          </Link>
        ))}
      </List>

      <div className="product">
        <span>puraxel mall</span>
      </div>

      <div className="mall">
        <Link
          to={{
            pathname: "https://facebook.com",
          }}
          target="_blank"
        >
          <span>Shop</span>
        </Link>
      </div>

      <div className="sns">
        <div className="snsT">
          <span>sns</span>
        </div>
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
              paddingRight: 5,
            }}
          >
            <FacebookIcon
              sx={{
                width: 32,
                height: 32,
              }}
            />
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
              paddingRight: 5,
            }}
          >
            <InstagramIcon
              sx={{
                width: 32,
                height: 32,
              }}
            />
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
            }}
          >
            <YouTubeIcon
              sx={{
                width: 32,
                height: 32,
              }}
            />
          </Icon>
        </Link>
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
      <div className="header__logo">
        <Link to="/">{name}</Link>
      </div>

      <div className="right">
        <Link to="" className="shop">
          <div className="shopText">
            <span>{text}</span>
          </div>
          <div className="shopIcon">
            {name === "ME" ? (
              <img src="./img/gnb_ic_shop.svg" />
            ) : (
              <GroupIcon />
            )}
          </div>
        </Link>

        {["right"].map((anchor) => (
          <React.Fragment>
            <IconButton>
              {!close ? (
                <img
                  src="./img/gnb_ic_ham.svg"
                  onClick={toggleDrawer(anchor, true)}
                  sx={{
                    zIndex: 99999,
                  }}
                />
              ) : (
                <CloseIcon
                  onClick={toggleDrawer(anchor, false)}
                  sx={{
                    zIndex: 99999,
                  }}
                />
              )}
            </IconButton>

            <Drawer
              anchor={"right"}
              open={close}
              PaperProps={{
                sx: {
                  width: 360,
                  color: "#55576F",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  zIndex: 0,
                },
              }}
            >
              {list(anchor)}
            </Drawer>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
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
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <p style={style2}>
                      대표자 최종석 | 사업자번호 : 119-86-51786
                      <br />
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
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}

export default Header;
