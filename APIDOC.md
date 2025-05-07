# CS526 Project Task API Documentation

The Task API provides information about the details of each tasks including the title, content, date, whether or not the task important and/or completed of the tasks in the database of our CS526 Project Task Management Application.

This API documentation annotated the 4 endpoints in details, outlining the request format, request type, returned data format, description, example requests, example responses, and error handling. You can test those endpoints yourself after setting up the backend server using the instructions outlined in the README.md file using Postman.

## Endpoint 1: Creates a new task

**Request Format:** `/api/tasks/create`

**Request Type:** POST

**Returned Data Format** JSON

**Description:** Creates a new task using the data provided in the request body.

**Example Request:**
```json
{
  "title": "Clean the Kitchen",
  "content": "Wipe counters, wash dishes, empty trash, and mop the floor. Should take ~30 minutes.",
  "date": "2025-05-10",
  "important": true,
  "completed": false
}
```

**Example Response:**
```json
{
  "_id": "680296651761547e5d766672",
  "title": "Clean the Kitchen",
  "content": "Wipe counters, wash dishes, empty trash, and mop the floor. Should take ~30 minutes.",
  "date": "2025-05-10T00:00:00.000+00:00",
  "important": false,
  "completed": false,
  "__v": 0
}
```

**Error Handling:**
- Possible 500 (server error) errors:
  - We just send the error message back through `res.status(500).json({ error: err message })`.

## Endpoint 2: Retrieves all tasks

**Request Format:** `/api/tasks/retrieve`

**Request Type:** GET

**Returned Data Format** JSON

**Description:** Returns a list of all tasks stored in the database.

**Example Response:**
```json
[
  {
    "_id": "680296651761547e5d766672",
    "title": "Clean the Kitchen",
    "content": "Wipe counters, wash dishes, empty trash, and mop the floor. Should take ~30 minutes.",
    "date": "2025-05-10T00:00:00.000+00:00",
    "important": false,
    "completed": false,
    "__v": 0
  },
  {
    "_id": "680297fb1761547e5d76667a",
    "title": "Buy Groceries",
    "content": "Milk, Eggs, Bread, Coffee",
    "date": "2025-04-13T00:00:00.000+00:00",
    "important": false,
    "completed": true,
    "__v": 0
  },
  ...
]
```

**Error Handling:**
- Possible 500 (server error) errors:
  - We just send the error message back through `res.status(500).json({ error: err message })`.

## Endpoint 3: Updates a task by ID

**Request Format:** `/api/tasks/update/:id`

**Request Type:** PUT

**Returned Data Format** JSON

**Description:** Updates a task's data by its unique ID.

**Example Request:** `/api/tasks/update/680296651761547e5d766672`
```json
{
  "_id": "680296651761547e5d766672",
  "title": "Clean the Kitchen",
  "content": "Ok I want to change the content",
  "date": "2025-05-19T00:00:00.000+00:00",
  "important": true,
  "completed": true,
  "__v": 0
}
```

**Example Response:**
```json
{
  "_id": "680296651761547e5d766672",
  "title": "Clean the Kitchen",
  "content": "Ok I want to change the content",
  "date": "2025-05-19T00:00:00.000+00:00",
  "important": true,
  "completed": true,
  "__v": 0
}
```

- Possible 400 errors:
  - If the task with the given `id` is not found, we return 404 with the message `Task not found.`
- Possible 500 (server error) errors:
  - We just send the error message back through `res.status(500).json({ error: err message })`.

## Endpoint 3: Deletes a task by ID

**Request Format:** `/api/tasks/delete/:id`

**Request Type:** DELETE

**Returned Data Format** JSON

**Description:** Deletes the task with the specified ID.

**Example Request:** `/api/tasks/delete/680296651761547e5d766672`

**Example Response:**
```json
{
  "message": "Task deleted successfully",
  "task": {
    "_id": "680296651761547e5d766672",
    "title": "Clean the Kitchen",
    "content": "Ok I want to change the content",
    "date": "2025-05-19T00:00:00.000+00:00",
    "important": true,
    "completed": true,
    "__v": 0
  }
}
```

**Error Handling:**
- Possible 400 errors:
  - If the task with the given `id` is not found, we return 404 with the message `Task not found.`
- Possible 500 (server error) errors:
  - We just send the error message back through `res.status(500).json({ error: err message })`.