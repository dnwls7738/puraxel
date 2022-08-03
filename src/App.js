import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inquiry from "./components/pages/Inquiry";
import Fx5000 from "./components/pages/Fx5000";
import Hair from "./components/pages/Hair";
import Main from "./components/pages/Main";
import Me from "./components/pages/Me";
import PuraTech from "./components/pages/PuraTech";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/ME" exact component={Me} />
      <Route path="/FX-5000" exact component={Fx5000} />
      <Route path="/HAIR" exact component={Hair} />
      <Route path="/PURA-TECH" exact component={PuraTech} />
      <Route path="/INQUIRY" exact component={Inquiry} />
    </Router>
  );
}

export default App;
