import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FaListOl, FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdNotificationImportant } from "react-icons/md";

const Sidebar = () => {
  return (
    <Nav variant="pills" className="bg-dark h-100 flex-column justify-content-center" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="all" className="d-flex align-items-center gap-2"><FaListOl size="20"/>All Tasks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="important" className="d-flex align-items-center gap-2"><MdNotificationImportant size="20"/>Important</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="completed" className="d-flex align-items-center gap-2"><FaCheck size="20"/>Completed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="todo" className="d-flex align-items-center gap-2"><FaPen size="20"/>To Do</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Sidebar