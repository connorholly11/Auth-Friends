import React, {useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {connect} from 'react-redux'
import {getFriends} from '../actions/FriendsList';

const Friends = ({getFriends, friends, isFetching, error}) => {

    useEffect(() => {
         axiosWithAuth()
            .get('/friends')
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })

    if (isFetching = true){
        return <h1>FETCHING DATA</h1>
    }
   

    return (
        <div>
            <h1>Friends</h1>
            {friends.map(friend => {
                return <p>{friend.name}</p>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        friends: state.friends,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, 
    {getFriends})
    (Friends)