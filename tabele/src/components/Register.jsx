import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [input, setInput] = useState({ email: "", username: "", name: "", password: ""});

    const inputHandler = (e) => {
        e.preventDefault();
        setInput((prevState) => {
          return {
            ...prevState,
            [e.target.name]: e.target.value,
          };
        });
      };

      const register = async () => {
        try {
            let response = await axios.post("https://serene-fortress-45917.herokuapp.com/auth/signup", input);
            console.log(response)
        } catch (err) {
            console.log(err)
        }
      }

    return (
        <div className='login'>
            <h1>Register</h1>
            <form>
                <input type="text" name="email" placeholder='email' value={input.email} 
                    onChange={(e) => {
                        inputHandler(e);
                    }}/>
                <input type="text" name="username" placeholder='username' value={input.username} 
                    onChange={(e) => {
                        inputHandler(e);
                    }}/>
                <input type="text" name="name" placeholder='name' value={input.name} 
                    onChange={(e) => {
                        inputHandler(e);
                    }}/>
                <input type="text" name="password" placeholder='password' value={input.password}
                    onChange={(e) => {
                        inputHandler(e);
                    }}/>
                <Link to="/"><button
                    onClick={register}>Register</button></Link>
            </form>
        </div>
    )
}

export default Register
