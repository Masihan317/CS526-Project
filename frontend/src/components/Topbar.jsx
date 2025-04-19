import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Topbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='d-flex justify-content-between align-items-center text-white'>
      <h1>All Tasks</h1>
      <IoIosAddCircleOutline role='button' size="40" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" placeholder="Enter Task Title..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter Task Details..."/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Deadline</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
            <Form.Check type="checkbox" label="important" className="mb-3"></Form.Check>
            <Form.Check type="checkbox" label="completed"></Form.Check>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Topbar