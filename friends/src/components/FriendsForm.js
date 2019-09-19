import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {postFriends} from '../actions/FriendsList'
import { connect } from 'react-redux';

const FriendsForm = () => {
    const [friendform, setFriendForm] = useState({name: '', age: '', email: ''})

    const ChangeHandler = e => {
        setFriendForm({...friendform, [e.target.name]: e.target.value})
    }

    // const submitForm = e => {
    //     e.preventDefault()
    //     axiosWithAuth()
    //         .post('/friends',  friendform)
    //         .then(response => {
    //             console.log('/friends',response)
    //         })
    //         // const newFriend = {
    //         //     ...friendform,
    //         //     id: Date.now()
    //         // }
    //     // props.addNewFriend(newFriend);
    //     setFriendForm({name: '', age: '', email: ''})
    // }
    

        const submitForm = e => {
            e.preventDefault()
            postFriends()
            setFriendForm({name: '', age: '', email: ''})
        }

    return(
        <form onSubmit={submitForm}>
            <input 
            name="name"
            placeholder="name"
            onChange={ChangeHandler}
            value={friendform.name}
            />
            <input 
            name="age"
            placeholder="age"
            onChange={ChangeHandler}
            value={friendform.age}
            />
            <input 
            name="email"
            placeholder="email"
            onChange={ChangeHandler}
            value={friendform.email}
            />
        <button type="submit">ADD A FRIEND</button>
        </form>
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
    {postFriends})
    (FriendsForm)