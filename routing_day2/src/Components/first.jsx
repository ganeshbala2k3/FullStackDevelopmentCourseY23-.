import React from "react";
import { Link } from "react-router-dom";

const First =()=>{
    return(
        <div>
            <h1>Hello I am first</h1>
            <Link path="/third" >Third page</Link>
        </div>
    );
}
export default First