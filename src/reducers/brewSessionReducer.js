import {READ_TEMP_SENSOR, READ_TEMP_STARTED, READ_TEMP_SUCCEEDED, READ_TEMP_FAILED} from '../constants/actionTypes';
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
    case READ_TEMP_SENSOR:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.degreesF = state.degreesF + 1;

      return newState;

      case READ_TEMP_STARTED:
        return state;

    case READ_TEMP_SUCCEEDED:
        newState = objectAssign({}, state);
        newState[action.fieldName] = action.value;
        newState.degreesF = action.payload.degreesF;
        break;

    case READ_TEMP_FAILED:
        newState = objectAssign({}, state);
        newState[action.fieldName] = action.value;
        newState.degreesF = -1;
        break;

    default:
      return state;
  }
}
