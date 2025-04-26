import { useState, useEffect } from "react";

// custom hook to fetch tasks from backend
// basically used as a refresh hook so we don't need Zustand or React Redux
const useFetchTasks = () => {
  // state to keep list of tasks
  const [tasks, setTasks] = useState([]);

  // indicates if data is still being loaded
  const [isLoading, setIsLoading] = useState(false);

  // function to fetch tasks from API
  const fetchTasks = async () => {
    try {
      setIsLoading(true); // starts loading
      // send GET request to retrieve all tasks
      const res = await fetch("/api/tasks/retrieve");
      const data = await res.json(); // parsing JSON response
      setTasks(data); // update state
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setIsLoading(false); // no longer loading
    }
  };

  // run once when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // return list of tasks, fetch function, and loading state
  return { tasks, fetchTasks, isLoading };
};

export default useFetchTasks; // export hook to be used externally
