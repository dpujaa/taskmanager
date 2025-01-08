const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Create Task
router.post('/tasks', async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  });  

// Read Tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update Task
router.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete Task
router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.send({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
