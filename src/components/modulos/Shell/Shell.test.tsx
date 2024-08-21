import { ConchaAplicacao } from './index';
import { LinksDinamicosMock } from '../Navbar/mocks';
import { render } from '@/test/render';

describe('AppShelCollapsed rendering', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <ConchaAplicacao isNavHover={true} modulo="exemplo" links={LinksDinamicosMock}>
        <div>Child component</div>
      </ConchaAplicacao>
    );
    const appShellWrapper = getByTestId('app-shell-wrapper');
    expect(appShellWrapper).toBeDefined();
  });
});
