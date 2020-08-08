/* Servidor */
const express = require("express");
const server = express();
const { pageLanding, pageStudy, pageGiveClasses } = require("./pages");

// configurar nunjucks (templeta engine)
// argumentos: pasta com arquivos html, enviar objetos com alguma coisa
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
});

server // configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))

  // rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  // start do servidor
  .listen(5000);
// Para mostrar o valor de __dirname
// console.log(__dirname)
