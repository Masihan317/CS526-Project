const updateTask = async (taskId, taskInfo) => {
  try {
    const res = await fetch(`/api/tasks/update/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskInfo),
    })

    if (!res.ok) {
      throw new Error("Task Update Failed")
    }

    const result = await res.json()
    return result
  } catch (err) {
    console.error('Error updating task:', err)
  }
}

export default updateTask; 