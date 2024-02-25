# Express

- Express.js is nodeJS framework used to create routing

### lets create the some route based responce in plain nodeJS

> network in nodejs module

```js
import http from "http";
console.log(http); //which return network methods and all status code FYI
```

> lets create a basic `server` using
>
> `http.createServer((req,res)=>(req,res)).listen(port)`

```js
const PORT = 2024;

const server = http.createServer((req, res) => {
  // req hold all the network method like GET, POST etc.. , url and other nessary things from client req side
  console.log(req);

  // res is responding to req from client

  //   res.write("stringType", () => {
  //    // this callback used to handle errors
  //   });


res.write.(data,()=>{})

// after responding to req we need to end the responce from server by end()

res.end()

});

server.listening(PORT)
```

> lets create server response depend up your route we get different different response

```js
const PORT = 2024;

const server = http.createServer((req, res) => {
  // user route
  if (req.url === "/users") {
    res.write(user, () => {
      console.log("your response reached to user");
    });
  }
  // unkown route that user try to access
  else {
    res.write(JSON.stringfy({ message: "welcome my server" }), () => {
      console.log("your response reached to user");
    });
  }

  res.end();
});

server.listening(PORT);
```

##### Reference articles

[response write method](https://www.geeksforgeeks.org/node-js-response-write-method/)
