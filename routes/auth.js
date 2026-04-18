const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "User signed up successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
});

module.exports = router;
