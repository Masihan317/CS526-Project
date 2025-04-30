import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import Task from "./models/taskModel.js";
import path from "path";

// load env variables from .env file
dotenv.config();

// connect to MongoDB database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve() // absolute path current directory

app.use(express.json()); // middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded data (form submissions, etc.)

const router = express.Router(); // create express router

// endpoint to create a new task
router.post("/create", async (req, res) => {
  try {
    const newTask = new Task(req.body); // create a new task using request body
    const savedTask = await newTask.save(); // save to database
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// endpoint to retrieve all tasks
router.get("/retrieve", async (req, res) => {
  try {
    const tasks = await Task.find(); // fetch all tasks from database
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// endpoint to update all tasks by id
router.put("/update/:id", async (req, res) => {
  try {
    // find task by id and update with new data
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // return 404 if task not found
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// endpoint to delete a task by id
router.delete("/delete/:id", async (req, res) => {
  try {
    // find and delete task by id
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    // return 404 if task not found
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task deleted successfully", task: deletedTask });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/api/tasks", router); // use the router for all routes under /api/tasks

app.use(express.static(path.join(__dirname, "frontend/dist"))) // serve static files

// serve frontend from backend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
