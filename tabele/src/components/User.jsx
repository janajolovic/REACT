import React from "react";

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
      </td>
    </tr>
  );
};

export default User;
