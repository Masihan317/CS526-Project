import React, { useState, useEffect } from 'react'
import Task from '../components/Task'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import useFetchTasks from '../hooks/useFetchTasks'

const Layout = () => {
  const { tasks, fetchTasks } = useFetchTasks()

  return (
    <>
      <div className='container-fluid bg-black'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col mt-4 mb-3'>
                  <Topbar onCreate={fetchTasks}/>
                </div>
              </div>
              <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4 align-items-baseline'>
                {tasks.map(task => (
                  <div className='col' key={task._id}>
                    <Task
                      title={task.title}
                      content={task.content}
                      date={task.date}
                      completed={task.completed}
                      important={task.important}
                    />
                  </div>
                ))}
                {/*
                <div className='col'>
                  <Task
                    title="Call mom"
                    content="Check in and catch up this weekend"
                    date="2025-04-14"
                    completed={true}
                    important={true}
                  />
                </div>
                <div className='col'>
                  <Task
                    title="Plan trip to Japan"
                    content="Look into flights and Airbnbs in Tokyo"
                    date="2025-05-01"
                    completed={false}
                    important={true}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout