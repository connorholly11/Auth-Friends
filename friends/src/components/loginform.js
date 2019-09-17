import React, {useState} from 'react'

const LoginForm = () => {
    const [form, setForm] = useState({username: '', password: '' })


    const ChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value })
    
    }

    // const SubmitForm = e => {
    //     e.preventdefault()

    // }

    return(
        <form>
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
            <button type='submit'>Log In!</button>
        </form>
    )
}

export default LoginForm