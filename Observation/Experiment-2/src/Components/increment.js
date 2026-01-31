import React, { useState } from "react";

const IncrementOperator =()=>{
    const [count,setcount]=useState(0) //usestate is a web hook to re render pagen with intial value 0
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>{count}</button>
        </div>
    );

}

export default IncrementOperator