import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";
import {greatesId} from "./helpers/helpers"


function App() {
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [addEdit, setAddEdit] = useState(1);

  const getUsersData = async () => {
    try {
      let response = await axios.get(
        "https://centarnitbe.herokuapp.com/user/all"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = () => {
    try {
      axios.post("https://centarnitbe.herokuapp.com/user/", {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async (uId) => {
    // setUsers(
    //   users.filter((u) => {
    //     return u.id !== uId && u;
    //   })
    // );
    try {
      let response = await axios.delete(`https://centarnitbe.herokuapp.com/user/${uId}`)
      console.log(response)
      console.log(uId)
    } catch (err) {
      console.log(err)
    }
  };

  const editedUser = (uId) => {
    let editedUser = {};
    users.forEach((u) => {
      if (uId === u.id) {
        editedUser = u;
      }
    });
    setUser(editedUser);
    setAddEdit(2);
  };

  const saveEditedUser = (uId) => {
    setUsers((prevState) => {
      return prevState.map((u) => {
        if (uId === u.id) {
          return user;
        } else {
          return u;
        }
      });
    });
    setUser({
      name: "",
      username: "",
      email: "",
      is_active: false,
    });
    setAddEdit(1);
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const cancelEditForm = () => {
    setUser({
      name: "",
      username: "",
      email: "",
      password: "",
    });
    setAddEdit(1);
  };

  useEffect(() => {
    getUsersData();
  }, [users]);

  return (
    <div className="container">
      <div className="form-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        {addEdit === 1 && (
          <>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </>
        )}
        {addEdit === 1 && <button onClick={addUser}>Add user</button>}
        {addEdit === 2 && (
          <div>
            <button
              onClick={() => {
                saveEditedUser(user.id);
              }}
            >
              Save
            </button>
            <button onClick={cancelEditForm}>Cancel</button>
          </div>
        )}
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <User key={u.id} usr={u} rmUser={removeUser} editUser={editedUser} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;


// POST - add new user
// EDIT
// REMOVE