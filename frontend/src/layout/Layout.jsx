import React from 'react'
import Task from '../components/Task'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const Layout = () => {
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
                  <Topbar />
                </div>
              </div>
              <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4 align-items-baseline'>
                <div className='col'>
                  <Task
                    title="Buy groceries"
                    content="Milk, Eggs, Bread, Coffee"
                    date="2025-04-13"
                    completed={false}
                    important={true}
                  />
                </div>
                <div className='col'>
                  <Task
                    title="Finish project report"
                    content="Finalize the last section and prepare slides"
                    date="2025-04-15"
                    completed={true}
                    important={false}
                  />
                </div>
                <div className='col'>
                  <Task
                    title="Book dentist appointment"
                    content="Schedule a cleaning for next week"
                    date="2025-04-20"
                    completed={false}
                    important={false}
                  />
                </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout