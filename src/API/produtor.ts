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

function generateCPF(): string {
  const num = () => getRandomInt(100, 999);
  const last = () => getRandomInt(10, 99);
  return `${num()}.${num()}.${num()}-${last()}`;
}

function generateCNPJ(): string {
  const num = () => getRandomInt(1000, 9999);
  const last = () => getRandomInt(100, 999);
  return `${num()}.${num()}.${num()}/0001-${last()}`;
}

function getRandomDocumento(): string {
  return Math.random() > 0.5 ? generateCPF() : generateCNPJ();
}

const produtores = Array.from({ length: 81 }, () => {
  const nomeProdutor = nomesProdutores[getRandomInt(0, nomesProdutores.length - 1)];
  const nomeFazenda = nomesFazendas[getRandomInt(0, nomesFazendas.length - 1)];
  const totalHectares = getRandomInt(500, 2000);
  const areaAgricultavel = getRandomInt(200, totalHectares);
  const areaVegetacao = totalHectares - areaAgricultavel;
  const produtorId = getRandomInt(1, 1000);
  const documento = getRandomDocumento();

  return {
    nomeProdutor,
    nomeFazenda,
    totalHectares,
    areaAgricultavel,
    areaVegetacao,
    culturasPlantadas: getRandomCulturas(),
    id: produtorId,
    documento,
  };
});

export default produtores;
