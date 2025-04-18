import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
import Task from './models/TaskModel.js';

dotenv.config()
connectDB()
const app = express();

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = express.Router()

router.post('/create', async (req, res) => {
  try {
    const newTask = new Task(req.body)
    const savedTask = await newTask.save();
    res.status(201).json(savedTask)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.get('/retrieve', async(req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.put('/update/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

app.use("/api/tasks", router)

app.listen(PORT)