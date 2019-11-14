import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import("./index.css");

import Tables from "./components/Tables";

function App() {
  return (
    <Router>
      <div className="App">
        <header id="header">
          <h1>F1 Formula stats</h1>
        </header>
        <div id="container">
          <main id="main">
            <h2>Start editing to see some magic happen!</h2>
            {/* f1/drivers.json?limit=1 легкий запрос 
            чтобы взять оттуда тотал всех гонщиков для навигации */}
            {/* circuits: total is equal to rounds? Yes, seems to me */}
            {/* /f1/2012/20/results.json req to result of round */}
            {/* /f1/curcuits.json req to rounds, which is total parameter */}
            {/* table box, then two routes: one is racers with embbed racer, second is   */}

            <Route exact path="/racers" component={Tables} />
          </main>
        </div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
