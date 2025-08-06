# Expense Tracker

A full-stack expense tracking application built with the MERN stack to help users manage their personal finances effectively. This application provides an intuitive interface for tracking income, expenses, and viewing financial insights through interactive dashboards.

## 🌟 Features

- **User Authentication & Authorization** - Secure user registration and login system
- **Expense Management** - Add, edit, and delete expense entries with categories
- **Income Tracking** - Track multiple income sources and types
- **Category Management** - Create custom categories for better expense organization
- **Interactive Dashboard** - Visual overview of financial data with charts and graphs
- **Transaction History** - Comprehensive view of all financial transactions
- **Budget Insights** - Analyze spending patterns and financial trends
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Real-time Updates** - Instant data synchronization across the application

## 🚀 Demo

🔗 [Live Demo](https://expense-tracker-kkj.vercel.app)

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface and component management
- **React Router** - Client-side routing
- **Context API/Redux** - State management
- **Axios** - HTTP client for API calls
- **Chart.js/Recharts** - Data visualization

### Backend
- **Node.js** - Server-side runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing and security

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Backend Setup

1. Clone the repository:
git clone https://github.com/kaushal-kj/Expense-Tracker.git
cd Expense-Tracker



2. Navigate to backend directory:
cd backend



3. Install backend dependencies:
npm install



4. Create a `.env` file in the backend directory:

    PORT=5000

    MONGODB_URI=your_mongodb_connection_string

    JWT_SECRET=your_jwt_secret_key

    CLIENT_URL=http://localhost:5173



5. Start the backend server:
  npm start

  or for development
  npm run dev


### Frontend Setup

1. Navigate to frontend directory:
cd frontend



2. Install frontend dependencies:
npm install



3. Create a `.env` file in the frontend directory:
VITE_BACKEND_PORT=http://localhost:5000/api



4. Start the frontend development server:
npm run dev



The application will be available at `http://localhost:5173`

## 🖥️ Usage

### Getting Started
1. **Register/Login** - Create a new account or login with existing credentials
2. **Setup Categories** - Create income and expense categories (Salary, Food, Transport, etc.)
3. **Add Transactions** - Record your income and expenses with appropriate categories
4. **View Dashboard** - Monitor your financial overview with interactive charts
5. **Analyze Trends** - Use filtering options to analyze spending patterns

### Key Functionality
- **Add Income**: Record salary, freelance work, investments, and other income sources
- **Track Expenses**: Log daily expenses with categories and descriptions  
- **Budget Planning**: Set monthly budgets and track spending against goals
- **Financial Reports**: Generate detailed reports for specific time periods
- **Data Export**: Export transaction data for external analysis

## 🗂️ Project Structure

Expense-Tracker/ \
├── backend/ \
│ ├── controllers/ # Route controllers\
│ ├── middleware/ # Authentication & validation middleware\
│ ├── models/ # MongoDB schemas\
│ ├── routes/ # Express routes\
│ ├── utils/ # Utility functions\
│ └── server.js # Main server file\
├── frontend/\
│ ├── public/ # Static files\
│ ├── src/\
│ │ ├── components/ # React components\
│ │ ├── context/ # Context providers\
│ │ ├── pages/ # Page components\
│ │ ├── utils/ # Helper functions\
│ │ └── App.js # Main App component\
│ └── package.json\
└── README.md



## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Income
- `GET /api/add-income` - Add income
- `POST /api/update-income/:id` - Update income
- `PUT /api/delete-income/:id` - Delete income
- `DELETE /api/get-income` - Get income

### Expense
- `GET /api/add-expense` - Add expense
- `POST /api/update-expense/:id` - Update expense
- `PUT /api/delete-expense/:id` - Delete expense
- `DELETE /api/get-expenses` - Get expense


---

⭐ If you found this project helpful, please give it a star on GitHub!
