import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Accueil from "./components/pages/Accueil";
import Formations from "./components/pages/Formations";
import Contact from "./components/pages/Contact";
import Actualites from "./components/pages/Actualites";
import Solutions from "./components/pages/Solutions";
import Engagements from "./components/pages/Engagements";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/actualites" component={Actualites} />
          <Route path="/formations" component={Formations} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/engagements" component={Engagements} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <div className="spacer"></div>
      <Footer />
    </div>
  );
}

export default App;
