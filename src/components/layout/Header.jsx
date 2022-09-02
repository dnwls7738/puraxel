import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import Icon from "@mui/material/Icon";
import Navbars from "./Navbars";

import Ham from "../../assets/img/gnb_ic_ham.svg";
import Close from "../../assets/img/gnb_close.svg";
import Shop from "../../assets/img/gnb_ic_shop.svg";
import Logo from "../../assets/img/logo.png";
import Inquiry from "../../assets/img/inquiry.svg";
import Youtube from "../../assets/img/youtube.svg";
import Insta from "../../assets/img/insta.svg";
import Facebook from "../../assets/img/facebook.svg";
import Shortcut from "../../assets/img/shortcutMini.svg";

import {
  ListItem,
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
  TextField,
  FormControl,
  Grid,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  CssBaseline,
} from "@mui/material";
import { CheckCircle, CheckCircleOutline } from "@mui/icons-material";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          marginLeft: "20px",
          fontSize: "3.2rem",
          fontFamily: "Pretendard",
          fontWeight: "300",
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
          padding: 0,
        },
      },
    },
  },
});

const theme3 = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#55576F",
          },
          boxShadow: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1000px",
          paddingLeft: "4px",
          paddingRight: "4px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#4D5058",
          fontFamily: "Pretendard",
          fontSize: "1.4rem",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#A7ABB6",
          "&.Mui-checked": { color: "#4D5058" },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": { color: "#A7ABB6", fontSize: "1.2rem" },
          color: "#A7ABB6",
          fontFamily: "Pretendard",
          fontSize: "1.2rem",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderBottom: "#DFE1E8",
          "&:after": { borderBottom: "#DFE1E8" },
          "&.Mui-hover": { borderBottom: "#DFE1E8" },
          fontSize: "1.6rem",
          fontFamily: "Pretendard",
          color: "#4D5058",
          fontWeight: "600",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: "Pretendard",
          fontSize: "1rem",
          color: "#DD5C54",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { position: "fixed", width: "100%" },
      },
    },
  },
});

const header = {
  fontFamily: "Pretendard",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.4rem",
  lineHeight: "150%",
  letterSpacing: "-0.01em",
  color: "#4D5058",
};

const style2 = {
  fontFamily: "Pretendard",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "1.2rem",
  lineHeight: "140%",
  letterSpacing: "-0.01em",
  color: "#7E818D",
};

const style = {
  position: "absolute",
  top: "82%",
  left: "50%",
  transform: "translate(-50%, -60%)",
  minWidth: 300,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
};

const style3 = {
  overflow: "scroll",
  height: "100%",
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
};

