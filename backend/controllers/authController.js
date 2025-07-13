const authService = require("../services/authService");

exports.register = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const token = await authService.register(email, password);
    return res.status(201).json({ token });
  } catch (err) {
    err.status = 400;
    err.message = err.message || "Registration failed.";
    return next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const token = await authService.login(email, password);
    return res.status(200).json({ token });
  } catch (err) {
    err.status = 400;
    err.message = err.message || "Invalid email or password.";
    return next(err);
  }
};
