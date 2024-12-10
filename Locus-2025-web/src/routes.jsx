import { lazy, Suspense } from "react";
import Layout from "./layout/Layout"; // Ensure Layout is correctly imported
import AboutUsPage from "./pages/AboutUs";
import PastLocusPage from "./pages/PastLocusPage";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const Contact = lazy(() => import("./pages/Contact"));
const Events = lazy(() => import("./pages/Event"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Wrap lazy-loaded components with Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export const routes = [
  {
    path: "/",
    element: <Layout />, // Wrapper for all routes
    children: [
      {
        index: true,
        element: withSuspense(Home), // Home page
      },
      {
        path: "sponsors", // Relative path for the Sponsor page
        element: withSuspense(Sponsor), // Sponsor page
      },
      {
        path: "contact-us", // Relative path for the Sponsor page
        element: withSuspense(Contact), // Sponsor page
      },
      {
        path: "events", // Relative path for the Sponsor page
        element: withSuspense(Events), // Sponsor page
      },
      {
        path: "about",
        element: withSuspense(AboutUsPage),
      },
      {
        path: "past-locus",
        element: withSuspense(PastLocusPage),
      },
    ],
  },
  {
    path: "*",
    element: withSuspense(NotFound), // 404 fallback
  },
];
