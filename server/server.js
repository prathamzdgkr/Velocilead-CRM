const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Standard Middleware
app.use(cors());
app.use(express.json());

// ==========================================
// 🛡️ SECURITY MIDDLEWARE START
// ==========================================

// 1. Data Sanitization against NoSQL Injection
app.use(mongoSanitize());

// 2. Data Sanitization against XSS
app.use(xss());

// 3A. Global API Rate Limiter (For normal app usage)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Generous limit for fetching data
  message: { message: 'Too many requests from this IP, please try again after 15 minutes' }
});

// Apply to all /api routes
app.use('/api', apiLimiter);

// 3B. Strict Login Rate Limiter (Brute-Force Protection)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // ONLY 5 TRIES ALLOWED!
  message: { message: 'Too many failed login attempts. Please try again after 15 minutes.' }
});

// Apply ONLY to the login route
app.use('/api/auth/login', loginLimiter);

// ==========================================
// 🛡️ SECURITY MIDDLEWARE END
// ==========================================

// Basic Root Route
app.get("/", (req, res) => {
    res.send("NexoraCRM API Running");
});

// ROUTES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/leads", require("./routes/leadRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);