const { subjects, weekdays, getSubject } = require("./utils/format");

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  // Receber dados do formulario e adicionar ao proffys
  const data = req.query;
  const isNotEmpty = Object.keys(data).length > 0;
  // keys transforma as chaves de data (nome, bio, avatar...) em um array

  if (isNotEmpty) {
    data.subject = getSubject(data.subject);
    // adicionar  a lista de proffys
    proffys.push(data);

    return res.redirect("/study");
  }
  // se não, mostrar a página
  return res.render("give-classes.html", { subjects, weekdays });
}

/* Servidor */
const express = require("express");
const server = express();

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
