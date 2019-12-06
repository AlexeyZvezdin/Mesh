import React from 'react';
import { fetchDrivers } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Tables from './Tables';

const mapStateToProps = ({ reducer: { drivers } }) => {
  return {
    drivers: drivers
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDrivers: id => dispatch(fetchDrivers(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
