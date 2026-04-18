require("dotenv").config();
const express = require("express");
const cors = require("cors");

const supabase = require("./supabaseClient");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Supabase test route
app.get("/test-supabase", async (req, res) => {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Supabase connected successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
});

// Protected route (MUST be before app.listen)
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });
});

// Server start (ALWAYS LAST)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
