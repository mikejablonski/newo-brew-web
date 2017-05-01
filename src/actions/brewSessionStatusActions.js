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