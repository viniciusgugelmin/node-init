import express from "express";

const app = express();

const weatherForecast = [
  { day: 1, temperature: "32 °C", wind: "8 km/h", views: 0 },
  { day: 2, temperature: "27 °C", wind: "9 km/h", views: 0 },
  { day: 3, temperature: "30 °C", wind: "8 km/h", views: 0 },
  { day: 4, temperature: "32 °C", wind: "7 km/h", views: 0 },
  { day: 5, temperature: "31 °C", wind: "8 km/h", views: 0 },
  { day: 6, temperature: "26 °C", wind: "10 km/h", views: 0 },
  { day: 7, temperature: "27 °C", wind: "9 km/h", views: 0 },
];

app.get("/forecast/:day?", (req, res) => {
  const { day } = req.params;

  if (!day) {
    return res.send(weatherForecast);
  }

  const daysWeather = weatherForecast.find(
    (item) => item.day === parseInt(day)
  );

  if (!daysWeather) {
    return res.sendStatus(404);
  }

  daysWeather.views++;

  res.send(daysWeather);
});

app.listen(5000, () => {
  console.log("Server is running on: http://localhost:5000");
});
