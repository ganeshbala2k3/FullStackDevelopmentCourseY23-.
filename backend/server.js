const http = require("http");
const fs = require("fs");

const PORT = 3000;
const FILE = "./users.json";

// helper: read users
function getUsers() {
  try {
    const data = fs.readFileSync(FILE);
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// helper: save users
function saveUsers(users) {
  fs.writeFileSync(FILE, JSON.stringify(users, null, 2));
}

// server
const server = http.createServer((req, res) => {
  // GET /users
  if (req.method === "GET" && req.url === "/users") {
    const users = getUsers();

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(users));
  }

  // POST /users
  if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const newUser = JSON.parse(body);

      const users = getUsers();
      newUser.id = Date.now();
      users.push(newUser);

      saveUsers(users);

      res.writeHead(201);
      res.end("User added");
    });
    return;
  }

  // DELETE /users?id=123
  if (req.method === "DELETE" && req.url.startsWith("/users")) {
    const id = req.url.split("=")[1];

    let users = getUsers();
    users = users.filter(user => user.id != id);

    saveUsers(users);

    res.writeHead(200);
    res.end("User deleted");
    return;
  }

  // default
  res.writeHead(404);
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});