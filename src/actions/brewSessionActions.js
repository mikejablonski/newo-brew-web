import * as types from '../constants/actionTypes';

export function tempHasErrored(bool) {
    return {
        type: types.READ_TEMP_FAILED,
        hasErrored: bool
    };
}
export function tempIsLoading(bool) {
    return {
        type: types.READ_TEMP_STARTED,
        isLoading: bool
    };
}
export function tempFetchDataSuccess(temp) {
    return {
        type: types.READ_TEMP_SUCCEEDED,
        temp
    };
}

export function getTemp(url) {
    return (dispatch) => {
        dispatch(tempIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(tempIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((temp) => dispatch(tempFetchDataSuccess(temp)))
            .catch(() => dispatch(tempHasErrored(true)));
    };
}

export function pumpHasErrored(bool) {
    return {
        type: types.READ_PUMP_FAILED,
        hasErrored: bool
    };
}
export function pumpIsLoading(bool) {
    return {
        type: types.READ_PUMP_STARTED,
        isLoading: bool
    };
}
export function pumpFetchDataSuccess(status) {
    return {
        type: types.READ_PUMP_SUCCEEDED,
        status
    };
}

export function getPumpStatus(url) {
    return (dispatch) => {
        dispatch(pumpIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(pumpIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((status) => dispatch(pumpFetchDataSuccess(status)))
            .catch(() => dispatch(pumpHasErrored(true)));
    };
}

export function heaterHasErrored(bool) {
    return {
        type: types.READ_HEATER_FAILED,
        hasErrored: bool
    };
}
export function heaterIsLoading(bool) {
    return {
        type: types.READ_HEATER_STARTED,
        isLoading: bool
    };
}
export function heaterFetchDataSuccess(status) {
    return {
        type: types.READ_HEATER_SUCCEEDED,
        status
    };
}

export function getHeaterStatus(url) {
    return (dispatch) => {
        dispatch(heaterIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(heaterIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((status) => dispatch(heaterFetchDataSuccess(status)))
            .catch(() => dispatch(heaterHasErrored(true)));
    };
}