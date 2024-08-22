import React, { memo, useState } from 'react';
import * as S from './styles';
import LinkNavbar from '@/components/atomos/LinkNavbar';
import { FadingComponent } from '@/components/atomos/FadeAnimation';
import { IconType } from 'react-icons';

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
  const [selected, setSelected] = useState(links![0].label ?? '');

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

  return (
    <S.LinkGroupWrapper>
      <FadingComponent duration={500}>{LinkToRender}</FadingComponent>
    </S.LinkGroupWrapper>
  );
};

export default memo(GrupoDeLinks);
