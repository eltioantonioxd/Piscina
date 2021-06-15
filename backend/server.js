const path = require("path");
const express = require("express");
const app = express();
const SocketIO = require("socket.io");
const admin = require("firebase-admin");
const port = 3000;

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://tics-test-default-rtdb.firebaseio.com/",
});

// const db = admin.database();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   const data = {
//     user: req.body.user,
//     email: req.body.email,
//     password: req.body.password,
//   };
//   db.ref("test").push(data);
//   res.send("lol");
// });
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dashboard.html"));
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const io = SocketIO(server);

io.on("connection", (socket) => {
  console.log("new connection", socket.id);
  socket.on("terminal:write", (data) => {
    console.log(data);
    socket.broadcast.emit("dashboard:data", data);
  });
});
