import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCHING_DATA_START = 'FETCHING_DATA_START'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE'


export const getFriends = () => dispatch => {
    dispatch({type: FETCHING_DATA_START})

    axiosWithAuth()
    .get('/friends')
    .then(response => {
        dispatch({type: FETCHING_DATA_SUCCESS, payload:response.data })
    })
    
    .catch(error => {
        dispatch({type: FETCHING_DATA_FAILURE, payload: error.response})
    })
}

