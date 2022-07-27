import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fx5000 from "./components/pages/Fx5000";
import Hair from "./components/pages/Hair";
import Main from "./components/pages/Main";
import Me from "./components/pages/Me";
import PuraTech from "./components/pages/PuraTech";

// const setScreenSize = () => {
//   let vh = window.innerHeight * 0.01;

//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// };
// setScreenSize();
// window.addEventListener("resize", () => setScreenSize());

function App() {
  let vh = 0;

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const setVh = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", setVh);
  setVh();

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/ME" exact component={Me} />
      <Route path="/FX-5000" exact component={Fx5000} />
      <Route path="/HAIR" exact component={Hair} />
      <Route path="/PURA-TECH" exact component={PuraTech} />
    </Router>
  );
}

export default App;
