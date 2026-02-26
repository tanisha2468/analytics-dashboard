📊 Analytics Dashboard – Full Stack Application
📌 Project Overview

This is a full-stack Analytics Dashboard built using the MERN stack (MongoDB, Express, React, Node.js).

The application provides:

• JWT-based authentication (Register/Login)
• Secure REST APIs
• MongoDB database integration
• Dynamic dashboard with multiple data visualizations
• Category-based filtering
• Clean separation of frontend and backend

The dashboard visualizes sales data including revenue trends, category-wise revenue, and product quantity distribution.

🛠 Tech Stack Used
Frontend

React.js

React Router DOM

Axios

Chart.js

React ChartJS 2

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

CORS

🔌 API Endpoints
🔐 Authentication Routes

POST /api/auth/register
Registers a new user.

Body:
{
"name": "Tanisha",
"email": "test@gmail.com
",
"password": "123456"
}

POST /api/auth/login
Logs in user and returns JWT token.

Body:
{
"email": "test@gmail.com
",
"password": "123456"
}

Response:
{
"token": "JWT_TOKEN"
}

📊 Sales Routes

GET /api/sales
Fetch all sales data (Protected Route)

POST /api/sales
Add new sales record

Body:
{
"category": "Groceries",
"revenue": 5000,
"quantity": 20,
"date": "2026-02-26"
}

🗂 Database Schema
👤 User Schema

Collection: users

{
name: String,
email: String (unique),
password: String (hashed),
createdAt: Date
}

📦 Sales Schema

Collection: sales

{
category: String,
revenue: Number,
quantity: Number,
date: Date,
createdAt: Date
}

▶️ Steps to Run the Project
1️⃣ Clone Repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

cd analytics-dashboard

🚀 Backend Setup

cd backend
npm install

Create a .env file inside backend folder:

PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:

npm start

Server will run on:
http://localhost:5001

💻 Frontend Setup

cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

Make sure axios baseURL points to backend:

http://localhost:5001

📊 Dashboard Features

The dashboard displays:

• Revenue by Category (Bar Chart)
• Revenue Over Time (Line Chart)
• Revenue Trend (Area Chart)
• Revenue Distribution (Pie Chart)
• Quantity by Category (Doughnut Chart)

Includes category filtering dropdown.
