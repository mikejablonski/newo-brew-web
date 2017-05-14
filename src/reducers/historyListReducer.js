import {READ_BREWSESSION_HISTORY_STARTED, READ_BREWSESSION_HISTORY_FAILED, READ_BREWSESSION_HISTORY_SUCCEEDED} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function historyStatusReducer(state = initialState.brewHistory, action) {
  let newState;

  switch (action.type) {
      case READ_BREWSESSION_HISTORY_STARTED:
        // don't show anything different while loading.
        return state;

    case READ_BREWSESSION_HISTORY_SUCCEEDED:
        newState = objectAssign({}, state);
        newState.data = action.history.data;
        return newState;

    case READ_BREWSESSION_HISTORY_FAILED:
        // TODO: set some kind of error message to return and show
        console.log('READ_BREWSESSION_HISTORY_FAILED ERROR');
        return state;

    default:
      return state;
  }
}        