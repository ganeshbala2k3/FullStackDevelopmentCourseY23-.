import React, { useState } from "react";
import TodoReact from "./todolist";

const Calculator =()=>{

    const [input , setInput]=useState("")
    const [result,setResult]=useState("")

    const handleClick=(value)=>{
        setInput(prev => prev + value)
    }
    const handleSubmit=()=>{
        setResult(eval(input))
    
    }

    return(
        <div>
            <h1>Calculator</h1>
            <h3>{input || 0}</h3>
            <h3>{result || 0}</h3>

            {
                [1,2,3,4,5,6,7,8,9,0,'+','-','*','/','='].map(
                    (t) =>  <button onClick={()=> (t==='=') ? handleSubmit() : handleClick(t)}>{t}</button>
                )
            }

            <button onClick={()=>{
                setInput("") 
                setResult("")
            }}>clear</button>
                    <TodoReact/>

        </div>
    );
}

export default Calculator