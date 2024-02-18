import http from "http";
import internsData from "./data.json" assert { type: "json" };

const SERVER_PORT = "1234";

const server = http.createServer((request, response) => {
  console.log("Server is running on Port: " + SERVER_PORT);
  response.write(JSON.stringify(internsData));

  response.end();
});

server.listen(SERVER_PORT);
