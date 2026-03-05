import React, { useState } from "react";
import Prop1 from "./props";

const Prop2 =()=>{
    const [name,setName]=useState("")
    const age=20
    const grad = true
    const postgrad  = false
    const skills =['java','python','mern']
    const marks =[{maths:80,physics:90,chemistry:100},
        {maths:90,physics:70,chemistry:90}
    ]
    return(
        <div>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input>
            <Prop1 name={name} age={age} grad={grad} skills={skills} marks={marks}/>

        </div>
    );
    
}
export default Prop2