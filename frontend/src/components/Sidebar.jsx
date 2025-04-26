import React from "react";
import Nav from "react-bootstrap/Nav";
import { FaListOl, FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdNotificationImportant } from "react-icons/md";

// Sidebar component receives a prop called onFilterChange that triggers when filtering
// Uses "pills" variant and vertical layout for styling
// Stays on the left for larger screens and on top for smaller screens
const Sidebar = ({ onFilterChange }) => {
  return (
    <Nav
      id="sidebar"
      variant="pills"
      className="bg-dark h-100 flex-column justify-content-center"
      defaultActiveKey="all"
    >
      {/* All Tasks Option */}
      <Nav.Item>
        <Nav.Link
          eventKey="all"
          className="d-flex align-items-center gap-2"
          onClick={() => onFilterChange("all")}
        >
          <FaListOl size="20" />
          All Tasks
        </Nav.Link>
      </Nav.Item>

      {/* Important Tasks Only */}
      <Nav.Item>
        <Nav.Link
          eventKey="important"
          className="d-flex align-items-center gap-2"
          onClick={() => onFilterChange("important")}
        >
          <MdNotificationImportant size="20" />
          Important
        </Nav.Link>
      </Nav.Item>

      {/* Completed Tasks Only */}
      <Nav.Item>
        <Nav.Link
          eventKey="completed"
          className="d-flex align-items-center gap-2"
          onClick={() => onFilterChange("completed")}
        >
          <FaCheck size="20" />
          Completed
        </Nav.Link>
      </Nav.Item>

      {/* Incomplete Tasks Only */}
      <Nav.Item>
        <Nav.Link
          eventKey="todo"
          className="d-flex align-items-center gap-2"
          onClick={() => onFilterChange("todo")}
        >
          <FaPen size="20" />
          To Do
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar; // export component to be used externally
