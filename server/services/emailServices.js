import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_KEY,
    },
  }
);

const sendEmail = (email, name, lastname) => {
  const emailText = `<!doctype html>
                      <html lang="es">
                        <head>
                          <meta charset="UTF-8" />
                        </head>
                        <body>
                          <main>
                            <h1>Bienvenid@ ${name} ${lastname} a JoveJobs</h1>
                            <h3>Tu cuenta con el email ${email} ha sido creada correctamente</h3>
                            <p>Gracias por registrarte en nuestra plataforma.</p>
                          </main>
                        </body>
                      </html>`;
  // !TODO a falta de meter el link para validar
  const emailSubject = `Bienvenido a JoveJobs ${name}`;
  const emailTextPlain = `Bienvenid@ ${name} ${lastname} a JoveJobs. Tu cuenta ha sido creada correctamente.`;

  transporter
    .verify()
    .then((res) => console.log('email enviado', res))
    .catch((err) => console.log('error en el envío', err));

  transporter.sendMail(
    {
      from: `JoveJobs <${process.env.EMAIL_USER}>`,
      to: email,
      subject: emailSubject,
      text: emailTextPlain,
      html: emailText,
    }
  );
};

export default sendEmail;
