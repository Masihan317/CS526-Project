import React, { useState, useEffect } from 'react'
import Task from '../components/Task'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import useFetchTasks from '../hooks/useFetchTasks'

const Layout = () => {
  const { tasks, fetchTasks } = useFetchTasks()
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter)
  }

  const filteredTasks = tasks.filter(task => {
    switch (currentFilter) {
      case 'all':
        return true
      case 'important':
        return task.important
      case 'completed':
        return task.completed
      case 'todo':
        return !task.completed
      default:
        return true
    }
  })

  return (
    <>
      <div className='container-fluid bg-black'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar onFilterChange={handleFilterChange} />
          </div>
          <div className='col-md-9'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col mt-4 mb-3'>
                  <Topbar onCreate={fetchTasks}/>
                </div>
              </div>
              <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4 align-items-baseline'>
                {filteredTasks.map(task => (
                  <div className='col' key={task._id}>
                    <Task
                      id={task._id}
                      title={task.title}
                      content={task.content}
                      date={task.date}
                      completed={task.completed}
                      important={task.important}
                      onDelete={fetchTasks}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout