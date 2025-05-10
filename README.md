# CS526 Project Task Management Application

## Project Overview
Our final project is a fullstack **Task Management Application** that allows our user to create, retrieve, update, and delete tasks on a home page.

A task has a title, a description, a due date, and 2 flags to indicate if the task is important and/or already completed. The user can mark the tasks as completed and/or important, and the user can filter the tasks with those tags.

The application is both mobile and desktop friendly with responsive UI design. It is built using the MERN tech stack and deployed on Render. Using React Bootstrap allowed us to combine the power of React while enjoying the convenience of Bootstrap components and built-in variables rewritten in React.

We did not use a state management tool like Zustand or Redux because it's still a relatively simple application.

## Final Presentation Video
Please check the `/video` directory for our recorded final presentation.

## Final Report
Please check the `/report` directory for our final project report.

## Final Presentation Slides
Please check the `/ppt` directory for our final project presentation slides.

## Tech Stack
- Frontend: Vite, React, React Bootstrap
- Backend: NodeJS, ExpressJS
- Database: MongoDB (Mongoose as Object Data Mapper)
- Deployment: Render

## Site Preview
The site is deployed on Render. Here's a link for you to test out.
https://cs526-project.onrender.com/

## Getting Started
This section is for local setup. If you would like to see a hosted version, please check the Site Preview Section earlier in this documentation.

1. Clone the Repository

```
git clone https://github.com/Masihan317/CS526-Project.git
cd CS526-Project
```

From here, you actually have 2 options to run the application locally. We provide an option to to run the frontend and backend separately, and an option to build the frontend (with the super powerful and beautiful ability of Vite) and then run the application as a whole in the root directory. That is why we have package.json files in both the root and the frontend/backend directory.

### Option A (Separate Frontend && Backend)

2. Frontend Setup

Move into the `/frontend` directory and install the node modules. You can then run the frontend. The Vite config file sets the default frontend port to 5000 but this number can be changed to fit your needs. 
```
cd frontend
npm install
npm run dev
```

3. Backend Setup

You will need a MONGO_URI variable in your .env file that connects to MongoDB. You can optionally have a PORT variable. The default backend port is 3000, but you can change this number. (Note that if you do change this number, please also update the Vite config in the frontend folder so the requests are redirected correctly.)

In a separate terminal as the frontend one, run
```
cd backend
npm install
nodemon server.js
```

This will start the backend server.


4. Now you should be able to use the application!

### Option B (Integrated Fullstack from Root Directory)

2. You will need to build the frontend first using Vite.

```
npm run build
```

I have written a custom script that does just that. This is the full command run when we say `npm run build` in the root directory: `npm install && npm install --prefix frontend && npm run build --prefix frontend`

After building the frontend, you should see a `/dist` folder in your `/frontend` directory.

3. Now you are ready to start the backend.

```
npm run start
```

Again I wrote a custom script `npm run start` that does `node backend/server.js`. The default port will be 3000 but feel free to update the `PORT` variable in the `.env` file as you see fit.

4. Now you should be able to use the application!

## Features
- **Add New Tasks**: Users can add a task by clicking the add icon on the top right of the screen. A modal will appear directing the users to enter details of a new task (title, description, deadline, check task important, and check task completed).
- **List All Tasks**: When visiting the home page, users can see a list of existing tasks from the database.
- **Update A Task**: Users can click the edit icon on the bottom of a task. A modal will appear directing the users to edit the details of the current task and update.
- **Delete A Task**: Users can delete a task by clicking the delete icon on the bottom of the task. A modal will ask the user to confirm this action.
- **View A Task**: The user can click on a task to see its details. When the task gets too long, There will be some ... and a view details part where clicking on it allows us to expand to see the full details to prevent overflow.
- **Filter Tasks by Category**: Users can filter the tasks that appear on the home page with a list of filters on the sidebar on the left.
- **Toggle Task Completeness**: Users can click on the `Complete/Incomplete` button on the page to toggle the completeness state of the task. (A complete task will be marked incomplete, and vice versa).
- **Responsive View**: The application is responsive and will adjust the UI for a better user experience on mobile and smaller screens. The number of cards shown and the position of the sidebar moves accordingly.
- **Loading State**: The main page displays a spinner when the page is loading for a better user experience.

## Screenshots
Please check the `/screenshots` folder for sample images.

## Database Scripts
We don't really have a MongoDB dump file per say, we just defined a task Schema which corresponds to a `tasks` collection in MongoDB using Mongoose. The Schema basically included the different fields of a task including a title, a description, a date, whether or not the task is important or completed. This `tasks` collection represents the list of tasks on our website.

We added the tasks using our frontend UI and started with 0 tasks in the database. Just in case you would like to see the list of tasks in our current system, we do have an exported json file that can be found in `/backend/data/tasks.json`. If you want to see the task schema it's in `backend/models/taskModel.js`.

## API Documentation
Please refer to the APIDOC.md file in the root directory for a detailed explanation of each of the endpoints including request format, type, return data type, description, example request, example response, and error handling.

## Team Members
- Sihan Ma (@Masihan317)

  Handled Vite setup and Built the main UI (responsive) with React Bootstrap. Developed the Express Server, Implemented REST API endpoints and Integrated MongoDB. Implemented add task, list all tasks, and delete tasks functionality. Wrote Documentation (README.md and APIDOC.md). Updated favicon. Handled loading state of main page. Deployed Application on Render.

- Yuexuan Lu (@noiorhyun)

  Implemented edit tasks, task filtering on home page, and click button to switch task between completed and incomplete functionality. Implemented View Detail Card. Handled Overflow of Tasks.