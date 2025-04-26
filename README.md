# CS526 Project Task Management Application

## Project Overview
Our final project is a fullstack **Task Management Application** that allows our user to create, retrieve, update, and delete tasks on a home page.

A task has a title, a description, a due date, and 2 flags to indicate if the task is important and/or already completed. The user can mark the tasks as completed and/or important, and the user can filter the tasks with those tags.

The application is both mobile and desktop friendly with responsive UI design. It is built using the MERN tech stack and deployed on Vercel. Using React Bootstrap allowed us to combine the power of React while enjoying the convenience of Bootstrap components and built-in variables rewritten in React.

We did not use a state management tool like Zustand or Redux because it's still a relatively simple application.

## Getting Started
This section is for local setup. If you would like to see a hosted version, please check the Site Preview Section later in this documentation.

1. Clone the Repository

```
git clone https://github.com/Masihan317/CS526-Project.git
cd CS526-Project
```

2. Frontend Setup

The Vite config file sets the default frontend port to 5000 but this number can be changed to fit your needs.
```
cd frontend
npm install
npm run dev
```

3. Backend Setup

You will need a MONGO_URI variable in your .env file that connects to MongoDB. You can optionally have a PORT variable. The default backend port is 3000, but you can change this number. (Note that if you do change this number, please also update the Vite config in the frontend folder.)

In a separate terminal as the front end one, run
```
cd backend
npm install
nodemon server.js
```

## Features
- **Add New Tasks**: Users can add a task by clicking the add icon on the top right of the screen. A modal will appear directing the users to enter details of a new task (title, description, deadline, check task important, and check task completed).
- **List All Tasks**: When visiting the home page, users can see a list of existing tasks from the database.
- **Update A Task**: Users can click the edit icon on the bottom of a task. A modal will appear directing the users to edit the details of the current task and update.
- **Delete A Task**: Users can delete a task by clicking the delete icon on the bottom of the task. A modal will ask the user to confirm this action.
- **Filter Tasks by Category**: Users can filter the tasks that appear on the home page with a list of filters on the sidebar on the left.
- **Toggle Task Completeness**: Users can click on the `Complete/Incomplete` button on the page to toggle the completeness state of the task. (A complete task will be marked incomplete, and vice versa).
- **Responsive View**: The application is responsive and will adjust the UI for a better user experience on mobile and smaller screens. The number of cards shown and the position of the sidebar moves accordingly.

## Tech Stack
- Frontend: Vite, React, React Bootstrap
- Backend: NodeJS, ExpressJS
- Database: MongoDB (Mongoose as Object Data Mapper)
- Deployment: Vercel

## Site Preview
The site is deployed on Vercel. Here's a link for you to test out.

## Team Members
- Sihan Ma (@Masihan317)

  Handled Vite setup and Built the main UI (responsive) with React Bootstrap. Developed the Express Server, Implemented REST API endpoints and Integrated MongoDB. Implemented add task, list all tasks, and delete tasks functionality. Wrote Documentation. Updated Favicon.

- Yuexuan Lu (@noiorhyun)

  Implemented edit tasks, task filtering on home page, and click button to switch task between completed and incomplete functionality.