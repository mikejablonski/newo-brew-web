import * as types from '../constants/actionTypes';

export function brewSessionStatusHasErrored(bool) {
    return {
        type: types.READ_BREWSESSION_FAILED,
        hasErrored: bool
    };
}
export function brewSessionStatusIsLoading(bool) {
    return {
        type: types.READ_BREWSESSION_STARTED,
        isLoading: bool
    };
}
export function brewSessionStatusFetchDataSuccess(status) {
    return {
        type: types.READ_BREWSESSION_SUCCEEDED,
        status
    };
}

export function getIsBrewSessionRunning(url) {
    return (dispatch) => {
        dispatch(brewSessionStatusIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(brewSessionStatusIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((status) => dispatch(brewSessionStatusFetchDataSuccess(status)))
            .catch(() => dispatch(brewSessionStatusHasErrored(true)));
    };
}

export function brewSessionStartStopHasErrored(bool) {
    return {
        type: types.BREWSESSION_STARTSTOP_FAILED,
        hasErrored: bool
    };
}
export function brewSessionStartStopIsLoading(bool) {
    return {
        type: types.BREWSESSION_STARTSTOP_STARTED,
        isLoading: bool
    };
}
export function brewSessionStartStopSuccess(status) {
    return {
        type: types.BREWSESSION_STARTSTOP_SUCCEEDED,
        status
    };
}

export function sendBrewSessionStartStop(url) {
    return (dispatch) => {
        dispatch(brewSessionStartStopIsLoading(true));
        console.log(url);
        fetch(url, {method: 'POST'})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(brewSessionStartStopIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((status) => dispatch(brewSessionStartStopSuccess(status)))
            .catch(() => dispatch(brewSessionStartStopHasErrored(true)));
    };
}
