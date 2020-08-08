/* Servidor */
const express = require("express");
const server = express();
const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require("./pages");

// configurar nunjucks (templeta engine)
// argumentos: pasta com arquivos html, enviar objetos com alguma coisa
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
});

server // configurar arquivos estáticos (css, scripts, imagens)
  // receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))

  // rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  // start do servidor
  .listen(5300);
// Para mostrar o valor de __dirname
// console.log(__dirname)
