const express = require("express");
const server = express();

function pageLanding(req, res) {
  return res.sendFile(__dirname + "/views/index.html");
}

function pageStudy(req, res) {
  return res.sendFile(__dirname + "/views/study.html");
}

function pageGiveClasses(req, res) {
  return res.sendFile(__dirname + "/views/give-classes.html");
}

server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5000);
//Para mostrar o valor de __dirname
// console.log(__dirname)
