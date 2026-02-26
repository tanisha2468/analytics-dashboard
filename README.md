Analytics Dashboard – Full Stack Application

Project Overview:

This is a full-stack Analytics Dashboard built using Node.js, Express, MongoDB, and React.

The application implements JWT-based authentication and provides a dynamic dashboard that visualizes sales data using multiple chart types. It demonstrates REST API development, database integration, authentication, protected routes, and frontend data visualization.

---

Tech Stack Used

Frontend:

- React.js
- React Router DOM
- Axios
- Chart.js
- react-chartjs-2

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- jsonwebtoken (JWT)
- bcryptjs
- dotenv
- cors

---

API Endpoints

Authentication

POST /api/auth/register
Registers a new user.

POST /api/auth/login
Authenticates user and returns a JWT token.

---

Sales

GET /api/sales
Fetch all sales data (Protected route).

POST /api/sales
Add a new sales record.

---

Database Schema

User Collection

Fields:
name (String)
email (String, unique)
password (String, hashed using bcrypt)
createdAt (Date)

---

Sales Collection

Fields:
category (String)
revenue (Number)
quantity (Number)
date (Date)
createdAt (Date)

---

Dashboard Features

Revenue by Category (Bar Chart)

Revenue Over Time (Line Chart)

Revenue Trend (Area Chart)

Revenue Distribution (Pie Chart)

Quantity by Category (Doughnut Chart)

Category Filtering

Protected Dashboard Route

Loading and Error Handling

---

Project Structure

analytics-dashboard
backend
frontend
README.md
