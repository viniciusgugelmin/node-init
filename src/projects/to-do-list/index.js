import express from "express";

const app = express();
app.use(express.json());

const tasks = [
  { description: "codar", isChecked: false },
  { description: "dormir", isChecked: false },
];

app.post("/tasks", (req, res) => {
  const newTask = req.body;

  if (
    !newTask.description ||
    typeof newTask.isChecked !== "boolean" ||
    typeof newTask.description !== "string" ||
    Object.keys(newTask).length !== 2
  ) {
    return res.status(400).json({ error: "Invalid data" });
  }

  if (tasks.find((task) => task.description === newTask.description)) {
    return res.status(400).json({ error: "Task already exists" });
  }

  tasks.push(newTask);

  return res.json(newTask);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(5000, () => {
  console.log("Server is running on: http://localhost:5000");
});
