// async function to delete task by id
const deleteTask = async (taskId) => {
  try {
    // send DELETE request to backend API
    const res = await fetch(`/api/tasks/delete/${taskId}`, {
      method: 'DELETE',
    })

    // throw error if response not OK
    if (!res.ok) {
      throw new Error("Task Deletion Failed")
    }

    const result = await res.json()  // parse JSON response
    return result
  } catch (err) {
    console.error('Error deleting task:', err)
  }
}

export default deleteTask  // export function so it can be used externally