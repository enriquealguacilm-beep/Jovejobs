import { z } from 'zod';

const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

const nifCifRegEx = /^[0-9XYZKLeL][0-9]{7}[A-Z0-9]$/;

const numRegEx = /^\+?[0-9]{9,15}$/;

export const registerCompanySchema = z
  .object({
    email: z
      .string({ message: 'Campo obligatorio' })
      .email({ message: 'Email no valido' })
      .trim(),
    repEmail: z.string(),
    password: z
      .string({ message: 'Campo obligatorio' })
      .min(6, { message: 'Debe ser mayor de 6 caracteres' })
      .max(20, { message: 'Deben ser menos de 20 caracteres' })
      .regex(passRegEx, { message: 'Contraseña poco segura' }),
    repPassword: z.string(),
    name: z
      .string({ message: 'Campo obligatorio' })
      .min(3, { message: 'Debe ser mayor de 3 caracteres' })
      .max(50, { message: 'Debe ser menor de 50 caracteres' })
      .trim(),
    contact: z
      .string({ message: 'Campo obligatorio' })
      .min(3, { message: 'Debe ser mayor de 3 caracteres' })
      .max(50, { message: 'Debe ser menor de 50 caracteres' })
      .trim(),
    phone: z
      .string({ message: 'Campo obligatorio' })
      .regex(numRegEx, { message: 'El teléfono introducido no es válido' }),
    address: z
      .string({ message: 'Campo obligatorio' })
      .min(3, { message: 'Debe ser mayor de 3 caracteres' })
      .max(100, { message: 'Debe ser menos de 100 caracteres' }),
    indentificacion: z
      .string({ message: 'Campo obligatorio' })
      .toUpperCase()
      .length(9, {
        message: 'El documento debe tener exactamente 9 carácteres',
      })
      .regex(nifCifRegEx, { message: 'Formato no válido' }),
  })
  .refine((data) => data.email === data.repEmail, {
    message: 'Los emails no coinciden',
    path: ['repEmail'],
  })
  .refine((data) => data.password === data.repPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['repPassword'],
  });
