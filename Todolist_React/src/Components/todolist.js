import React, { useState } from "react";

const TodoReact = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        setTasks([...tasks, task]);
        setTask("");
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>To do list</h1>

            <input
                type="text"
                placeholder="Enter the task"
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map((t, index) => (
                    <li>
                        {t}
                        <button onClick={() => handleDelete(index)}>
                            Delete Task
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoReact;
