# Blog Platform with Comments

A full-stack blogging platform built using the MERN stack where users can register, log in, create blog posts, edit or delete their own posts, and interact through comments.

---

## Live Demo

**Frontend:**
https://blog-platform-lac-five.vercel.app

**Backend API:**
https://blog-platform-oexy.onrender.com

**GitHub Repository:**
https://github.com/ashmika2103/blog-platform

---

## Features

### User Authentication

* User Registration
* User Login
* JWT Authentication
* Password Encryption using bcrypt

### Blog Management

* Create Blog Posts
* View All Blog Posts
* Edit Blog Posts
* Delete Blog Posts

### Comments

* Add Comments
* View Comments for Each Post

### Responsive UI

* Clean and simple interface
* Easy navigation

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## Project Structure

```
blog-platform/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/ashmika2103/blog-platform.git
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```
PORT=5000
MONGO_URI=mongodb+srv://ashmika:Ashmika12345@cluster0.usqajlj.mongodb.net/?appName=Cluster0
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

* POST `/api/users/register`
* POST `/api/users/login`

### Posts

* GET `/api/posts`
* POST `/api/posts`
* PUT `/api/posts/:id`
* DELETE `/api/posts/:id`

### Comments

* GET `/api/comments/:postId`
* POST `/api/comments`

---

## Learning Outcomes

This project helped me learn:

* MERN Stack Development
* REST API Development
* JWT Authentication
* MongoDB Atlas Integration
* CRUD Operations
* Frontend & Backend Deployment
* Git and GitHub Version Control

---

## Future Improvements

* User Profile Page
* Search Blogs
* Categories & Tags
* Like & Share Posts
* Rich Text Editor
* Image Upload
* Dark Mode

---

## Author

**Ashmika K**
