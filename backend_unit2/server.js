const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Node Server</title>
        </head>
        <body>
          <h1>Server running on port 3000</h1>
          <p>You successfully made a request.</p>
        </body>
      </html>
    `);

    res.end();

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});