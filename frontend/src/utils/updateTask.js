// PUT(update an existing task)
// take the task ID and an object containing the updated task information as arguments
const updateTask = async (taskId, taskInfo) => {
  try {
    // Send a PUT request to API endpoint for updating a task by ID.
    const res = await fetch(`/api/tasks/update/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // request body will be JSON format
      },
      body: JSON.stringify(taskInfo), //Convert taskInfo into JSON String 
    });

    // check if the server response was successful
    if (!res.ok) {
      //if the response tatus not okay, throw an error with this message
      throw new Error("Task Update Failed");
    }
    // if the request was successful, parse the JSON respone
    const result = await res.json();
    // return the updated task
    return result;
    // log any errors to the console
  } catch (err) {
    console.error("Error updating task:", err);
  }
};

// export this function for other modules
export default updateTask;
