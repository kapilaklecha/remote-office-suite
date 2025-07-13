const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Remote office suite backend is running:::");
});

app.use(errorHandler);
module.exports = app;
