"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
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
    const task = Object.assign({ id: Date.now() }, req.body);
    tasks.push(task);
    res.json(task);
});
app.put("/api/tasks/:id", (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((task) => task.id === +id);
    tasks[index] = Object.assign(Object.assign({}, tasks[index]), req.body);
    res.json(tasks[index]);
});
app.delete("/api/tasks/:id", (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((task) => task.id === +id);
    tasks.splice(index, 1);
    res.json({ message: "Task deleted" });
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
