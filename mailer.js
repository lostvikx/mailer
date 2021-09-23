const nodemailer = require("nodemailer");
const express = require("express");
require("dotenv").config();
const mailOptions = require("./js/testMail");
const {google} = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken();

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

async function main() {
  // transporter, with all the tokens required
  let transporter = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false
    },
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.APP_PASS,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: accessToken
    },
  });

  // send mail {mailOptions can be subject to change}
  let info = await transporter.sendMail(mailOptions);

  console.log(`Messeage sent: ${info}`);

  transporter.close();
}

main().catch(err => console.log(err));
