import { z } from "zod";

export const registerSchema = z.object({
  usuario: z.string({
    required_error: "Se necesita un nombre de usuario",
  }),
  correo: z
    .string({
      required_error: "Se requiere de una direccion de correo",
    })
    .email({
      message: "La direccion de correo entregada no es valida",
    }),
  contrasenia: z
    .string({
      required_error: "Una contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe de tener entre 8 y 12 caracteres, al menos una letra en mayuscula y un caracter especial",
    }),
});

export const loginSchema = z.object({
  correo: z.string().email(),
  contrasenia: z.string().min(6),
});