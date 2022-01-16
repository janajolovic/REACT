import React from "react";
import {Link} from "react-router-dom";

const User = ({ usr, rmUser, editUser}) => {
  return (
    <tr>
      <td>{usr.id}</td>
      <td>{usr.name}</td>
      <td>{usr.username}</td>
      <td>{usr.email}</td>
      <td>
        <button
          onClick={() => {
            rmUser(usr.id);
          }}
        >
          Remove
        </button>
        <button onClick={() => {
          editUser(usr.id)
        }}>
          Edit</button>
        <Link to={`/${usr.id}`}> <button>User Info</button></Link>
      </td>
    </tr>
  );
};

export default User;
