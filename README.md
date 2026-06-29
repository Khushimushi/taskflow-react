# TaskFlow

A modern full-stack task management application that allows users to securely register, log in and manage their daily tasks from anywhere.

## Live Demo

**Frontend:** https://taskflow-react-beta.vercel.app/

**Backend API:** https://taskflow-react.onrender.com/api

## Features

* User Registration & Login
* JWT Authentication
* Protected Routes & APIs
* Create Tasks
* Mark Tasks as Complete
* Delete Tasks
* View Personal Tasks
* Gmail Email Validation
* Strong Password Validation
* Live Password Requirement Indicators
* Responsive User Interface

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT (JSON Web Tokens)
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

## 📁 Project Structure

```
TaskFlow
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
└── backend
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    ├── config
    └── server.js
```

## Authentication Flow

1. User registers with a Gmail account.
2. Password is validated for strength.
3. Password is hashed using bcrypt before storage.
4. JWT token is generated after successful authentication.
5. Token is stored on the client.
6. Protected API requests include the JWT token in the Authorization header.

## Installation

### Clone the repository

```bash
git clone https://github.com/Khushimushi/taskflow.git
cd taskflow
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000/api
```

For production:

```
VITE_API_URL=https://taskflow-react.onrender.com/api
```

## 📸 Screenshots

*Add screenshots of the Home page, Login, Register, and Dashboard here.*

## Future Improvements

* Task Categories
* Task Priority
* Due Dates
* Search & Filter
* Dark Mode
* User Profile
* Toast Notifications
* Forgot Password

## Author

**Khushi Goyal**

GitHub: https://github.com/Khushimushi

---

⭐ If you found this project useful, consider giving it a star!
