import React, { useState } from "react";
import Task from "../components/Task";
import Sidebar from "../components/Sidebar";
import Spinner from "react-bootstrap/Spinner";
import Topbar from "../components/Topbar";
import useFetchTasks from "../hooks/useFetchTasks";

/**
 * Layout Component
 * 
 * Main layout component that structures the application's UI and manages task data.
 * Implements a responsive grid layout with sidebar navigation and task display.
 * 
 * Features:
 * - Task fetching and management
 * - Task filtering based on different criteria
 * - Responsive grid layout for task cards
 * - Loading state handling
 */
const Layout = () => {
  const { isLoading, tasks, fetchTasks } = useFetchTasks(); // fetch tasks on load and store tasks retrieved
  const [currentFilter, setCurrentFilter] = useState("all");

  /**
   * Handles filter changes from the sidebar
   * Updates the current filter state which affects task display
   * 
   * @param {string} filter - The selected filter type ("all", "important", "completed", "todo")
   */
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  /**
   * Filters tasks based on the current filter selection
   * Returns a filtered array of tasks matching the selected criteria
   */
  const filteredTasks = tasks.filter((task) => {
    switch (currentFilter) {
      case "all":
        return true; // Show all tasks
      case "important":
        return task.important; // Show only important tasks
      case "completed":
        return task.completed; // Show only completed tasks
      case "todo":
        return !task.completed; // Show only incomplete tasks
      default:
        return true; // Fallback to showing all tasks
    }
  });

  return (
    <>
      {/* main container with dark background */}
      <div className="container-fluid bg-black">
        <div className="row">
          {/* Sidebar component (filters) */}
          <div className="col-md-3">
            <Sidebar onFilterChange={handleFilterChange} />
          </div>
          {/* main content */}
          <div className="col-md-9">
            <div className="container-fluid">
              {/* Topbar Section - Contains title and task creation controls */}
              <div className="row">
                {/* Topbar with Title and Add Button to create new tasks */}
                <div className="col mt-4 mb-3">
                  <Topbar onCreate={fetchTasks} />
                </div>
              </div>
              {/* grid to display task cards */}
              <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 align-items-baseline">
                {/* render Task components with fetched tasks, set loading Spinner */}
                {isLoading ? (
                  <Spinner
                    id="main-spinner"
                    animation="border"
                    variant="secondary"
                    className="ms-3"
                  />
                ) : (
                  // Task Cards - Maps filtered tasks to Task components
                  filteredTasks.map((task) => (
                    <div className="col" key={task._id}>
                      <Task
                        id={task._id}
                        title={task.title}
                        content={task.content}
                        date={task.date}
                        completed={task.completed}
                        important={task.important}
                        onDelete={fetchTasks} // refresh tasks on delete
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout; // export component to be used externally
