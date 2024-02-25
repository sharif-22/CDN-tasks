import http from "http";
import data from "./data/dummy.json" assert { type: "json" };

const SERVER_PORT = 2020;

// // basic Server Created and responding to user
// const server = http.createServer((reqFromUser, resFromServer) => {
//   resFromServer.write(JSON.stringify(data), () => {
//     console.log("server listening t0 " + SERVER_PORT, reqFromUser);
//   });
//   resFromServer.end();
// });

// server.listen(SERVER_PORT);

// respoding to user based on their route

const routeServer = http.createServer((req, res) => {
  // user route
  if (req.url === "/users") {
    res.write(JSON.stringify(data), () => {
      console.log("your response reached to user");
    });
  }
  // unkown route that user try to access
  else {
    res.write(JSON.stringify({ message: "welcome my server" }), () => {
      console.log("your response reached to user");
    });
  }

  res.end();
});

routeServer.listen(SERVER_PORT);
