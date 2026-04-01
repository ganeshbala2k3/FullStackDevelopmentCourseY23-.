const http = require("http");
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "db_server_password",
  database: "testdb"
});

const server = http.createServer((req, res) => {

  // CORS (you MUST handle this manually now)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  // Route: GET /users
  if (req.method === "GET" && req.url === "/users") {
    db.query("SELECT * FROM users", (err, result) => {
      if (err) {
        res.writeHead(500);
        return res.end("Database error");
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    });
    return;
  }

  // Default route
  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});