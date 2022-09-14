import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MobileView, isMobile, isTablet } from "react-device-detect";

import Fx5000 from "./components/pages/Fx5000";
import Hair from "./components/pages/Hair";
import Main from "./components/pages/Main";
import Me from "./components/pages/Me";
import PuraTech from "./components/pages/PuraTech";

function App() {
  const MINWIDTH = 1024;
  const REDIRECT_MOBILE = "https://puraxel.vercel.app/";
  const aaaa = () => (window.location.href = REDIRECT_MOBILE);
  const Mobile = window.innerHeight >= MINWIDTH;

  useEffect(() => {
    window.onresize = function (e) {
      console.log(e);
      console.log(window.innerHeight);
      console.log(window.innerWidth);
      console.log(window.location);
      if (Mobile) {
        aaaa();
      } else {
        return;
      }
      // bbbb ? aaaa : "";
    };
  });
  return isMobile || isTablet ? (
    <MobileView>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/PURAXEL-Me" exact component={Me} />
          <Route path="/PURAXEL" exact component={Fx5000} />
          <Route path="/PURAXEL-Hair" exact component={Hair} />
          <Route path="/핵심기술" exact component={PuraTech} />
        </Switch>
      </Router>
    </MobileView>
  ) : (
    <>{(window.location.href = REDIRECT_MOBILE)}</>
  );
}

export default App;
