import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {connect} from 'react-redux'
import {getFriends} from '../actions/FriendsList';
import FriendsForm from './FriendsForm';

const Friends = ({getFriends, friends, isFetching, error}) => {

    // const [addfriend, setAddFriend] = useState([])

    // useEffect(() => {
    //      axiosWithAuth()
    //         .get('/friends')
    //         .then(response => {
    //             console.log(response.data)
    //             setAddFriend(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])

    useEffect(() => {

        getFriends()
    
    }, ['/friends'])

    if (isFetching){
        return <h1>FETCHING DATA</h1>
    }
   

    return (
        <div>
            <h1>Friends</h1>
            {friends.map(friend => {
                console.log('friend',friend)
                return(
                    <div key={friend.id}>
                        <p>Name: {friend.name}, Age: {friend.age}</p>
                    </div>
                ) 
            })}
            <FriendsForm />
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