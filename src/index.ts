import express from "express";
import bodyParser from "body-parser";
import { tasks } from "./database/Tasks";
import { Task } from "./interfaces/Task";

const app = express();
const PORT = 3000;
const jsonParser = bodyParser.json()

app.use(jsonParser)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task: Task = tasks.find((task) => task.id === parseInt(id));
  res.json(task);
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const task: Task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.json(task);
});

app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  tasks.splice(index, 1);
  res.json({ message: "Task deleted", id });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
