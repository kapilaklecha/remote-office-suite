const authService = require("../services/authService");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const token = await authService.register(email, password);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: "Invalid email or password." });
  }
};
