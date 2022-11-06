const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getOneTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.post("/api/v1/tasks", createTask);
router.get("/api/v1/tasks", getAllTasks);
router.get("/api/v1/tasks/:id", getOneTask);
router.delete("/api/v1/tasks/:id", deleteTask);
router.put("/api/v1/tasks/:id", updateTask);

module.exports = router;
