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

// configurar arquivos estáticos (css, scripts, imagens)
// receber os dados do req.body
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

// rotas da aplicação
server.get("/", pageLanding);
server.get("/study", pageStudy);
server.get("/give-classes", pageGiveClasses);
server.post("/save-classes", saveClasses);
// start do servidor
server.listen(5300);
// Para mostrar o valor de __dirname
// console.log(__dirname)
