const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    priority: { type: String, default: 'Low' },
    dueDate: Date,
    completed: { type: Boolean, default: false },
  });
  
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
