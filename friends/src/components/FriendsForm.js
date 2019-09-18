import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = props => {
    const [friendform, setFriendForm] = useState({name: '', age: '', email: ''})

    const ChangeHandler = e => {
        setFriendForm({...friendform, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/friends',  friendform)
            .then(response => {
                console.log(response)
            })
            // const newFriend = {
            //     ...friendform,
            //     id: Date.now()
            // }
        // props.addNewFriend(newFriend);
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

export default FriendsForm