import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      let transporter = nodemailer.createTransport({
        host: "cp-wc42.per01.ds.network",
        port: 465,
        auth: {
          user: "relay@fastwebsmail.com",
          pass: "OPmj!VPuuj~R",
        },
        // tls: {
        //   rejectUnauthorized: false
        // }
      });
      var mailOptions = {
        from: '"HiTech Solutions <madumal@pmgs.lk>',
        to: "madumal@pmgs.lk",
        subject: "New Contact",
      };
      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          return res.status(400).json({
            status: "fail",
          });
        }
        res.status(200).json({
          status: "success",
        });
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
      });
    }
  }
}
