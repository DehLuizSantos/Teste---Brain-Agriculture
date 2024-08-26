import { z } from 'zod';

export const LoginInitialValues = {
  login: '',
  senha: '',
};

export const loginSchema = z.object({
  login: z
    .string()
    .min(4, { message: 'Usuario deve ter no mínimo 4 caractéres' })
    .email('E-mail inválido'),
  senha: z.string().min(4, { message: 'Senha deve ter no mínimo 4 caractéres' }).max(50),
});

export type LoginType = z.infer<typeof loginSchema>;
