import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = ({ title, content, date, completed, important }) => {
  const formattedDate = new Date(date).toLocaleDateString()

  return (
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
              <MdDelete role='button' size={24} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Task