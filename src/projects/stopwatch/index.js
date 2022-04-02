import express from "express";

const app = express();

let time = 0;
let idInterval;

app.post("/start", (req, res) => {
  idInterval = setInterval(() => {
    time++;
  }, 1000);

  res.send("Timer started");
});

app.post("/stop", (req, res) => {
  clearInterval(idInterval);

  res.json({ time });

  time = 0;
});

app.listen(5000, () => {
  console.log("Server is running on: http://localhost:5000");
});