function Header({ name, text }) {
  const matches = useMediaQuery("(max-width:1024px)");

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [close, setClose] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const toggleDrawer = () => () => {
    setClose(!close);
  };

  function Component2() {
    if (name === "puraxel" || "tech") {
      return;
    }
  }

  function Reload() {
    window.location.reload({ name });
  }

  const list = () => (
    <Box
      role="presentation"
      sx={{
        position: "fixed",
        width: "100%",
      }}
    >
      <List theme={theme3}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <Link to="/">
            <ThemeProvider theme={theme1}>
              <IconButton>
                <img
                  src={Logo}
                  style={{
                    width: "4.8rem",
                    verticalAlign: "middile",
                  }}
                  alt=""
                />
              </IconButton>
            </ThemeProvider>
          </Link>
          <ThemeProvider theme={theme1}>
            <IconButton onClick={toggleDrawer(false)}>
              <img
                src={Close}
                style={{
                  width: "3.2rem",
                }}
                alt=""
              />
            </IconButton>
          </ThemeProvider>
        </div>
        <div className="menuHead">
          <span>product</span>
        </div>

        {["PURAXEL-Me", "PURAXEL", "PURAXEL-Hair", "tech"].map((text) => (
          <Link key={text} to={text}>
            <ListItem disablePadding>
              <ThemeProvider theme={theme}>
                <ListItemText primary={text} />
              </ThemeProvider>
            </ListItem>
          </Link>
        ))}

        <div className="mall">
          <div>
            <p className="product">puraxel mall</p>
            <Link
              to={{
                pathname: "http://m.lmdt.cafe24.com",
              }}
              target="_blank"
            >
              <div className="toShop">
                <p
                  style={{
                    marginTop: 12,
                  }}
                >
                  Shop
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="service">
          <div>
            <p className="product">customer service</p>
            <Link
              to={{
                pathname: "",
              }}
              target="_blank"
            >
              <div className="toShop">
                <p
                  style={{
                    marginTop: 12,
                  }}
                >
                  news letter
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div className="sns">
            <p className="product">sns</p>
            <div
              style={{
                marginTop: 12,
              }}
            >
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
        </div>
      </List>
    </Box>
  );

  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const history = useHistory();

  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  const onhandlePost = async (data) => {
    const { email, name, phone } = data;
    const postData = { email, name, phone };

    // post
    await axios
      .post("/member/join", postData)
      .then(function (response) {
        console.log(response, "성공");
        history.push("/login");
      })
      .catch(function (err) {
        console.log(err);
        setRegisterError("문의하기에 실패했습니다. 다시한번 확인해 주세요.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      email: data.get("email"),
      name: data.get("name"),
      phone: data.get("phone"),
    };
    const { email, name, phone } = joinData;

    // 이메일 유효성 체크
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!emailRegex.test(email))
      setEmailError("올바른 이메일 형식이 아닙니다.");
    else setEmailError("");

    // 이름 유효성 검사
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(name) || name.length < 1)
      setNameError("올바른 이름을 입력해주세요.");
    else setNameError("");

    // 전화번호 유효성 체크
    const phoneRegex = /^(010|011|016|017|018|019)[0-9]{3,4}[0-9]{4}$/;
    if (!phoneRegex.test(phone))
      setPhoneError("올바른 전화번호 형식이 아닙니다.");
    else setPhoneError("");

    // 개인정보 수집 동의 체크
    if (!checked) alert("개인정보 수집 및 활용에 동의해주세요.");

    if (
      emailRegex.test(email) &&
      nameRegex.test(name) &&
      checked &&
      phoneRegex.test(phone)
    ) {
      onhandlePost(joinData);
    }
  };

  return matches === true ? (
    <header id="header">
      <div className="header__logo">
        <div className="logo">
          {name === "puraxel" ? (
            <Link to="/">
              <img
                src={Logo}
                alt=""
                style={{
                  width: "4.8rem",
                  verticalAlign: "middle",
                }}
              />
            </Link>
          ) : (
            <Link onClick={Reload} to={name}>
              <>{name}</>
            </Link>
          )}
        </div>
      </div>
      <div className="right">
        {name === "puraxel" || name === "핵심기술" ? (
          <Component2 />
        ) : name === "PURAXEL-Me" ? (
          <Link
            to={{
              pathname: "http://m.lmdt.cafe24.com",
            }}
            target="_blank"
            className="shop"
          >
            <ThemeProvider theme={theme1}>
              <IconButton>
                <div className="shopIcon">
                  <p className="shopText">{text}</p>
                  <img src={Shop} alt="" />
                </div>
              </IconButton>
            </ThemeProvider>
          </Link>
        ) : (
          <ThemeProvider theme={theme1}>
            <IconButton onClick={handleOpen2}>
              <div className="shopIcon">
                <p className="shopText">{text}</p>
                <img src={Inquiry} alt="" />
              </div>
            </IconButton>
          </ThemeProvider>
        )}

        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <ThemeProvider theme={theme1}>
              <IconButton onClick={toggleDrawer(anchor, true)}>
                <img
                  src={Ham}
                  style={{
                    width: "3.2rem",
                  }}
                  alt=""
                />
              </IconButton>
            </ThemeProvider>

            <Drawer
              anchor={"right"}
              open={close}
              hideBackdrop
              PaperProps={{
                sx: {
                  minWidth: 320,
                  color: "#55576F",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  zIndex: 99999,
                  backdropFilter: "blur(40px)",
                  position: "fixed",
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

              <div id="transition-modal-description" style={{ marginTop: 12 }}>
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
              </div>
            </Box>
          </Fade>
        </Modal>

        <Modal
          open={open2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          hideBackdrop={true}
          sx={{
            minWidth: "320px",
          }}
        >
          <Box sx={style3}>
            <div
              id="modal-modal-title2"
              variant="h6"
              component="h2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #F2F3F6",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 300,
                    fontSize: "2rem",
                    color: "rgba(85, 87, 111, 1)",
                    padding: "8px",
                  }}
                >
                  제품문의
                </p>
              </div>
              <IconButton onClick={handleClose2}>
                <img
                  src={Close}
                  style={{
                    width: "3.2rem",
                  }}
                  alt=""
                />
              </IconButton>
            </div>

            <ThemeProvider theme={theme3}>
              <Container component="main" maxWidth="500px">
                <CssBaseline />
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <FormControl component="fieldset" variant="standard">
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          inputProps={{ maxLength: 12 }}
                          autoFocus
                          variant="standard"
                          required
                          fullWidth
                          id="name"
                          name="name"
                          label="성명"
                          error={nameError !== "" || false}
                        />
                        <FormHelperText>{nameError}</FormHelperText>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          inputProps={{ maxLength: 12 }}
                          required
                          fullWidth
                          variant="standard"
                          type="text"
                          id="phone"
                          name="phone"
                          label="연락처(숫자만 입력)"
                          error={phoneError !== "" || false}
                        />
                        <FormHelperText>{phoneError}</FormHelperText>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          inputProps={{ maxLength: 20 }}
                          required
                          fullWidth
                          variant="standard"
                          type="email"
                          id="email"
                          name="email"
                          label="이메일"
                          error={emailError !== "" || false}
                        />
                        <FormHelperText>{emailError}</FormHelperText>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          inputProps={{ maxLength: 12 }}
                          maxLength="10"
                          fullWidth
                          variant="standard"
                          type="text"
                          id="password"
                          name="password"
                          label="상호명"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <p
                          style={{
                            fontFamily: "Pretendard",
                            fontSize: "12px",
                            color: "#A7ABB6",
                            marginTop: "-2px",
                          }}
                        >
                          연락 가능 시간대
                        </p>
                        <Grid container spacing={1}>
                          <Grid item xs={2.2}>
                            <TextField
                              inputProps={{ maxLength: 2 }}
                              id="standard-required"
                              variant="standard"
                            />
                          </Grid>
                          <Grid
                            item
                            sx={{
                              fontFamily: "Pretendard",
                              fontSize: "1.4rem",
                              fontWeight: 600,
                              color: "#7E818D",
                            }}
                          >
                            ~
                          </Grid>
                          <Grid item xs={2.2}>
                            <TextField
                              inputProps={{ maxLength: 2 }}
                              id="standard-required"
                              variant="standard"
                            />
                          </Grid>
                          <Grid
                            item
                            sx={{
                              fontFamily: "Pretendard",
                              fontSize: "1.2rem",
                              fontWeight: 700,
                              color: "#7E818D",
                              textAlign: "center",
                              verticalAlign: "center",
                            }}
                          >
                            시
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ width: "2rem", height: "2rem" }}
                                onChange={handleAgree}
                                icon={<CheckCircleOutline />}
                                checkedIcon={<CheckCircle />}
                              />
                            }
                            label="개인정보 수집 및 활용에 동의합니다."
                          />

                          <p
                            onClick={handleOpen3}
                            style={{
                              fontFamily: "Pretendard",
                              fontSize: "1.2rem",
                              color: "#A7ABB6",
                              cursor: "pointer",
                            }}
                          >
                            자세히 보기 &gt;
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ borderTop: "1px solid #F2F3F6" }}>
                          <textarea
                            style={{
                              width: "100%",
                              height: "20rem",
                              resize: "none",
                              border: "none",
                              padding: "20px",
                              fontFamily: "Pretendard",
                              fontSize: "1.4rem",
                              color: "#4D5058",
                              outline: "none",
                              placeholder: "A7ABB6",
                            }}
                            type="text"
                            placeholder="문의 내용을 입력해 주세요"
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        bgcolor: "#DFE1E8",
                        height: "5.6rem",
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        fontFamily: "Pretendard",
                      }}
                    >
                      문의신청
                    </Button>
                    <FormHelperText>{registerError}</FormHelperText>
                  </FormControl>
                </Box>
              </Container>
            </ThemeProvider>
          </Box>
        </Modal>

        <Modal
          onClick={handleClose3}
          open={open3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box></Box>
        </Modal>
      </div>
    </header>
  ) : (
    <Navbars />
  );
}

export default Header;
