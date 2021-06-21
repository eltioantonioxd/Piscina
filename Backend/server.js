const path = require("path");
const express = require("express");
const app = express();
const SocketIO = require("socket.io");
const port = 3000;

var lastEvent = []

app.get("/:id", (req, res) => {
  res.json(lastEvent[req.params.id])
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const io = SocketIO(server);

io.on("connection", (socket) => {
  console.log("new connection", socket.id);
  socket.on("terminal:write", (data) => {
    if (!lastEvent[data.ID]) {
      lastEvent[data.ID] = []
    }
    if (lastEvent[data.ID].length == 100) {
      lastEvent = lastEvent[data.ID].slice(1,99);
    }
    lastEvent[data.ID].push(data)
    console.log(lastEvent[data.ID])
  });
});
