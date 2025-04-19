import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import deleteTask from '../utils/deleteTask';

const Task = ({ id, title, content, date, completed, important, onDelete }) => {
  const formattedDate = new Date(date).toLocaleDateString()

  const [deleteShow, setDeleteShow] = useState(false);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  const handleDelete = async () => {
    await deleteTask(id)
    handleDeleteClose()
    onDelete()
  }

  return (
    <>
      <Card className="bg-dark text-white" style={{ height: '20rem' }}>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>

          <div className="mt-auto">
            <Card.Text className="text-muted mb-2">{formattedDate}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant={completed ? "success" : "danger"}>
                {completed ? "Completed" : "Incomplete"}
              </Button>
              <div className="d-flex gap-2">
                <FaEdit role='button' size={24} />
                <MdDelete role='button' size={24} onClick={handleDeleteShow} />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

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
    </>
  )
}

export default Task