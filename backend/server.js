const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");



const app = express();
const PORT = 5000;
const JWT_SECRET = "your_jwt_secret_key";

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ✅ Register API
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

// ✅ LOGIN API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please register first." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: "7d" });

    // ✅ Set Token in HttpOnly Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(200).json({ message: "Login Successful" });

  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

// ✅ Verify Token API
app.get("/api/verify", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }
    res.status(200).json({ username: decoded.username });
  });
});

// ✅ Logout API
app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Failed:", err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));