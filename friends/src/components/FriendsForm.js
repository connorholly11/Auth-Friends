import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsFrom = props => {
    const [friendform, setFriendForm] = useState({name: '', age: '', email: ''})

    const ChangeHandler = e => {
        setFriendForm({...friendform, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        axiosWithAuth('/friends')
            .then(response => {
                console.log(response)
            })
            e.preventDefault();
            const newFriend = {
                ...friendform,
                id: Date.now()
            }
        props.addNewFriend(newFriend);
        setFriendForm({name: '', age: '', email: ''})
    }

    return(
        <div>

        </div>
    )
}