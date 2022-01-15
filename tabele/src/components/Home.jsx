import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum culpa eius voluptas distinctio pariatur et dolores saepe deleniti ex.</p>
            <ul>
                <li>
                    <Link to="users">Users</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home
