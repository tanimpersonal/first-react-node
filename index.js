//require is same like import
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "016167756753" },
  { id: 2, name: "aabana", email: "aabana@gmail.com", phone: "0216167756753" },
  { id: 3, name: "babana", email: "babana@gmail.com", phone: "0316167756753" },
  { id: 4, name: "cabana", email: "cabana@gmail.com", phone: "0416167756753" },
  { id: 5, name: "dabana", email: "dabana@gmail.com", phone: "0516167756753" },
  { id: 6, name: "eabana", email: "eabana@gmail.com", phone: "0616167756753" },
  { id: 7, name: "fabana", email: "fabana@gmail.com", phone: "0716167756753" },
];
//req request, res response
//the first parameter is the route for get function
app.get("/", (req, res) => {
  res.send("Hello World Node Hola !!");
});
//static link
app.get("/users", (req, res) => {
  console.log("query: ", req.query);
  if (req.query.name) {
    const search = req.query.name;
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});
//dynamic link
app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});
app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour fazle ");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
  console.log(user);
});
app.listen(port, () => {
  console.log("Listening", port);
});
