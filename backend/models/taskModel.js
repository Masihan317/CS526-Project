import mongoose from "mongoose";

// define the schema for Task document
const taskSchema = mongoose.Schema({
  title: {
    // required title of task
    type: String,
    required: true,
  },
  content: {
    // optional task content/description
    type: String,
  },
  date: {
    // required deadline of task
    type: Date,
    required: true,
  },
  important: {
    // flag to indicate if task is important
    type: Boolean,
    default: false,
  },
  completed: {
    // flag to indicate if task is completed
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema); // create Task model from schema

export default Task; // export so this can be used externally
