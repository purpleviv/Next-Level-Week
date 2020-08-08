const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(async (db) => {
  proffyValue = {
    name: "Margueritte Nollo",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?=s460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "66666666666",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  };

  classValue = {
    subject: "Artes",
    cost: "200"
  };

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 777,
      time_to: 1770
    },
    {
      weekday: 0,
      time_from: 666,
      time_to: 1660
    }
  ];

  // Inserir dados
  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // Consultar dados
  // const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffys);

  // o horário que a pessoa trabalha, por exemplo, é das 8h às 18h
  // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
  // o time_to precisa ser maior
  const selectedClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "1"
    AND class_schedule.time_from <= "120000"
    AND class_schedule.time_to > "131000"
  `);

  console.log(selectedClassesSchedules);
});
