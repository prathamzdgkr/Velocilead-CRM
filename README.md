# 🚀 NexoraCRM - AI Powered MERN CRM

NexoraCRM is a full-stack Customer Relationship Management (CRM) application built using the MERN stack. It features secure JWT authentication, lead pipeline management, and AI-powered insights powered by Google Gemini AI.

This repository follows a monorepo architecture containing both the React frontend and Express backend.

---

# 📌 Features

- 🔐 Secure JWT Authentication
- 👤 User Registration & Login System
- 📊 Lead Pipeline Management
- 🤖 AI-Powered Lead Insights
- 🛡️ OWASP Security Middleware
- ⚡ Fast Frontend using Vite
- 🎨 Responsive UI with Tailwind CSS
- 🌐 RESTful APIs
- ☁️ MongoDB Atlas Integration

---

# 🏗️ Architecture & Tech Stack

## Frontend (`/client`)

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Context API

## Backend (`/server`)

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- JWT Authentication
- bcryptjs
- Google Gemini API

---

# 🛡️ Security Implementations

This project follows OWASP security best practices.

## Security Middleware

### `helmet`
Secures Express applications by setting HTTP security headers and hiding backend implementation details.

### `express-rate-limit`
Implements API rate limiting:
- Standard API → `100 requests / 15 minutes`
- Login Route → `5 attempts / 15 minutes`

### `express-mongo-sanitize`
Protects against NoSQL Injection attacks.

### `xss-clean`
Protects against Cross-Site Scripting (XSS) attacks.

### `hpp`
Protects against HTTP Parameter Pollution attacks.

### `cors`
Restricts unauthorized cross-origin access.

---

# 📁 Folder Structure

```bash
CRM/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── api/            # Axios configuration & API calls
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Global state management
│   │   ├── pages/          # Application pages
│   │   ├── App.jsx         # Main Router
│   │   └── main.jsx        # React Entry Point
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                 # Express Backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── services/           # External services
│   ├── utils/              # Helper functions
│   └── server.js           # Backend entry point
│
├── .gitignore
└── README.md
```

---

# ⚙️ Local Development Setup

## Prerequisites

Make sure the following are installed:

- Node.js (v18+ recommended)
- MongoDB Atlas Cluster
- Google Gemini API Key

---

# 📥 Clone Repository

```bash
git clone https://github.com/prathamzdgkr/nexora-ai-crm
cd nexora-ai-crm
```

---

# 📦 Install Dependencies

## Backend Setup

```bash
cd server
npm install
```

## Frontend Setup

```bash
cd ../client
npm install
```

---

# 🔑 Environment Variables

## Backend (`/server/.env`)

Create a `.env` file inside the `server` directory.

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/

# Authentication
JWT_SECRET=your_super_secure_secret

# AI Integration
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## Frontend (`/client/.env`)

```env
VITE_API_URL=http://localhost:5000
```

---

# ▶️ Start Development Servers

You need to run both frontend and backend servers.

## Start Backend

```bash
cd server
npm run dev
```

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🌐 Application URLs

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:5000
```

---

# 🔌 API Reference

## Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/register` | Register a new user | Public |
| POST | `/login` | Authenticate user & return JWT | Public |
| POST | `/forgotpassword` | Generate password reset token | Public |

---

## Leads Routes (`/api/leads`)

> Requires Bearer Token Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/` | Get all leads | Private |
| POST | `/` | Create a new lead | Private |
| PUT | `/:id` | Update lead details | Private |
| DELETE | `/:id` | Delete lead | Private |

---

## AI Routes (`/api/ai`)

> Requires Bearer Token Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/insights` | Generate AI-powered lead insights | Private |

---

# 🔐 Authentication Flow

1. User registers or logs in
2. Backend validates credentials
3. JWT token is generated
4. Token stored on frontend
5. Protected routes accessed using Bearer Token

---

# 🤖 AI Integration

NexoraCRM uses Google Gemini AI to analyze customer and lead data to generate:
- Customer Insights
- Lead Recommendations
- Follow-Up Suggestions
- Sales Intelligence

---

# 🚀 Deployment

## Frontend Deployment
- Vercel
- Netlify

## Backend Deployment
- Render
- Docker

## Database
- MongoDB Atlas

---


# 📸 Future Improvements

- Role-Based Access Control (RBAC)
- Email Notifications
- Analytics Dashboard
- Real-time Chat System
- Lead Activity Tracking
- Team Collaboration Features
- AI Predictive Analytics

---

# 🤝 Contribution Guidelines

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m "feat: Added Amazing Feature"
```

4. Push to GitHub

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by **Pratham Zadgaonkar**

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.