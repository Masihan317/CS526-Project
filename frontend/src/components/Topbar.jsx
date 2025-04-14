import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const Topbar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center text-white'>
      <h1>All Tasks</h1>
      <IoIosAddCircleOutline role='button' size="40" />
    </div>
  )
}

export default Topbar