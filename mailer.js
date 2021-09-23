const nodemailer = require("nodemailer");
require("dotenv").config();

const email = process.env.EMAIL;
const clientId = process.env.GOOGLE_CLIENT_ID;

async function main() {
  // dummy test mail account
  let testAcc = await nodemailer.createTestAccount();

  // transporter obj using default SMTP
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: email,
      clientId: clientId,
    },
  });

  // send mail
  let info = await transporter.sendMail({
    from: `Vikram Negi <${email}>`,
    to: `Vikram Negi <${pass}>`,
    subject: "Send using node.js",
    text: "hello, world",
    html: "<h3 style=\"font-weight: 300\">Hello from the other side!</h3>",
  });

  console.log("Messeage sent: %s", info.messageId);
}

main().catch(err => console.log(err));