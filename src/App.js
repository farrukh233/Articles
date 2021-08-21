import React from "react";
import Articles from "./components/Articles/Articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Header from "./components/Header/Header";

function App() {
  return (
    <div style={{ padding: "20px 30px" }}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact={true}>
            <Articles />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
