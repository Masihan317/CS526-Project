// async function to create new task with given taskInfo
const createTask = async (taskInfo) => {
  try {
    // send POST request to backend API
    const res = await fetch("/api/tasks/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // body will be JSON format
      },
      body: JSON.stringify(taskInfo),
    })

    // throw error if response not OK
    if (!res.ok) {
      throw new Error("Task Creation Failed")
    }

    const task = await res.json()  // parse JSON response
    return task
  } catch (err) {
    console.error('Error creating tasks:', err);
  }
}

export default createTask;    // export function so it can be used externally