import express, { json } from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(json());

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

mongoClient.connect().then(() => {
  db = mongoClient.db("recipes");
});

app.get('/recipes', (req, res) => {
  db.collection("recipes").find().toArray().then(recipes => {
    res.json(recipes);
  });
});

app.post('/recipes', (req, res) => {
  db.collection("recipes").insertOne(req.body).then(() => {
    res.sendStatus(201).send();
  })
})

app.listen(5000, () => {
  console.log('Server is running on: http://localhost:5000');
});