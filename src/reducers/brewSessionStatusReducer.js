import {READ_BREWSESSION_STARTED, READ_BREWSESSION_SUCCEEDED, READ_BREWSESSION_FAILED} from '../constants/actionTypes';
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
        return newState;

      case READ_BREWSESSION_FAILED:
        newState = objectAssign({}, state);
        newState.isBrewSessionRunning = false;
        // TODO: set some kind of error message to return and show
        return newState;

    default:
      return state;
  }

}