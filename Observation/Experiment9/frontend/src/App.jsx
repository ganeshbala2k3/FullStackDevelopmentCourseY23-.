import { useEffect, useState } from "react";
import axios from 'axios' //security purpose

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  
const loadUsers = async () => {
  const res = await axios.get("http://localhost:3000/users");
  setUsers(res.data);
};

  const addUser = async () => {

  await axios.post("http://localhost:3000/users", {
    name,
    email
  });

    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>User Manager</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />

      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;