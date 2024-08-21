import { useState, memo, useMemo, useEffect } from 'react';
import { Collapse } from '@mantine/core';
import { FaArrowRight } from 'react-icons/fa';
import * as S from './styles';

export type LinkNavbarProps = {
  navHoverIsOpen: boolean;
  icon: string;
  label: string;
  initiallyOpened?: boolean;
  to?: string;
  linksExpand?: { label: string; to: string }[];
};

const LinkNavbar = ({
  icon,
  label,
  initiallyOpened,
  to,
  navHoverIsOpen,
  linksExpand,
}: LinkNavbarProps) => {
  const hasLinks = Array.isArray(linksExpand);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const [active, setActive] = useState('');

  const items = useMemo(() => {
    if (hasLinks) {
      return linksExpand.map((link) => (
        <S.Links
          to={link.to}
          key={link.label}
          onClick={() => {
            setActive(link.label);
            setOpened(false);
          }}
          data-active={link.label === active || undefined}
        >
          {link.label}
        </S.Links>
      ));
    } else {
      return [];
    }
  }, [hasLinks, linksExpand, setActive, active, setOpened, opened]);

  useEffect(() => {
    if (!navHoverIsOpen) {
      setOpened(false);
    }
  }, [navHoverIsOpen]);

  return (
    <>
      <S.LinksControl
        data-active={navHoverIsOpen}
        to={to! ?? null}
        onClick={() => {
          setActive(label);
          hasLinks && setOpened(true);
        }}
      >
        <S.LinkWrapper data-active={navHoverIsOpen}>
          <S.LinkSvg data-active={navHoverIsOpen}>
            {/* <Icone fill={theme.colors.blue} width={25} height={25} svg={icon} /> */}
            <p>Icone</p>
          </S.LinkSvg>
          <p>{label}</p>
        </S.LinkWrapper>

        {hasLinks && (
          <FaArrowRight
            style={{
              transform: opened ? 'rotate(90deg)' : 'none',
              transition: 'transform 200ms ease',
            }}
          />
        )}
      </S.LinksControl>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};

export default memo(LinkNavbar);
