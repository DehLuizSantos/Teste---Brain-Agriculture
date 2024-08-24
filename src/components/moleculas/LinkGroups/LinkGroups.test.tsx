import React from 'react';
import LinkGroup from '.';
import { render } from '@/test/render';
import { LinksDinamicosMock } from '@/components/modulos/Navbar/mocks';

describe('LinkGroup está renderizando corretamente', () => {
  test('Renderizando todos Links internos', () => {
    const { getByText } = render(<LinkGroup isNavHover={true} links={LinksDinamicosMock} />);
    expect(getByText('Usuários')).toBeDefined();
  });
});
