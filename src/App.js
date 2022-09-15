import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import Fx5000 from "./components/pages/Fx5000";
import Hair from "./components/pages/Hair";
import Main from "./components/pages/Main";
import Me from "./components/pages/Me";
import PuraTech from "./components/pages/PuraTech";

function App() {
  const matches = useMediaQuery("(max-width:1024px)");
  // const MINWIDTH = 1024;
  const REDIRECT_Web = "https://puraxel.vercel.app/";
  // const windowSizeDetectCondition = window.innerWidth > MINWIDTH;

  // useEffect(() => {

  //   windowSizeDetectCondition ? {window.location.href = REDIRECT_Web} : "";

  // });

  return matches === true ? (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/PURAXEL-Me" exact component={Me} />
        <Route path="/PURAXEL" exact component={Fx5000} />
        <Route path="/PURAXEL-Hair" exact component={Hair} />
        <Route path="/핵심기술" exact component={PuraTech} />
      </Switch>
    </Router>
  ) : (
    <>{(window.location.href = REDIRECT_Web)} </>
  );
}

export default App;
