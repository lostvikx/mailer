require("dotenv").config();

// If there are errors, please check this object.
module.exports = {
  to: `${process.env.EMAIL}`,
  from: `${process.env.EMAIL}`,
  subject: "This message was sent using Node.js",
  text: "Hello, World!",
  html: "<p>This is the HTML format.</p>"
};