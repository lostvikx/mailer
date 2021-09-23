require("dotenv").config();

// If there are errors, please check this object.
module.exports = {
  from: `${process.env.EMAIL}`,
  to: `${process.env.EMAIL}, yogeshnegi987@gmail.com`,
  subject: "Please work!",
  text: "If you're able to view this message, then I have successfully sent an email using Node.js"
};