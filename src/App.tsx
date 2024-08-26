import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ThemeProvider } from 'styled-components';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css'; //import MRT styles
import '@mantine/charts/styles.css';

function App() {
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30 /* 30 min */,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <MantineProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </MantineProvider>
    </PersistQueryClientProvider>
  );
}

export default App;
