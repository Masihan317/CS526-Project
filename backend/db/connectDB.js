import mongoose from "mongoose";

// function to connect to MongoDB
const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)  // connect using variable from .env file
    console.log("Connected to MongoDB")
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB  // export so this function can be used elsewhere