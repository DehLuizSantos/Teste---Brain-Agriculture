type Culturas = 'Soja' | 'Milho' | 'Algodão' | 'Café' | 'Cana de Açucar';

const nomesProdutores = [
  'Roberto',
  'Maria',
  'João',
  'Ana',
  'Carlos',
  'Fernanda',
  'Pedro',
  'Juliana',
  'Ricardo',
  'Paula',
];
const nomesFazendas = [
  'Fazenda Bela Vista',
  'Fazenda Esperança',
  'Fazenda Santa Maria',
  'Sítio do Picapau Amarelo',
  'Fazenda São José',
  'Fazenda Lagoa Dourada',
  'Fazenda Monte Verde',
  'Fazenda Palmeiras',
  'Fazenda Recanto Feliz',
  'Fazenda Paraíso',
];
const culturasDisponiveis: Culturas[] = ['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar'];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCulturas(): Culturas[] {
  const quantidade = getRandomInt(1, 3);
  const culturas: Culturas[] = [];
  for (let i = 0; i < quantidade; i++) {
    const cultura = culturasDisponiveis[getRandomInt(0, culturasDisponiveis.length - 1)];
    if (!culturas.includes(cultura)) {
      culturas.push(cultura);
    }
  }
  return culturas;
}

const produtores = Array.from({ length: 81 }, () => {
  const nomeProdutor = nomesProdutores[getRandomInt(0, nomesProdutores.length - 1)];
  const nomeFazenda = nomesFazendas[getRandomInt(0, nomesFazendas.length - 1)];
  const totalHectares = getRandomInt(500, 2000);
  const areaAgricultavel = getRandomInt(200, totalHectares);
  const areaVegetacao = totalHectares - areaAgricultavel;
  const produtorId = getRandomInt(1, 1000);

  return {
    nomeProdutor,
    nomeFazenda,
    totalHectares,
    areaAgricultavel,
    areaVegetacao,
    culturasPlantadas: getRandomCulturas(),
    id: produtorId,
  };
});

export default produtores;
