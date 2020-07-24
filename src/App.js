import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

import "./App.css";

import Accueil from "./components/pages/Accueil";
import Formations from "./components/pages/Formations";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/formations" component={Formations} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
