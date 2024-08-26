import Navbar from '.';
import { fireEvent } from '@testing-library/dom';
import { LinksDinamicosMock } from './mocks';
import { render } from '@/test/render';

describe('Navbar está renderizando corretamente', () => {
  test('Renderizando todos componentes internos', () => {
    const { getByTestId } = render(
      <Navbar modulo="exemplo" isHover={false} links={LinksDinamicosMock} />
    );
    expect(getByTestId('navbar')).toBeDefined();
  });

  test('Abre o navbar com hover', () => {
    const { getByTestId, queryByText } = render(
      <Navbar modulo="exemplo" isHover={true} links={LinksDinamicosMock} />
    );

    const FooterNavbar = queryByText('Precisa de ajuda');
    expect(FooterNavbar).toBeNull();
    const navbarWrapper = getByTestId('navbar');

    fireEvent.mouseEnter(navbarWrapper);

    const FooterNavbarAfterHover = queryByText('Precisa de ajuda?');
    expect(FooterNavbarAfterHover).toBeDefined();
  });
});
