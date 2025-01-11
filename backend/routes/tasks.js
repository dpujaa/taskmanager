const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

//create task
router.post('/tasks', async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  });  

//read tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

//update task
router.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

//delete task
router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.send({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
