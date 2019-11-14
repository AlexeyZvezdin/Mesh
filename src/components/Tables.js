import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "../axios";

// use links and routes together

function Tables() {
  let getRacersData = async offset => {
    let limit = 10;

    let drivers = Array();
    // const F1Drivers = await axios
    //   .get(`/drivers.json?limit=${limit}&offset=${offset}`)
    //   .then(res => {
    //     drivers = res.data["MRData"]["DriverTable"]["Drivers"];
    //     console.log(drivers);
    //   });
  };
  getRacersData(10);
  return (
    <section className="tablesBox">
      <nav className="tablesBox__nav">
        <Link className="tablesBox__nav_link">Racers</Link>
        <Link className="tablesBox__nav_link">Rounds</Link>
      </nav>
      <article>Racers or Rounds</article>
    </section>
  );
}

export default Tables;
