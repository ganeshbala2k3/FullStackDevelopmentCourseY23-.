import React, { useState } from "react";


const Sample =()=>{

  let count =0

  return(
    <div>
      <h1>Increment </h1>
      <button onClick={()=>count++}>{count}</button>
    </div>
  );


}

export default Sample