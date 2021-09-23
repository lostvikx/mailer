const nodemailer = require("nodemailer");
require("dotenv").config();
const mailOptions = require("./testMail.js");

async function main() {

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_ID,
      clientId: process.env.OAUTH_CLIENTID,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN
    },
  });

  // send mail
  let info = await transporter.sendMail(mailOptions);

  console.log("Messeage sent: %s", info.messageId);
}

main().catch(err => console.log(err));