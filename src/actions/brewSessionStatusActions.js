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

export function sendBrewSessionStartStop(url, sessionName = 'NA', mashTemp = 0, mashHoldTime = 0) {
    return (dispatch) => {
        dispatch(brewSessionStartStopIsLoading(true));
        
        let postBody = {};
        postBody.sessionName = sessionName;
        postBody.mashTemp = mashTemp;
        postBody.mashHoldTime = mashHoldTime;

        fetch(url, {method: 'POST', body: JSON.stringify(postBody), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }})
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

export function brewSessionDataHasErrored(bool) {
    return {
        type: types.READ_BREWSESSION_DATA_FAILED,
        hasErrored: bool
    };
}
export function brewSessionDataIsLoading(bool) {
    return {
        type: types.READ_BREWSESSION_DATA_STARTED,
        isLoading: bool
    };
}
export function brewSessionDataFetchDataSuccess(data) {
    return {
        type: types.READ_BREWSESSION_DATA_SUCCEEDED,
        data
    };
}

export function getBrewSessionData(url) {
    return (dispatch) => {
        dispatch(brewSessionDataIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(brewSessionDataIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((data) => dispatch(brewSessionDataFetchDataSuccess(data)))
            .catch(() => dispatch(brewSessionDataHasErrored(true)));
    };
}

export function updateForm(fieldName, value) {
    return {
        type: types.UPDATE_BREWSESSIONSTATUS_FIELD,
        fieldName,
        value
    };    
}