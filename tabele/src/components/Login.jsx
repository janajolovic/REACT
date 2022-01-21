import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({ email: "", password: ""});

    const inputHandler = (e) => {
        e.preventDefault();
        setInput((prevState) => {
          return {
            ...prevState,
            [e.target.name]: e.target.value,
          };
        });
      };

    //   https://serene-fortress-45917.herokuapp.com/auth/signup

      const login = async () => {
        try {
            if (input.email !== "" && input.password !== "") {
                let response = await axios.post("https://serene-fortress-45917.herokuapp.com/auth/login", input);
                console.log(response)
            }
        } catch (err) {
            console.log(err)
        }
      }

    return (
        <div className='login'>
            <h1>Login</h1>
            <form>
                <input type="text" name="email" placeholder='email' value={input.email} 
                    onChange={(e) => {
                        inputHandler(e);
                    }}/>
                <input type="text" name="password" placeholder='password' value={input.password}
                    onChange={(e) => {
                        inputHandler(e);
                    }}/>
                <Link to="/users"><button onClick={login}>Login</button></Link>
                <Link to="/register"><p>Register</p></Link>
            </form>
        </div>
    )
}

export default Login
