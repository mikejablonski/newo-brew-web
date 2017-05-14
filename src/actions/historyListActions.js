import * as types from '../constants/actionTypes';

export function historyHasErrored(bool) {
    return {
        type: types.READ_BREWSESSION_HISTORY_FAILED,
        hasErrored: bool
    };
}
export function historyIsLoading(bool) {
    return {
        type: types.READ_BREWSESSION_HISTORY_STARTED,
        isLoading: bool
    };
}
export function historyFetchDataSuccess(history) {
    return {
        type: types.READ_BREWSESSION_HISTORY_SUCCEEDED,
        history
    };
}

export function getHistory(url) {
    return (dispatch) => {
        dispatch(historyIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(historyIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((history) => dispatch(historyFetchDataSuccess(history)))
            .catch(() => dispatch(historyHasErrored(true)));
    };
}