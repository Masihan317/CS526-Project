import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  important: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model("Task", taskSchema)

export default Task