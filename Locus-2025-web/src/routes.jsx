import { lazy, Suspense } from 'react';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('@/pages/About'));
// const Archive = lazy(() => import('@/pages/Archive'));
// const YearArchive = lazy(() => import('@/pages/YearArchive'));
// const Resources = lazy(() => import('@/pages/Resources'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Wrap lazy-loaded components with Suspense
const withSuspense = (Component) => {
  return (
    // we can make a loading spinner to keep fallback here
    <Suspense >
      <Component />
    </Suspense>
  );
};

export const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      // {
      //   path: 'about',
      //   element: withSuspense(About),
      // },
      // {
      //   path: 'archive',
      //   children: [
      //     {
      //       index: true,
      //       element: withSuspense(Archive),
      //     },
    ]
  },
  {
    path: '*',
    element: withSuspense(NotFound),
  }
];