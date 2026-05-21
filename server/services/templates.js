export const welcomeTemplate = (email, name, lastname, activateLink) => ({
  subject: `Bienvenido a JoveJobs ${name}`,
  textPlain: `Bienvenid@ ${name} ${lastname} a JoveJobs. Tu cuenta ha sido creada correctamente.`,
  html: `
    <h1>Bienvenid@ ${name} ${lastname} a JoveJobs</h1>
    <h3>Tu cuenta con el email ${email} ha sido creada correctamente</h3>
    <p>Gracias por registrarte en nuestra plataforma.</p>

    <p>Haz clic en el enlace para restablecer tu contraseña.</p>
    <a href="${activateLink}">Activar cuenta</a>
  `,
});

export const resetPasswordTemplate = (name, resetLink) => ({
  subject: `Recuperación de contraseña en JoveJobs`,
  text: `Hola ${name}, usa este enlace para recuperar tu contraseña: ${resetLink}`,
  html: `
    <h1>Recuperar contraseña</h1>
    <p>Hola ${name}, haz clic en el enlace para restablecer tu contraseña.</p>
    <a href="${resetLink}">Restablecer contraseña</a>
    <p>Si no lo solicitaste, ignora este email.</p>
  `,
});
