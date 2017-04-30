import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function getTemp() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    dispatch({type: types.READ_TEMP_STARTED});

    fetch('http://localhost:3001/temp')
        .then(response => dispatch({type: types.READ_TEMP_SUCCEEDED, payload: response}))
        .catch(error => dispatch({type: types.READ_TEMP_FAILED, error: error}));
  };
}
