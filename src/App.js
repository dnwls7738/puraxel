import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Me from "./components/pages/Me";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/Me" exact component={Me} />
    </Router>
  );
}

export default App;
