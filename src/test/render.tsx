import React from 'react';
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/styles/theme';

type CustomRenderOptions = Omit<RenderOptions, 'queries'>;

const customRender = (ui: React.ReactElement, options?: CustomRenderOptions): RenderResult => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
      },
    },
  });

  const Wrapper: React.FC = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{children} </BrowserRouter>
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );

  // Save the console.error method to restore it later
  const originalConsoleError = console.error;

  // Silence the deprecation warning during tests
  console.error = (...args) => {
    if (/Warning: ReactDOM.render/.test(args[0])) {
      return;
    }
    originalConsoleError.call(console, ...args);
  };

  // Render the component as usual
  const renderResult = rtlRender(ui, { wrapper: Wrapper, ...options });

  // Restore the original console.error method
  console.error = originalConsoleError;

  return renderResult;
};

export * from '@testing-library/react';

beforeEach(() => {
  // Mock de matchMedia específico para esse teste
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false, // Aqui você pode ajustar de acordo com suas necessidades de teste
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

export { customRender as render };
