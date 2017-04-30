import {READ_TEMP_STARTED, READ_TEMP_SUCCEEDED, READ_TEMP_FAILED} from '../constants/actionTypes';
import {READ_PUMP_STARTED, READ_PUMP_SUCCEEDED, READ_PUMP_FAILED} from '../constants/actionTypes';
import {READ_HEATER_STARTED, READ_HEATER_SUCCEEDED, READ_HEATER_FAILED} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function brewSessionReducer(state = initialState.brewSession, action) {
  let newState;

  switch (action.type) {
      case READ_TEMP_STARTED:
        // example to show "loading" and "done" states in the UI.
        // newState = objectAssign({}, state);
        // if (action.isLoading) {
        //   newState.degreesF = 2;
        // }
        // else {
        //   newState.degreesF = 3;
        // }
        // return newState;

        // don't show anything different while loading.
        return state;

    case READ_TEMP_SUCCEEDED:
        newState = objectAssign({}, state);
        newState.degreesF = action.temp.degreesF;
        return newState;

    case READ_TEMP_FAILED:
        newState = objectAssign({}, state);
        newState.degreesF = -1;
        return newState;

    case READ_PUMP_STARTED:
        return state;

    case READ_PUMP_SUCCEEDED:
        newState = objectAssign({}, state);
        newState.pumpStatus = action.status.description;
        return newState;  

    case READ_PUMP_FAILED:
        newState = objectAssign({}, state);
        newState.pumpStatus = 'error';
        return newState;

    case READ_HEATER_STARTED:
        return state;

    case READ_HEATER_SUCCEEDED:
        newState = objectAssign({}, state);
        newState.heaterStatus = action.status.description;
        return newState;  

    case READ_HEATER_FAILED:
        newState = objectAssign({}, state);
        newState.heaterStatus = 'error';
        return newState;        

    default:
      return state;
  }
}
