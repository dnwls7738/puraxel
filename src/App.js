import { React, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MobileView, isMobile, isTablet } from "react-device-detect";

// import Fx5000 from "./components/pages/Fx5000";
// import Hair from "./components/pages/Hair";
// import Main from "./components/pages/Main";
// import Me from "./components/pages/Me";
// import PuraTech from "./components/pages/PuraTech";

const REDIRECT_MOBILE = "https://dev.puraxel.co.kr/";

const Main = lazy(() => import("./components/pages/Main"));
const Fx5000 = lazy(() => import("./components/pages/Fx5000"));
const Hair = lazy(() => import("./components/pages/Hair"));
const Me = lazy(() => import("./components/pages/Me"));
const PuraTech = lazy(() => import("./components/pages/PuraTech"));

function App() {
  return isMobile || isTablet ? (
    <MobileView>
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Main} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/PURAXEL-Me" exact component={Me} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/PURAXEL" exact component={Fx5000} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/PURAXEL-Hair" exact component={Hair} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/핵심기술" exact component={PuraTech} />
          </Suspense>
        </Switch>
      </Router>
    </MobileView>
  ) : (
    <>{(window.location.href = REDIRECT_MOBILE)}</>
  );
}

export default App;
