import React from 'react'

const Form = ({inputHandler, SaveEditedUser, user, addNewUser, addEdit}) => {
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
          type="checkbox"
          name="is_active"
          checked={user.is_active}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        {addEdit === 1 &&<button onClick={addNewUser}>Add user</button>}
        {addEdit === 2 && <button onClick={() => {SaveEditedUser(user.id)}}>Save</button>}
      </div>
    )
}

export default Form
