const deleteTask = async (taskId) => {
  try {
    const res = await fetch(`/api/tasks/delete/${taskId}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error("Task Deletion Failed")
    }

    const result = await res.json()
    return result
  } catch (err) {
    console.error('Error deleting task:', err)
  }
}

export default deleteTask