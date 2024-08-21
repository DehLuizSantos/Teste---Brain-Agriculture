import UsuarioIcon from '../../../assets/imagens/icons/Usuario.svg';
import CargaIcon from '../../../assets/imagens/icons/Carga.svg';
import Desdobramento from '../../../assets/imagens/icons/Desdobramentos.svg';
import CiclosEncerrados from '../../../assets/imagens/icons/CiclosEncerrados.svg';

export const LinksDinamicosMock = [
  {
    label: 'Usuários',
    icon: UsuarioIcon,
    to: '/usuarios',
  },
  {
    label: 'Cargas e Importações',
    icon: CargaIcon,
    to: '/carga',
  },
  {
    label: 'Ciclos Encerrados',
    icon: CiclosEncerrados,
    linksExpand: [
      {
        label: 'Ciclos ativos',
        to: '/',
      },
      {
        label: 'Ciclos inativos',
        to: '/',
      },
    ],
  },
  {
    label: 'Desdobramento',
    icon: Desdobramento,
    to: '/desdobramento',
  },
];
