import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
    },
  },
});

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <MantineProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{renderStory()}</BrowserRouter>
        </ThemeProvider>
      </MantineProvider>
    </PersistQueryClientProvider>
  ),
];
