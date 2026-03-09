import React from "react";
import { useState } from "react";


const Form=()=>{

    const [state,setState]=useState({
    name:""
    })
    return(
        <>
        <h1>Form Experiment 6</h1>
        <form>
            <input type="text" placeholder="Enter the Name"></input>
            <br/>
            <select>
                <option>Professor</option>
                <option>Associate Professor</option>
                <option>Assitant Professor</option>
                <option>Lab Programmer</option>
            </select>
            <input type="radio"></input>
        </form>
        
        </>
    );
}
export default Form