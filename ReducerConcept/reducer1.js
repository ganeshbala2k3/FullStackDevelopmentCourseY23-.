// state → current state value

// dispatch → function used to send actions

// reducer → function that decides how state updates

// initialState → starting value

//Reducer function will always take two arguments (state, action)
//reduce function will take (reducer function , intial state)
//Old state ---> New State

import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": 
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

//useReducer === reduce keyword

export default function Counter() {

  const [count,setCount]=useState(0)

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
