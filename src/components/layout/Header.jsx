import React, { useState } from "react";
import { Link } from "react-router-dom";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MenuIcon from "@mui/icons-material/Menu";
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
} from "@mui/material";

function Header({ name, text }) {
  const [close, setClose] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    setClose(!close);
    console.log(open);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 360,
        marginTop: 10,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <span className="product">product</span>
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
      <div>
        <div className="product">
          <span>puraxel mall</span>
        </div>
        <Link
          to={{
            pathname: "https://facebook.com",
          }}
          target="_blank"
        >
          <div className="mall">
            <span>Shop</span>
          </div>
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
        <span>사업자 정보</span>
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
            {name === "ME" ? <StorefrontOutlinedIcon /> : <GroupIcon />}
          </div>
        </Link>

        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton>
              {!close ? (
                <MenuIcon
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
          </React.Fragment>
        ))}
      </div>
    </header>
  );
}

export default Header;
