import {axiosWithAuth} from '../utils/axiosWithAuth'

export const POSTING_FRIEND_START = 'POSTING_FRIEND_START'
export const POSTING_FRIEND_SUCCESS = 'POSTING_FRIEND_SUCCESS'
export const POSTING_FRIEND_FAILURE = 'POSTING_FRIEND_FAILURE'


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

export const postFriends = () => dispatch => {
    dispatch({type: POSTING_FRIEND_START})

    axiosWithAuth()
    .post('/friends')
    .then(response => {
        console.log('post',response)
        dispatch({type: POSTING_FRIEND_SUCCESS, payload: response.data})
    })

    .catch(response => {
        dispatch({type: POSTING_FRIEND_FAILURE, payload: response.error})
    })
}