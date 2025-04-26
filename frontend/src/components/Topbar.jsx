import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import createTask from "../utils/createTask";

// Topbar component receives a prop called onCreate that triggers when creating new tasks
// Stays at top of main area with a title named "Tasks" and an add button
const Topbar = ({ onCreate }) => {
  // state to control fields in add task Modal
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [important, setImportant] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [show, setShow] = useState(false); // add task Modal controls

  const handleClose = () => setShow(false); // close add task Modal control
  const handleShow = () => setShow(true); // open add task Modal control

  // function trigger when submitting form
  const handleSubmit = async () => {
    const taskInfo = { title, content, date, important, completed }; // combine task info

    await createTask(taskInfo); // add task to database
    handleClose(); // close add task Modal
    onCreate(); // refresh tasks
  };

  return (
    <div className="d-flex justify-content-between align-items-center text-white">
      {/* Title */}
      <h1>Tasks</h1>

      {/* Add Button */}
      <IoIosAddCircleOutline role="button" size="40" onClick={handleShow} />

      {/* Add Task Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* Modal Title */}
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Task Title Field */}
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Task Title..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            {/* Task Content/Description Field */}
            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Task Details..."
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {/* Task Deadline Field */}
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            {/* Task Important Flag Checkbox */}
            <Form.Check
              type="checkbox"
              label="important"
              className="mb-3"
              onChange={(e) => setImportant(e.target.checked)}
            ></Form.Check>
            {/* Task Completed Flag Checkbox */}
            <Form.Check
              type="checkbox"
              label="completed"
              onChange={(e) => setCompleted(e.target.checked)}
            ></Form.Check>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Modal Footer Close Button */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Modal Footer Create New Task Button, triggers handleSubmit function */}
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Topbar; // export component to be used externally
