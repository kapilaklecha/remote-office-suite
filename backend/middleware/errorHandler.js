const { log } = require("../utils/Logger");

exports.errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const isProd = process.env.NODE_ENV === "production";
  log(`[${req.method}] ${req.originalUrl} — ${err.stack}`, "error");

  const response = {
    error: isProd ? "Internal server Error" : err.message,
    status,
    path: req.originalUrl,
    method: req.method,
    time: new Date().toISOString(),
  };

  res.status(status).json(response);
};
