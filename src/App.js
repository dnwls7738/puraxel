import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Fx5000 from "./components/pages/Fx5000";
import Hair from "./components/pages/Hair";
import Main from "./components/pages/Main";
import Me from "./components/pages/Me";
import PuraTech from "./components/pages/PuraTech";

function App() {
  const Minwidth = "1024px";
  const Redirect_Web = "https://puraxel.vercel.app/";
  const aaaa = () => (window.location.href = Redirect_Web);
  const Mobile = window.innerWidth >= Minwidth;

  useEffect(() => {
    if (Mobile) {
      aaaa();
    } else {
      return;
    }

    window.onresize = function (e) {
      console.log(e);
      console.log(window.innerHeight);
      console.log(window.innerWidth);
      if (Mobile) {
        aaaa();
      } else {
        return;
      }
    };
  });

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/PURAXEL-Me" exact component={Me} />
        <Route path="/PURAXEL" exact component={Fx5000} />
        <Route path="/PURAXEL-Hair" exact component={Hair} />
        <Route path="/핵심기술" exact component={PuraTech} />
      </Switch>
    </Router>
  );
}

export default App;
