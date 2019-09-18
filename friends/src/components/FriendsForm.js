import React from 'react';

const FriendsFrom = () => {
    const [friendform, setFriendForm] = useState({name: '', age: '', email: ''})

    const ChangeHandler = e => {
        setFriendForm({...friendform, [e.target.name]: e.target.value})
    }

    

    return(
        <div>

        </div>
    )
}