const supabase = require("../supabaseClient");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "No token provided",
      });
    }

    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      return res.status(401).json({
        success: false,
        error: "Invalid token",
      });
    }

    req.user = data.user;
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

module.exports = authMiddleware;
