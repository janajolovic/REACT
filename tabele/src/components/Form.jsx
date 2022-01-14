import React from 'react'

const Form = ({inputHandler, SaveEditedUser, user, addUser, addEdit, CancelEditedUser}) => {
    return (
        <div className="form-container">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        {addEdit === 1 &&<button onClick={addUser}>Add user</button>}
        {addEdit === 2 && <div>
          <button onClick={() => {SaveEditedUser(user.id)}}>Save</button>
          <button onClick={CancelEditedUser}>Cancel</button>
          </div>}
      </div>
    )
}

export default Form
