import React, { useEffect, useReducer } from "react";

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

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // --- USEEFFECT ADDITION ---
  useEffect(() => {
    // This code runs whenever state.count changes
    document.title = `Count is ${state.count}`;
    
    console.log("Effect triggered! New count:", state.count);
  }, [state.count]); // Dependency array: watch state.count
  // ---------------------------

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}