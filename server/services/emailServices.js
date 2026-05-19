const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: '',
      pass: process.env.EMAIL,
    },
  }
);

const sendEmail = (email, name, lastname) => {
  const emailText = ``;

  transporter
    .verify()
    .then((res) => console.log('email enviado', res))
    .catch((err) => console.log('error en el envío', err));

  transporter.sendMail(
    {
      from: 'x <email>',
      to: email,
      subject: 'x',
      text: 'x',
      html: emailText,
    }
  );
};

module.exports = sendEmail;
