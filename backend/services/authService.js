const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const SALT_ROUNDS = 10;

exports.register = async (email, password) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await User.create({ email: email, password: hashPassword });

  return generateToken(user);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid email or password");

  return generateToken(user);
};

function generateToken(user) {
  return jwt.sign(
    {
      userID: user._id.toString(),
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1hr" }
  );
}
