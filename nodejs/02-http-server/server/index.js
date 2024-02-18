import http from "http";
import internsData from "./data.json" assert { type: "json" };

const SERVER_PORT = "1234";

const server = http.createServer((request, response) => {
  if (request.url === "/interns") {
    console.log("Server is running on Port: " + SERVER_PORT);
    response.write(JSON.stringify(internsData));
  } else {
    response.write(
      JSON.stringify({
        message: "simple react + nodeJS app",
        routes: [{ interns: "/interns" }],
      })
    );
  }
  response.end();
});

server.listen(SERVER_PORT);
