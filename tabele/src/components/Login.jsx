import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <Link to="users"><button>Login</button></Link>
        </div>
    )
}

export default Login
