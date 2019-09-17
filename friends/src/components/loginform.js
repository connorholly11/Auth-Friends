import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';

const LoginForm = props => {
    const [form, setForm] = useState({username: '', password: '' })


    const ChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value })
    
    }

    const SubmitForm = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/login', form)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.payload);

                props.history.push('/protected')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <form onSubmit={SubmitForm}>
            <input 
            name="username"
            placeholder="username"
            value={form.username}
            onChange={ChangeHandler}
            />

            <input 
            name="password"
            placeholder="password"
            value={form.password}
            onChange={ChangeHandler}
            />
            <button type="submit">Log In!</button>
        </form>
    )
}

export default LoginForm