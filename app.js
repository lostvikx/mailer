// const express = require("express");
const sgMail = require("@sendgrid/mail");
const mailOptions = require("./js/testMail");
require("dotenv").config();

// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`);
// });

// Using Twillio SendGrid's API
sgMail.setApiKey(process.env.API_KEY);

sgMail
  .send(mailOptions)
  .then(() => console.log("Email Sent!"))
  .catch((err) => console.error(err));

