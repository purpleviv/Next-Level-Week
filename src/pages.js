const Database = require("./database/db");

const {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
} = require("./utils/format");

function pageLanding(req, res) {
  return res.render("index.html");
}

async function pageStudy(req, res) {
  const filters = req.query;

  if (!filters.subject || !filters.weekday || !filters.time) {
    return res.render("study.html", { filters, subjects, weekdays });
  }

  const timeToMinutes = convertHoursToMinutes(filters.time);

  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS (
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = classes.id 
      AND class_schedule.weekday = ${filters.weekdays}
      AND class_schedule.time_from <= ${timeToMinutes}
      AND class_schedule.time_to > ${timeToMinutes}
    )
    AND classes.subject = '${filters.subject}'
  `;
  // caso haja erro na hora da consulta no db
  try {
    const db = await Database;
    const proffys = await db.all(query);

    return res.render("study.html", { proffys, subjects, filters, weekdays });
  } catch (error) {
    console.log(error);
  }
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

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses
};
