import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.newText }
            : todo
        ),
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;

    dispatch({ type: "ADD_TODO", payload: task });
    setTask("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleEditStart = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim() === "") return;

    dispatch({
      type: "EDIT_TODO",
      payload: { id: id, newText: editText },
    });

    setEditId(null);
    setEditText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App (useReducer)</h1>

      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <hr />

      {state.todos.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        state.todos.map((todo) => (
          <div key={todo.id} style={{ marginBottom: "10px" }}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => handleToggle(todo.id)}
                  style={{
                    cursor: "pointer",
                    textDecoration: todo.completed ? "line-through" : "none",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {todo.text}
                </span>

                <button onClick={() => handleEditStart(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
