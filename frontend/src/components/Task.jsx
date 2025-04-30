import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import deleteTask from "../utils/deleteTask";
import updateTask from "../utils/updateTask";

// the basic component for a Task object, presented as a card
// receive props that are task fields and onDelete function that gets triggered when deleting tasks
const Task = ({ id, title, content, date, completed, important, onDelete }) => {
  // Format the date to display only the date part (removing time)
  const formattedDate = new Date(date).toLocaleDateString();
  
  // Create a ref to track content overflow
  const contentRef = useRef(null);
  const [isContentTruncated, setIsContentTruncated] = useState(false);

  // Modal state controls for different operations
  const [deleteShow, setDeleteShow] = useState(false); // delete confirmation Modal controls
  const [editShow, setEditShow] = useState(false);  // edit Modal controls
  const [viewShow, setViewShow] = useState(false);     // Controls view details modal

  // Form state for editing task details
  const [editForm, setEditForm] = useState({
    title,
    content,
    date: date.split("T")[0], // Format date for date input
    important,
    completed,
  });

  /**
   * Effect hook to check if content is truncated
   * determine if we need to show the "View details" indicator
   */
  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      setIsContentTruncated(
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
      );
    }
  }, [content]);

  const handleDeleteClose = () => setDeleteShow(false); // close delete confirmation Modal controls
  const handleDeleteShow = () => setDeleteShow(true); // open delete confirmation Modal controls
  const handleEditClose = () => setEditShow(false); 
  const handleEditShow = () => setEditShow(true);
  const handleViewClose = () => setViewShow(false);
  const handleViewShow = () => setViewShow(true);

  // function to be called when
  const handleDelete = async () => {
    await deleteTask(id); // delete task
    handleDeleteClose(); // close delete confirmation modal
    onDelete(); // trigger refresh of tasks
  };

  // toggle the completion status of a task
  const handleToggleComplete = async () => {
    await updateTask(id, { completed: !completed }); // Call the updateTask function with the new completion status
    onDelete(); // Trigger, callback to refresh the task list
  };


   // form input changes during editing, update with new information
  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  // submit task editing, update the new taks content
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, editForm);
    handleEditClose();
    onDelete();
  };

  // Prevent event propagation when clicking buttons inside the card
  const handleButtonClick = (e, handler) => {
    e.stopPropagation();
    handler();
  };

  return (
    <>
      {/* Task Card - Entire card is clickable */}
      <Card 
        className="bg-dark text-white" 
        style={{ height: "20rem", cursor: "pointer" }}
        onClick={handleViewShow}
      >
        <Card.Body className="d-flex flex-column">
          {/* Task Title */}
          <Card.Title className="text-truncate">{title}</Card.Title>

          {/* Task Content/Description */}
          <div className="position-relative flex-grow-1">
            <Card.Text 
              ref={contentRef}
              className="overflow-hidden mb-0" 
              style={{ 
                display: '-webkit-box',
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '1.4',
                marginBottom: '0.25rem'
              }}
            >
              {content}
            </Card.Text>
            {/* Show "View details" indicator if content is truncated */}
            {isContentTruncated && (
              <div 
                className="text-muted d-inline"
                style={{ fontSize: '0.9rem' }}
              >
                ... View details
              </div>
            )}
          </div>

          {/* Task Footer Section */}
          <div className="mt-auto">
            {/* Task Deadline */}
            <Card.Text className="text-muted mb-2">{formattedDate}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              {/* Task Complete/Incomplete Toggle Button */}
              <Button 
                variant={completed ? "success" : "danger"}
                onClick={(e) => handleButtonClick(e, handleToggleComplete)} // Prevent card click, toggle completion.
              >
                {completed ? "Completed" : "Incomplete"} 
              </Button>
              {/* Action Buttons (Edit and Delete) */}
              <div className="d-flex gap-2">
                <FaEdit 
                  role="button" 
                  size={24} 
                  onClick={(e) => handleButtonClick(e, handleEditShow)} 
                />
                {/* Task Delete Button */}
                <MdDelete 
                  role="button" 
                  size={24} 
                  onClick={(e) => handleButtonClick(e, handleDeleteShow)} 
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={deleteShow} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Deletion Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this task? This action cannot be
          reversed.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Task Modal */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form for editing task details */}
          <Form onSubmit={handleEditSubmit}>
            {/* Title input field */}
            <Form.Group className="mb-3" controlId="editTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                placeholder="Enter Task Title..."
              />
            </Form.Group>

            {/* Content/Description textarea */}
            <Form.Group className="mb-3" controlId="editContent">
              <Form.Label>Content</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="content"
                value={editForm.content}
                onChange={handleEditChange}
                placeholder="Enter Task Details..."
              />
            </Form.Group>

            {/* Deadline date picker */}
            <Form.Group className="mb-3" controlId="editDate">
              <Form.Label>Deadline</Form.Label>
              <Form.Control 
                type="date" 
                name="date"
                value={editForm.date}
                onChange={handleEditChange}
              />
            </Form.Group>

            {/* Important status toggle */}
            <Form.Check 
              type="checkbox" 
              label="Important" 
              name="important"
              checked={editForm.important}
              onChange={handleEditChange}
              className="mb-3"
            />

            {/* Completion status toggle */}
            <Form.Check 
              type="checkbox" 
              label="Completed" 
              name="completed"
              checked={editForm.completed}
              onChange={handleEditChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Close button - discards changes */}
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          {/* Save button - submits form and updates task */}
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Details Modal */}
      <Modal show={viewShow} onHide={handleViewClose} centered>
        <Modal.Body>
          {/* Form for viewing task details */}
          <Form>
            {/* Title field */}
            <Form.Group className="mb-3" controlId="viewTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                value={title}
                readOnly
                plaintext
              />
            </Form.Group>

            {/* Content/Description field */}
            <Form.Group className="mb-3" controlId="viewContent">
              <Form.Label>Content</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={content}
                readOnly
                plaintext
              />
            </Form.Group>

            {/* Deadline field */}
            <Form.Group className="mb-3" controlId="viewDate">
              <Form.Label>Deadline</Form.Label>
              <Form.Control 
                type="text" 
                value={formattedDate}
                readOnly
                plaintext
              />
            </Form.Group>

            {/* Important status */}
            <Form.Group className="mb-3" controlId="viewImportant">
              <Form.Label>Status</Form.Label>
              <div>
                <Form.Check 
                  type="checkbox" 
                  label="Important" 
                  checked={important}
                  readOnly
                  disabled
                />
                <Form.Check 
                  type="checkbox" 
                  label="Completed" 
                  checked={completed}
                  readOnly
                  disabled
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Task; // export component to be used externally
