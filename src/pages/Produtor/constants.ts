import { Field } from '@/components/organismos/FormBuilder';

export const formBuildPropsFisical: Field[] = [
  { col: 12, label: 'Cpf', name: 'documento', type: 'cpf', focus: true },
  { col: 6, label: 'Nome', name: 'nomeProdutor', type: 'text' },
  { col: 6, label: 'Nome Da Fazenda', name: 'nomeFazenda', type: 'text' },
  {
    col: 12,
    label: 'Culturas Plantadas',
    name: 'culturasPlantadas',
    type: 'culturasPlantadas',
  },
  { col: 4, label: 'Total Hectares', name: 'totalHectares', type: 'number' },
  { col: 4, label: 'Área agricultavel', name: 'areaAgricultavel', type: 'number' },
  { col: 4, label: 'Área Vegetação', name: 'areaVegetacao', type: 'number' },
];
export const formBuildPropsJuridical: Field[] = [
  { col: 12, label: 'Cnpj', name: 'documento', type: 'cnpj', focus: true },
  { col: 6, label: 'Nome', name: 'nomeProdutor', type: 'text' },
  { col: 6, label: 'Nome Da Fazenda', name: 'nomeFazenda', type: 'text' },
  {
    col: 12,
    label: 'Culturas Plantadas',
    name: 'culturasPlantadas',
    type: 'culturasPlantadas',
  },
  { col: 4, label: 'Total Hectares', name: 'totalHectares', type: 'number' },
  { col: 4, label: 'Área agricultavel', name: 'areaAgricultavel', type: 'number' },
  { col: 4, label: 'Área Vegetação', name: 'areaVegetacao', type: 'number' },
];
