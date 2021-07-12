const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const SocketIO = require("socket.io");
const port = 3000;

var lastEvent = [];
var contMov = 10;
var contTempP = 10;
var contTempN = 10;
var contPhP = 10;
var contPhN = 10;
var contAlturaP = 10;
var contAlturaN = 10;

app.use(cors({ origin: "https://www.tinkercad.com" }));
app.get("/get100Values/:id", (req, res) => {
  res.json(lastEvent[req.params.id]);
});

app.get("/alert", (req, res) => {
  let Values = {
    alertMov: false,
    alertTempBaja: false,
    alertTempAlta: false,
    alertPhBaja: false,
    alertPhAlto: false,
    alertAlturaBaja: false,
    alertAlturaAlta: false,
  };

  if (contMov <= 0) {
    Values.alertMov = true;
    contMov = 10;
  }

  if (contTempP <= 0) {
    Values.alertTempBaja = true;
    contTempP = 10;
  }

  if (contTempN <= 0) {
    Values.alertTempAlta = true;
    contTempN = 10;
  }

  if (contPhP <= 0) {
    Values.alertPhBaja = true;
    contPhP = 10;
  }

  if (contPhN <= 0) {
    Values.alertPhAlto = true;
    contPhN = 10;
  }

  if (contAlturaP <= 0) {
    Values.alertAlturaBaja = true;
    contAlturaP = 10;
  }

  if (contAlturaN <= 0) {
    Values.alertAlturaAlta = true;
    contAlturaN = 10;
  }

  res.json(Values);
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const io = SocketIO(server, { cors: { origin: "https://www.tinkercad.com" } });

io.on("connection", (socket) => {
  console.log("new connection", socket.id);
  socket.on("terminal:write", (data) => {
    try {
      if (lastEvent[data.ID] === undefined) {
        lastEvent[data.ID] = [];
        console.log("creando lastEvent");
      }
      if (lastEvent[data.ID].length == 100) {
        lastEvent[data.ID] = lastEvent[data.ID].slice(1, 99);
      }
      lastEvent[data.ID].push(data);

      if (lastEvent[data.ID].length > 5) {
        if (
          data.movimiento == 1 &&
          lastEvent[data.ID][lastEvent[data.ID].length - 2].movimiento == 1
        )
          contMov--;
        if (
          data.temperatura < 20 &&
          lastEvent[data.ID][lastEvent[data.ID].length - 2].temperatura < 20
        )
          contTempP--;
        if (
          data.temperatura > 28 &&
          lastEvent[data.ID][lastEvent[data.ID].length - 2].temperatura > 28
        )
          contTempN--;
        if (
          data.ph > 7.6 &&
          lastEvent[data.ID][lastEvent[data.ID].length - 2].ph > 7.6
        )
          contPhN--;
        if (
          data.ph < 7.2 &&
          lastEvent[data.ID][lastEvent[data.ID].length - 2].ph < 7.2
        )
          contPhP--;
        if (
          data.distancia < 20 &&
          lastEvent[data.ID][lastEvent[data.ID].length - 2].distancia < 20
        )
          contAlturaP--;
        if (
          data.distancia > 40 &&
          lastEvent[data.ID][lastEvent[data.ID].length - 2].distancia > 40
        )
          contAlturaN--;
      }
    } catch (error) {
      console.log(error);
      console.log(lastEvent[data.ID]);
    }
  });
});
