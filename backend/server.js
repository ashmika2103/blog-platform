const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Load env variables
dotenv.config();
console.log("Render JWT =", process.env.JWT_SECRET);
console.log("JWT =", process.env.JWT_SECRET);
console.log("MONGO =", process.env.MONGO_URI);
// Connect database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: "*", // later replace with Vercel URL
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));

// Health check route
app.get("/", (req, res) => {
  res.send("Blog Platform API Running 🚀");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});