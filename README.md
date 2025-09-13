# User Management Dashboard (Full Stack Assignment - Forty4 Tech)

A full-stack application built as part of the **Fourty4 Tech Assignment**. This project features a complete **User Management Dashboard** with full CRUD (Create, Read, Update, Delete) functionality, a RESTful Node.js backend, and a responsive React frontend.



---

## Live Demo

👉 **[View the Live Site on Netlify](https://fourty4assignmentnxtwavefaraz.netlify.app/)**

---

## GitHub Repositories

-   **[Fullstack Repo (Frontend)](https://github.com/farazsfa007/fourty4-assignment-nxtwave-fullstack)**
-   **[Backend Repo](https://github.com/farazsfa007/fourty4-assignment-nxtwave-backend)**

---

## ✨ Features

### Backend (Node.js + Express + MongoDB)

-   **RESTful API:** Full CRUD operations for managing users.
-   **Schema Validation:** Robust validation using **Joi** to ensure data integrity.
-   **Database:** MongoDB with **Mongoose** for elegant object modeling, including nested `address` and `geo` objects.
-   **Pagination & Search:** Efficiently handle large datasets with built-in support for pagination and searching.
-   **Error Handling:** Descriptive HTTP status codes for clear and predictable API responses.
-   **Seeding:** Includes a script to easily populate the database with sample data.
-   **Configuration:** Easily configurable via environment variables (`.env`).

### Frontend (React + TailwindCSS)

-   **User Dashboard:** An interactive table to list, search, and paginate through users.
-   **Create & Update:** Intuitive forms to add a new user or update an existing one, handling nested data smoothly.
-   **User Details:** A dedicated page to view comprehensive details for a single user.
-   **Delete Functionality:** Seamlessly delete users with confirmation.
-   **Modern UI:** A clean and responsive user interface styled with **TailwindCSS**.
-   **API Integration:** Efficient data fetching and state management using **Axios**.
-   **Routing:** Smooth client-side navigation powered by **React Router v6**.

---

## 🛠️ Tech Stack

| Category      | Technology                                    |
| :------------ | :-------------------------------------------- |
| **Backend** | Node.js, Express, MongoDB, Mongoose, Joi      |
| **Frontend** | React (Vite), React Router, Axios, TailwindCSS|
| **Deployment**| Netlify (Frontend), Render/Heroku (Backend)   |

---

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18.x or higher)
-   npm or yarn
-   A MongoDB database connection string (from a local instance or a cloud service like MongoDB Atlas)

### 1. Clone the Repositories

```bash
# Clone the frontend repository
git clone [https://github.com/farazsfa007/fourty4-assignment-nxtwave-fullstack.git](https://github.com/farazsfa007/fourty4-assignment-nxtwave-fullstack.git)

# Clone the backend repository
git clone [https://github.com/farazsfa007/fourty4-assignment-nxtwave-backend.git](https://github.com/farazsfa007/fourty4-assignment-nxtwave-backend.git)


### 2. Backend Setup
# Navigate to the backend directory
cd fourty4-assignment-nxtwave-backend

# Install dependencies
npm install

# Create a .env file
touch .env

# Start the development server
npm run dev
