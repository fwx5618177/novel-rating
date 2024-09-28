import AboutPage from '@pages/About';
import ErrorPage from '@pages/ErrorPage';
import Index from '@pages/Home';
import NotFound from '@pages/NotFound';
import { RouteObject } from 'react-router-dom';

export const ssgRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
