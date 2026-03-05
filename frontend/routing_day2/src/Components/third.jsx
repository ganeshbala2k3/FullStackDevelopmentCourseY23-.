import React from "react";
import { Outlet } from "react-router-dom";

const Third =()=>{
    return(
        <div>
            <h1>Hello I am third</h1>
            <Outlet/>
        </div>
    );
}
export default Third