const createTask = async (taskInfo) => {
  try {
    const res = await fetch("/api/tasks/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskInfo),
    })

    if (!res.ok) {
      throw new Error("Task Creation Failed")
    }

    const task = await res.json()
    return task
  } catch (err) {
    console.error('Error creating tasks:', err);
  }
}

export default createTask;