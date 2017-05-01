import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/brewSessionActions';
import * as brewSessionStatusActions from '../actions/brewSessionStatusActions';
import BrewSessionForm from '../components/BrewSessionForm';
import BrewSessionStatus from '../components/BrewSessionStatus';

export const BrewSessionPage = (props) => {
  return (
    <div>
      <BrewSessionForm
        getTemp={props.actions.getTemp}
        getPumpStatus={props.actions.getPumpStatus}
        getHeaterStatus={props.actions.getHeaterStatus}
        brewSession={props.brewSession}
      />
      <BrewSessionStatus 
        brewSessionStatus={props.brewSessionStatus} 
        getIsBrewSessionRunning={props.brewSessionStatusActions.getIsBrewSessionRunning}
      />
    </div>
  );
};

BrewSessionPage.propTypes = {
  actions: PropTypes.object.isRequired,
  brewSessionStatusActions: PropTypes.object.isRequired,
  brewSession: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    brewSession: state.brewSession,
    brewSessionStatus: state.brewSessionStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    brewSessionStatusActions: bindActionCreators(brewSessionStatusActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrewSessionPage);
