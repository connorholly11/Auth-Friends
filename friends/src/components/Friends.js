import React, {useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Friends = () => {

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
   

    return (
        <div>
            <h1>Friends</h1>
            {/* {friends.map(friend => {
                return <p>{friend.name}</p>
            })} */}
        </div>
    )
}

export default Friends