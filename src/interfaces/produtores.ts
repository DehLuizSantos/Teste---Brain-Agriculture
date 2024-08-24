import z from 'zod';

type Culturas = 'Soja' | 'Milho' | 'Algodão' | 'Café' | 'Cana de Açucar';

export const produtoresInitialValues = {
  nomeProdutor: '',
  nomeFazenda: '',
  totalHectares: 0,
  areaAgricultavel: 0,
  areaVegetacao: 0,
  culturasPlantadas: [] as Culturas[],
  id: null,
};

export const produtoresSchema = z.object({
  id: z.number().nullable(),
  nomeProdutor: z.string(),
  nomeFazenda: z.string(),
  totalHectares: z.number().min(1, { message: 'Total de hectares deve ser maior que 0' }),
  areaAgricultavel: z.number().min(0, { message: 'Área agricultável deve ser maior ou igual a 0' }),
  areaVegetacao: z.number().min(0, { message: 'Área de vegetação deve ser maior ou igual a 0' }),
  culturasPlantadas: z.array(z.enum(['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar'])),
});

export type ProdutorType = z.infer<typeof produtoresSchema>;
