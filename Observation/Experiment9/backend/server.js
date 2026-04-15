const express = require("express"); //importing express
const cors = require("cors"); //importing cors //cross origin resource sharing
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// 🔌 MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword", // change this
  database: "testdb"
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("MySQL Connected"); //call back function
});

// GET users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// POST user
app.post("/users", (req, res) => {
  const { name, email } = req.body; //destructuring the req body

  if (!name || !email) {
    return res.status(400).send("Name and email required");
  }

  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("User added");
    }
  );
});

app.listen(3000, () => console.log("Server running on 3000"));