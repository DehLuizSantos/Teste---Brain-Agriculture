import { render } from '../../../test/render';
import IconeBotao from './index';
import { fireEvent, waitFor } from '@testing-library/react';

describe('IconeBotao testes', () => {
  it('renderiza tipo round corretamente', () => {
    const { getByTestId } = render(<IconeBotao tipo="round" />);
    const actionIcon = getByTestId('round');
    expect(actionIcon).toBeDefined();
  });
  it('renderiza tipo table corretamente', () => {
    const { getByTestId } = render(<IconeBotao tipo="table" />);
    const actionIcon = getByTestId('table');
    expect(actionIcon).toBeDefined();
  });

  it('chama a função no onClick', async () => {
    const onClickMock = vi.fn();
    const { getByTestId } = render(<IconeBotao tipo="round" onClick={onClickMock} />);
    const iconElement = getByTestId('round');

    fireEvent.click(iconElement);

    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
