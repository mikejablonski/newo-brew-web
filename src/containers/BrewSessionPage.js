import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/brewSessionActions';
import * as brewSessionStatusActions from '../actions/brewSessionStatusActions';
import * as tempStatusActions from '../actions/tempStatusActions';
import BrewSessionForm from '../components/BrewSessionForm';
import BrewSessionStatus from '../components/BrewSessionStatus';
import TempStatus from '../components/TempStatus';

export const BrewSessionPage = (props) => {
  return (
    <div>
      <BrewSessionStatus 
        brewSessionStatus={props.brewSessionStatus} 
        getIsBrewSessionRunning={props.brewSessionStatusActions.getIsBrewSessionRunning}
        sendBrewSessionStartStop={props.brewSessionStatusActions.sendBrewSessionStartStop}
        getBrewSessionData={props.brewSessionStatusActions.getBrewSessionData}
      />
      <TempStatus
        tempStatus={props.tempStatus}
        getTemp={props.tempStatusActions.getTemp}
      />
      <BrewSessionForm
        getPumpStatus={props.actions.getPumpStatus}
        getHeaterStatus={props.actions.getHeaterStatus}
        brewSession={props.brewSession}
      />
    </div>
  );
};

BrewSessionPage.propTypes = {
  actions: PropTypes.object.isRequired,
  brewSessionStatusActions: PropTypes.object.isRequired,
  tempStatusActions: PropTypes.object.isRequired,

  brewSession: PropTypes.object.isRequired,
  brewSessionStatus: PropTypes.object.isRequired,
  tempStatus: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    brewSession: state.brewSession,
    brewSessionStatus: state.brewSessionStatus,
    tempStatus: state.tempStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    brewSessionStatusActions: bindActionCreators(brewSessionStatusActions, dispatch),
    tempStatusActions: bindActionCreators(tempStatusActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrewSessionPage);
