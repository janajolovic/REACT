import React, { useState } from 'react'
import Todo from './Todo'
import Input from "./Input"

const TodoList = () => {
    const [tasks, setTasks] = useState({title: "", completed: false});
    const [input, setInput] = useState("");
    const deleteTodo = (e) => {
        let id = e.target.value;
        console.log(id)
        setTasks(tasks.filter((t, i) => i !== id))
    }
    const removeLast = () => {
        setTasks(tasks.filter((t, i) => i !== tasks.length - 1))
    }
    const checked = () => {
        
    }

    const inputHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const addTodo = () => {
        if (input !== "") {
            setTasks([...tasks, {
                title: input}]);
            setInput("");
        }
    }

    return (
        <div className='todo-list'>
            <Input inputHandler={inputHandler} addTodo={addTodo} input={input}/>
            {tasks.map((t, i) => {
                return <Todo key={i} text={t} deleteTodo={deleteTodo} />
            })}
        <button className="removeAll" onClick={removeLast}>Remove last task</button>
        </div>
    )
}

export default TodoList
