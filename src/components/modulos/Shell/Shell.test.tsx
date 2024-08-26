import { Shell } from './index';
import { LinksDinamicosMock } from '../Navbar/mocks';
import { render } from '@/test/render';

describe('AppShelCollapsed rendering', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Shell isNavHover={true} links={LinksDinamicosMock}>
        <div>Child component</div>
      </Shell>
    );
    const appShellWrapper = getByTestId('app-shell-wrapper');
    expect(appShellWrapper).toBeDefined();
  });
});
