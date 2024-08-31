import React, { useState } from "react";
import axios from 'axios';
import './App.css';

function Create({ addTodo }) { // Receive the function as a prop
    const [task, setTask] = useState('');

    const handleAdd = () => {
        console.log("Task before sending:", task); 
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                addTodo(result.data);
                setTask(''); // Use the addTodo function to update the state in Home
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="create_form">
            <input 
                type="text" 
                placeholder="Enter Task" 
                value={task}
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="button" className="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
