import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import store from './redux/store';
import { fetchDrivers } from './redux/actions/index';

import './index.css';

import TableWrapper from './components/TableWrapper';

const mapStateToProps = state => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    // num is used in demo purpose
    fetchDrivers: num => dispatch(fetchDrivers(num))
  };
}

// eslint-disable-next-line no-underscore-dangle
function _App(props) {
  if (props.reducer.driversIsFetched === false) {
    // init app
    props.fetchDrivers();
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="App">
      <header id="header">
        <h1>F1 Formula stats</h1>
      </header>
      <div id="container">
        <main id="main">
          <h2>Start editing to see some magic happen!</h2>
          {/* f1/drivers.json?limit=1 легкий запрос 
            чтобы взять оттуда тотал всех гонщиков для навигации */}
          {/* http://ergast.com/api/f1/drivers/alonso/races.json - подробная инфа */}
          {/* http://ergast.com/api/f1/2011/5/drivers/alonso/laps/1.json - заезд это lap */}
          <TableWrapper />
        </main>
      </div>
    </div>
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
