import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from './components/modulos/Container';
import { Dashboard } from './pages/Dashboard';
import { Produtor } from './pages/Produtor';
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Container>
        <Dashboard />
      </Container>
    ),
  },
  {
    path: '/produtor',
    element: (
      <Container>
        <Produtor />
      </Container>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
