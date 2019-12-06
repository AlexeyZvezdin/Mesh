import React from 'react';
import { connect } from 'react-redux';
import { fetchDrivers } from '../redux/actions/index';

const mapStateToProps = ({ reducer }, ownProps) => {
  return {
    driversOffset: reducer.driversOffset,
    total: reducer.totalDrivers,
    direction: ownProps.direction
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDrivers: id => dispatch(fetchDrivers(id))
});

const _ControlButton = ({ fetchDrivers, driversOffset, total, direction }) => {
  console.log(driversOffset, ' FUNCKING driversOffset');
  navigator.storage.estimate().then(function(estimate) {
    console.log(((estimate.usage / estimate.quota) * 100).toFixed(2));
  });
  switch (direction) {
    case 'back': {
      console.log(direction, ' DIR BUT');
      if (driversOffset >= 10) {
        return (
          <button onClick={() => fetchDrivers(driversOffset - 10)}>
            Previous Ten
          </button>
        );
      }
      return <button disabled>Previous Ten</button>;
    }
    case 'forward': {
      if (total - 10 > driversOffset) {
        return (
          <button onClick={() => fetchDrivers(driversOffset + 10)}>
            Next Ten
          </button>
        );
      }
      return <button disabled>Next Ten</button>;
    }
    default: {
      return 'error';
    }
  }
};

const ControlButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ControlButton);

export { ControlButton };

// const _PrevButton = ({ fetchDrivers, driversOffset, total }) => {
//   if (driversOffset >= 10) {
//     return (
//       <button onClick={() => fetchDrivers(driversOffset - 10)}>
//         Previous Ten
//       </button>
//     );
//   }
//   return <button disabled>Previous Ten</button>;
// };

// const _NextButton = ({ fetchDrivers, driversOffset, total }) => {
//   if (total - 10 > driversOffset) {
//     return (
//       <button onClick={() => fetchDrivers(driversOffset + 10)}>Next Ten</button>
//     );
//   }
//   return <button disabled>Next Ten</button>;
// };

// const PrevButton = connect(mapStateToProps, mapDispatchToProps)(_PrevButton);
// const NextButton = connect(mapStateToProps, mapDispatchToProps)(_NextButton);

// export { PrevButton, NextButton };
