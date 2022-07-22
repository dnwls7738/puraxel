import React, { useState } from "react";
import { Link } from "react-router-dom";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Drawer,
  List,
  IconButton,
} from "@mui/material";

function Header() {
  const [state, setState] = React.useState({
    right: false,
  });
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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header id="header">
      <div className="header__logo">
        <Link to="/">ME</Link>
      </div>

      <div className="right">
        <Link to="" className="shop">
          <div className="shopText">
            <span>shop</span>
          </div>
          <StorefrontOutlinedIcon className="shopIcon" />
        </Link>

        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton>
              {state ? (
                <MenuIcon
                  onClick={toggleDrawer(anchor, true)}
                  sx={{
                    zIndex: 99999,
                  }}
                />
              ) : (
                <CloseIcon onClick={toggleDrawer(anchor, false)} />
              )}
            </IconButton>

            <Drawer
              anchor={"right"}
              open={close}
              onClose={toggleDrawer(anchor, false)}
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
