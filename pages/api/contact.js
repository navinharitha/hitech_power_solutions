export default function handler(req, res) {
  require("dotenv").config();
  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    secure: true,
  });
  const mailOptions = {
    from: 'Hitech Power Solutions',
    to: "madumal@pmgs.lk",
    subject: `Hitech Power Solutions New Form Submission`,
    text: 'Hitech Power Solutions Form Submission',
    html: `
    <div>
      <p>FirstName: ${req.body.firstName}</p>
      <p>lastName: ${req.body.lastName}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone: ${req.body.phone}</p>
      <p>Message: ${req.body.message}</p>
    </div>`
  }

  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      return res.status(400).json({
        status: "fail",
      });
    }
    res.status(200).json({
      status: "success",
      data: info
    });
  });
}
