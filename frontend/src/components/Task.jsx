import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import deleteTask from '../utils/deleteTask';
import updateTask from '../utils/updateTask';

const Task = ({ id, title, content, date, completed, important, onDelete }) => {
  const formattedDate = new Date(date).toLocaleDateString()

  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [editForm, setEditForm] = useState({
    title,
    content,
    date: date.split('T')[0],
    important,
    completed
  });

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleDelete = async () => {
    await deleteTask(id)
    handleDeleteClose()
    onDelete()
  }

  const handleToggleComplete = async () => {
    await updateTask(id, { completed: !completed })
    onDelete()
  }

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, editForm);
    handleEditClose();
    onDelete();
  };

  return (
    <>
      <Card className="bg-dark text-white" style={{ height: '20rem' }}>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>

          <div className="mt-auto">
            <Card.Text className="text-muted mb-2">{formattedDate}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant={completed ? "success" : "danger"} onClick={handleToggleComplete}>
                {completed ? "Completed" : "Incomplete"}
              </Button>
              <div className="d-flex gap-2">
                <FaEdit role='button' size={24} onClick={handleEditShow} />
                <MdDelete role='button' size={24} onClick={handleDeleteShow} />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Delete Modal */}
      <Modal show={deleteShow} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Deletion Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task? This action cannot be reversed.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
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
            <Form.Group className="mb-3" controlId="editDate">
              <Form.Label>Deadline</Form.Label>
              <Form.Control 
                type="date" 
                name="date"
                value={editForm.date}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Check 
              type="checkbox" 
              label="Important" 
              name="important"
              checked={editForm.important}
              onChange={handleEditChange}
              className="mb-3"
            />
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
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Task