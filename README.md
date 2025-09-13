````
markdown
# User Management Dashboard (Full Stack Assignment - Forty4 Tech)

A full stack application built as part of the **Fourty4 Tech Assignment**.  
The app provides a **User Management Dashboard** with full CRUD functionality, integrated with a Node.js backend and a React frontend.

---

## Live Demo
--> [Deployed Frontend on Netlify](https://fourty4assignmentnxtwavefaraz.netlify.app/)

---

##  GitHub Repositories
-  [Fullstack Repo](https://github.com/farazsfa007/fourty4-assignment-nxtwave-fullstack)
-  [Backend Repo](https://github.com/farazsfa007/fourty4-assignment-nxtwave-backend)

---

## Features
### Backend (Node.js + Express + MongoDB)
- RESTful API with CRUD for Users
- Schema validation using Joi
- MongoDB (Mongoose) with nested `address` + `geo` objects
- Pagination & search support
- Error handling with proper HTTP status codes
- Seed script for sample data
- Environment variables for configuration

### Frontend (React + TailwindCSS)
- User listing table with pagination & search
- Add new user form (with nested address + company)
- View user details page
- Delete user functionality
- Modern UI with TailwindCSS
- API integration via Axios
- React Router v6 for navigation

---

## Tech Stack
**Backend**
- Node.js
- Express
- MongoDB + Mongoose
- Joi (validation)
- CORS, Helmet, Morgan

**Frontend**
- React (Vite)
- React Router DOM
- Axios
- TailwindCSS

**Deployment**
- Frontend → Netlify
- Backend → (local / any cloud of choice, e.g. Render/Heroku/MongoDB Atlas)

---

## Getting Started

### 1 Clone Repos
```bash
# Fullstack repo
git clone https://github.com/farazsfa007/fourty4-assignment-nxtwave-fullstack.git

# Backend repo
git clone https://github.com/farazsfa007/fourty4-assignment-nxtwave-backend.git
````

---

### 2️ Backend Setup

```bash
cd fourty4-assignment-nxtwave-backend
npm install
cp .env.example .env
```

Update `.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/user_dashboard
```

Run dev server:

```bash
npm run dev
```

Seed sample data:

```bash
npm run seed
```

API will be available at:
`http://localhost:5000/api/users`

---

### 3️ Frontend Setup

```bash
cd fourty4-assignment-nxtwave-fullstack
npm install
npm run dev
```

Default Vite URL:  `http://localhost:5173`

---

```
## Assignment Requirements Coverage

* Backend with CRUD endpoints 
* Joi validation 
* Error handling + proper HTTP status codes 
* Database seeding 
* React frontend with CRUD functionality 
* Pagination & search 
* Deployed frontend 
* Repositories + README 

---

## Author

**Syed Faraz Ahmad**
 MERN Stack Developer | Data Science Enthusiast
 [LinkedIn](https://www.linkedin.com/in/farazsfa007)
 [GitHub](https://github.com/farazsfa007)

```
