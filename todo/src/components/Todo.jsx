import React from 'react'

const Todo = ({text, deleteTodo, key}) => {
    return (
        <div className='todo-item'>
            <h1>{text}</h1>
            <button className='delete-btn' value={key} onClick={deleteTodo}><i className="fas fa-times"></i></button>
        </div>
    )
}


export default Todo
