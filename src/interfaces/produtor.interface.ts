import z from 'zod';

export const produtorSchema = z.object({
  email: z.string(),
  id: z.nullable(z.number()),
  nome: z.string(),
  cpf: z.nullable(z.string()),
  cnpj: z.nullable(z.string()),
  cidade: z.nullable(z.string()),
  estado: z.array(z.string()),
});

export type ProdutorType = z.infer<typeof produtorSchema>;
