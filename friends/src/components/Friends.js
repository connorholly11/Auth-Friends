import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Friends = () => {

    axiosWithAuth()
        .get('/friends')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    return (
        <div>
            <h1>FRIENDS</h1>
        </div>
    )
}

export default Friends