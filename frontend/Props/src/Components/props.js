import React from "react";

const Prop1 =({name,age,skills})=>{
    return(
        <div>
        <h1>Myself {name}</h1>
        <h3>my age is {age}</h3>
        <ul>
            {skills.map(
                (skill)=><li>{skill}</li>
            )}

        </ul>
        </div>
    );
}
export default Prop1