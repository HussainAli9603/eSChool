const nodeMailer = require("nodemailer");
let api_key = '9b7587990e46d7d45b905282596f3162-77751bfc-d0ba1c81';
let domain = 'sandbox05a3da0b94bb421caa02db795b3536dc.mailgun.org';
let mailgun = require('mailgun-js')({apiKey:api_key,domain:domain});

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: process.env.SMPT_PORT,
    service: 'Gmail',
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
