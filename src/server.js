function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  return res.render("study.html");
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html");
}

const express = require("express");
const server = express();

// configurar nunjucks
// argumentos: pasta com arquivos html, enviar objetos com alguma coisa
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server // configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))

  // rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5000);
//Para mostrar o valor de __dirname
// console.log(__dirname)
