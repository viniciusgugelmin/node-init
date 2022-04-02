import express from "express";

const app = express();
const holidays = [
  { date: "01/01/2022", name: "Confraternização mundial" },
  { date: "01/03/2022", name: "Carnaval" },
  { date: "04/17/2022", name: "Páscoa" },
  { date: "04/21/2022", name: "Tiradentes" },
  { date: "05/01/2022", name: "Dia do trabalho" },
  { date: "06/16/2022", name: "Corpus Christi" },
  { date: "09/07/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/02/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

app.get("/holidays/:month?", (req, res) => {
  const { month } = req.params;

  if (month) {
    const monthHolidays = holidays.filter((holiday) => {
      const date = new Date(holiday.date);
      return date.getMonth() + 1 === parseInt(month);
    });

    return res.send(monthHolidays);
  }

  res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
  const today = new Date();
  const todaysHoliday = holidays.find(
    (holiday) => holiday.date === today.toDateString()
  );

  if (todaysHoliday) {
    return res.send(`Yep, today is ${todaysHoliday.name}!`);
  }

  res.send(`Nope, today is not a holiday!`);
});

app.listen(5000, () => {
  console.log("Server is running on: http://localhost:5000");
});
