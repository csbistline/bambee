import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
const jsonParser = bodyParser.json()

app.use(jsonParser)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const tasks = [
  { id: 1, title: "Task 1", description: "This is task 1" },
  { id: 2, title: "Task 2", description: "This is task 2" },
  { id: 3, title: "Task 3", description: "This is task 3" },
];

app.get("/api/tasks", (req, res) => {

  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.json(task);
});

app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === +id);
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === +id);
  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
