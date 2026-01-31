import React from "react";   
import SecondExample from "./second"; //import statment should not be written manual


const Example = ()=>{   //An Arrow function
    let name ="BEC"
    let lab_name =" FSD LAB"
   return ( 
    <div> 
        <h1>Welcome to my page</h1>
        <h3>This is {lab_name} belongs to {name} college</h3>
        <SecondExample/>
    </div>
   );
}

export default Example      //exporting my function as component to make it available