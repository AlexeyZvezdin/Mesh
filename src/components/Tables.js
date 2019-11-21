import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import { Drivers } from "./DataTabs";
import { Laps } from "./Laps";
// use links and routes together

function Tables(props) {
  console.log(" MY PROPS ", props);
  return (
    <section className="tablesBox">
      <nav className="tablesBox__nav">
        <NavLink
          to="/drivers"
          className="tablesBox__nav_link"
          activeClassName="tablesBox__nav_link__active"
        >
          Racers
        </NavLink>
        <NavLink
          to="/laps"
          className="tablesBox__nav_link"
          activeClassName="tablesBox__nav_link__active"
        >
          Rounds
        </NavLink>
        <button onClick={() => console.log(props)}>CLICK</button>
      </nav>
      <article>
        Racers or Rounds
        <Switch>
          <Route path="/drivers" render={() => <Drivers {...props} />} />
          <Route path="/laps" render={() => <Laps />} />
          <Redirect to={"/"} />
        </Switch>
      </article>
    </section>
  );
}

export default Tables;
