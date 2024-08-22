import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Shell } from './components/modulos/Shell';
import Container from './components/modulos/Container';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Container>
        <HomePage />
      </Container>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
