import React from "react";
import { connect } from "react-redux";
import { fetchDrivers } from "../redux/actions/index";

const mapStateToProps = state => {
  return {
    driversOffset: state.reducer.driversOffset,
    total: state.reducer.totalDrivers
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDrivers: id => dispatch(fetchDrivers(id))
});

const _PrevButton = props => {
  console.log(props, " PREV BUTT");
  if (props.driversOffset >= 10) {
    return (
      <button onClick={() => props.fetchDrivers(props.driversOffset - 10)}>
        Previous Ten
      </button>
    );
  }
  return <button disabled>Previous Ten</button>;
};

const _NextButton = props => {
  console.log(props, " NEXT BUTT");
  if (props.total - 10 > props.driversOffset) {
    return (
      <button onClick={() => props.fetchDrivers(props.driversOffset + 10)}>
        Next Ten
      </button>
    );
  }
  return <button disabled>Next Ten</button>;
};

const PrevButton = connect(mapStateToProps, mapDispatchToProps)(_PrevButton);
const NextButton = connect(mapStateToProps, mapDispatchToProps)(_NextButton);

export { PrevButton, NextButton };
