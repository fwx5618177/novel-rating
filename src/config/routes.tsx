import { createElement, FC, lazy, LazyExoticComponent } from 'react';
import { RouteObject } from 'react-router-dom';

function LazyWrapper({
  component,
}: {
  component: LazyExoticComponent<FC<object>>;
}) {
  return <>{createElement(component)}</>;
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LazyWrapper component={lazy(() => import('@pages/Home'))} />,
  },
  {
    path: '/fallback',
    element: (
      <LazyWrapper component={lazy(() => import('@components/Loading'))} />
    ),
  },
  {
    path: '/about',
    element: <LazyWrapper component={lazy(() => import('@pages/About'))} />,
  },
  {
    path: '/error',
    element: <LazyWrapper component={lazy(() => import('@pages/ErrorPage'))} />,
  },
  {
    path: '*',
    element: <LazyWrapper component={lazy(() => import('@pages/NotFound'))} />,
  },
];
