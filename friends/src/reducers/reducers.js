import {FETCHING_DATA_START, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../actions/FriendsList'
import {POSTING_FRIEND_FAILURE, POSTING_FRIEND_SUCCESS, POSTING_FRIEND_START} from '../actions/FriendsList'

export const initialState = {
    friends: [
    {
      id: 1,
      name: 'Ben',
      age: 30,
      email: 'ben@lambdaschool.com'
    },
    {
      id: 2,
      name: 'Austen',
      age: 45,
      email: 'austen@lambdaschool.com'
    },
    {
      id: 3,
      name: 'Ryan',
      age: 15,
      email: 'ryan@lambdaschool.com'
    },
    {
      id: 4,
      name: 'Dustin',
      age: 25,
      email: 'D-munny@lambdaschool.com'
    },
    {
      id: 5,
      name: 'Sean',
      age: 35,
      email: 'sean@lambdaschool.com'
    },
    {
      id: 6,
      name: 'Michelle',
      age: 67,
      email: 'michelle@gmail.com'
    },

    
  ],
    isFetching: false,
    error: ''
}

  export const FriendsReducer = (state = initialState, action) => {
      switch(action.type){
             case FETCHING_DATA_START:
                return{
                    ...state,
                    isFetching: true,
                    error: ''
                }
            case FETCHING_DATA_SUCCESS:
                return{
                    ...state,
                    friends: action.payload,
                    isFetching:  false,
                    error: ''
                }
            case FETCHING_DATA_FAILURE:
                return{
                    ...state,
                    isFetching: false,
                    error: action.payload
                }

            case POSTING_FRIEND_START:
                return{
                    ...state,
                }
            case POSTING_FRIEND_SUCCESS:
                return{
                    ...state,
                    friends: [...state, action.payload]
                }
            case POSTING_FRIEND_FAILURE:
                return{
                    ...state,
                    error: action.payload
                }

            default:
                return state
      } 
  }