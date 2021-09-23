require("dotenv").config();

// If there are errors, please check this object.
module.exports = {
  from: `Vikram Negi <${process.env.EMAIL_ID}>`,
  to: `Vikram Negi <${process.env.EMAIL_ID}>`,
  subject: "Send using node.js",
  html: "<h3 style=\"font-weight: 300\">Hello, World!</h3>",
};