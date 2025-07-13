const fs = require("fs");
const path = require("path");

exports.log = (message, type = "info") => {
  const timestamp = new Date().toISOString();
  const logline = `[${type.toUpperCase}] ${timestamp} ${message}`;

  if ((type = "error")) {
    console.error(logline.trim());
  } else {
    console.log(logline.trim());
  }

  let logDir = path.join(__dirname, "..", "logs");
  let logFile = path.join(logDir, `${new Date().toISOString().slice(0, 10)}`);

  fs.appendFile(logFile, logline, (err) => {
    if (err) {
      console.error("Failed to write log to file:", err.message);
    }
  });
};
