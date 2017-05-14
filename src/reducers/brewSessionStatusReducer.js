import {READ_BREWSESSION_STARTED, READ_BREWSESSION_SUCCEEDED, READ_BREWSESSION_FAILED,
        BREWSESSION_STARTSTOP_STARTED, BREWSESSION_STARTSTOP_SUCCEEDED, BREWSESSION_STARTSTOP_FAILED,
        READ_BREWSESSION_DATA_STARTED, READ_BREWSESSION_DATA_SUCCEEDED, READ_BREWSESSION_DATA_FAILED,
        UPDATE_BREWSESSIONSTATUS_FIELD} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function brewSessionStatusReducer(state = initialState.brewSessionStatus, action) {
  let newState;

  switch (action.type) {
      case READ_BREWSESSION_STARTED:
        return state;

      case READ_BREWSESSION_SUCCEEDED:
        newState = objectAssign({}, state);
        newState.isBrewSessionRunning = action.status.isBrewSessionRunning;
        if (newState.isBrewSessionRunning) {
          newState.sessionName = action.status.sessionName;
          newState.mashTemp = Math.round(Number(action.status.mashTemp * 9/5 + 32).toFixed(2));
          newState.mashHoldTime = action.status.mashHoldTime;
        }
      
        return newState;

      case READ_BREWSESSION_FAILED:
        newState = objectAssign({}, state);
        newState.isBrewSessionRunning = false;
        // TODO: set some kind of error message to return and show
        return newState;

      case BREWSESSION_STARTSTOP_STARTED:
        return state;

      case BREWSESSION_STARTSTOP_SUCCEEDED:
        // newState = objectAssign({}, state);
        // if (action.status.action == 'start') {
        //   newState.isBrewSessionRunning = false;
        // }
        // else {
        //   newState.isBrewSessionRunning = true;
        // }
        // return newState;

        // We're already updating the status on a timer anyway.
        // Not sure we need to do anything here.
        return state;

      case BREWSESSION_STARTSTOP_FAILED:
        // TODO: set some kind of error message to return and show
        console.log('BREWSESSION_STARTSTOP_FAILED ERROR');
        return state;
      
      case READ_BREWSESSION_DATA_STARTED:
        return state;

      case READ_BREWSESSION_DATA_SUCCEEDED:
        newState = objectAssign({}, state);
        newState.data = action.data;
        return newState;

        case READ_BREWSESSION_DATA_FAILED:
          // TODO: set some kind of error message to return and show
          console.log('READ_BREWSESSION_DATA_FAILED ERROR');
          return state;

        case UPDATE_BREWSESSIONSTATUS_FIELD:
          newState = objectAssign({}, state);
          newState[action.fieldName] = action.value;
          return newState;          

    default:
      return state;
  }

}