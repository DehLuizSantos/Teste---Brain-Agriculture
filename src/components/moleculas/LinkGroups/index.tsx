import { memo, useState } from 'react';
import * as S from './styles';
import LinkNavbar from '@/components/atomos/LinkNavbar';
import { useLocation } from 'react-router-dom';

export interface LinksProps {
  label: string;
  active?: boolean;
  to?: string;
  icon: any;
  linksExpand?: { label: string; to: string }[];
}
interface GrupoDeLinksProps {
  isNavHover: boolean;
  links?: LinksProps[];
}

const GrupoDeLinks = ({ links, isNavHover }: GrupoDeLinksProps) => {
  const location = useLocation();
  const [selected, setSelected] = useState(
    location.pathname === '/produtor' ? 'Produtor' : 'Dashboard'
  );

  const LinkToRender = links?.map((item) => (
    <S.LinkActive
      className={`link ${isNavHover ? 'nav-hover' : ''}`}
      key={item.label}
      onClick={() => setSelected(item.label)}
      data-active={item.label === selected || undefined}
    >
      <LinkNavbar {...item} navHoverIsOpen={isNavHover} />
    </S.LinkActive>
  ));

  return <S.LinkGroupWrapper>{LinkToRender}</S.LinkGroupWrapper>;
};

export default memo(GrupoDeLinks);
