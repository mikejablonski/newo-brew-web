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