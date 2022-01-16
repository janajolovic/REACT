import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams, Link} from "react-router-dom";
import axios from 'axios';

const UserInfo = () => {
    const id = useParams().id;
    const [info, setInfo] = useState({});

    const getUserInfo = async () => {
        let response = await axios.get(`https://centarnitbe.herokuapp.com/user/${id}`)
        setInfo(response.data)
    }

    useEffect(() => {
        getUserInfo()
    }, []);

    return (
        <div>
            <div className='user_info'>
                <h1>ID: {info.id}</h1>
                <h1>Name: {info.name}</h1>
                <h1>Username: {info.username}</h1>
                <h1>Email: {info.email}</h1>
                <h1>Status: {info.is_active ? 'active' : 'inactive'}</h1>
            </div>
            <Link to="/users"><button className='go_back'>Go back</button></Link>
        </div>
    )
}

export default UserInfo
