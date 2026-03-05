import React from "react";
import { useParams } from "react-router-dom";

const Second =()=>{
    const {id} = useParams()
    return(
        <div>
            <h1>Hello I am second id is {id}</h1>
        </div>
    );
}
export default Second