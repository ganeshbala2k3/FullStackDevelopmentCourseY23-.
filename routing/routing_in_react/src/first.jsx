import react from 'react'
import {Link} from "react-router-dom"
import './App.css'

function First() {
    return (
    <div>
    <h1>hello i am First</h1>
    <Link to="/">Home</Link>
    </div>
  );

}

export default First
