import React from 'react';
import { fireEvent, waitFor } from '@testing-library/dom';
import HoverPopUp from '.';
import { render } from '@/test/render';

describe('HoverPopUp componente', () => {
  it('renderiza corretamente', () => {
    const { getByText } = render(
      <HoverPopUp texto="exemplo de testo">
        <p>teste</p>
      </HoverPopUp>
    );
    const filho = getByText('teste');
    expect(filho).toBeDefined();
  });
  it('Renderiza o dropdown quando passar o mouse em cima', async () => {
    const { getByText, findByText } = render(
      <HoverPopUp texto="texto">
        <p>botao</p>
      </HoverPopUp>
    );
    const botao = getByText('botao');
    fireEvent.mouseEnter(botao);

    await waitFor(() => {
      const texto = findByText('texto');
      expect(texto).toBeDefined();
    });
  });
});
