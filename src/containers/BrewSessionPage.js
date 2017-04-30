import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/brewSessionActions';
import BrewSessionForm from '../components/BrewSessionForm';

export const BrewSessionPage = (props) => {
  return (
    <BrewSessionForm
      getTemp={props.actions.getTemp}
      brewSession={props.brewSession}
    />
  );
};

BrewSessionPage.propTypes = {
  actions: PropTypes.object.isRequired,
  brewSession: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    brewSession: state.brewSession
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrewSessionPage);
