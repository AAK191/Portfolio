const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const newTask = new Task({
    title: "Build Portfolio",
    completed: false
  });

  await newTask.save();

  res.json(newTask);
};