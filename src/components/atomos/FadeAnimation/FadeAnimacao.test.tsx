import React from 'react';
import { render } from '@testing-library/react';
import { FadingComponent } from '.';

describe('Fade está renderizando o filho', () => {
  it('renderiza corretamente', () => {
    const { getByText } = render(
      <FadingComponent duration={1000}>
        <p>teste</p>
      </FadingComponent>
    );
    const filho = getByText('teste');
    expect(filho).toBeDefined();
  });
});
