const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require('helmet');
const hpp = require('hpp');

const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(helmet());

// Standard Middleware
app.use(cors());
app.use(express.json());

app.use(mongoSanitize());


app.use(xss());

app.use(hpp());

const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api', apiLimiter);

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 });
app.use('/api/auth/login', loginLimiter);


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