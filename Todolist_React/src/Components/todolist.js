import React, { useState } from "react";

const TodoReact=()=>{
    const [task,setTask]=useState("")
    const [tasks, setTasks]=useState([])
    const [editTask ,setEditTask]=useState(false)
    const [editValue , setEditValue]=useState("")

    const handleClick=()=>{
        setTasks([...tasks,task])
        setTask("")
        setEditValue("")
        setEditTask(false)

    }
    const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)) }
        
    const handleEdit=()=>{
        setEditTask(true)
    }

    const handleSave=(index)=>{
        setTasks(tasks.map(
            (t,i) => i===index ? tasks[i]=editValue : tasks[i]=t
        ))
        setEditTask(false)
    }
    

    
    return(
        <div>
            <h1>To do React</h1>
            <input type="text" value={task} placeholder="Enter the task" onChange={(e)=>setTask(e.target.value)}></input>
            <button onClick={()=>handleClick()}>Add Task</button>

            <ul>
                {
                    tasks.map(
                        (t,index)=>(
                            <>
                        <li>{t} <button 
                        onClick={()=>handleDelete(index)}>
                            Delete Task
                            </button>
                             {
                            (editTask===true)?
                            <>
                            <input type="text" onChange={(e)=>setEditValue(e.target.value)}></input>
                            <button onClick={()=>handleSave(index)}>Save</button>
                            </>
                            
                            :<button onClick={()=>handleEdit()} >Update Task</button>

                             }
                           </li>
                          
                           </>
                    )
                    )
                }
            </ul>


        </div>
    );
}

export default TodoReact