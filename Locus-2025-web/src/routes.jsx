import { lazy, Suspense } from "react";
import Layout from "./Layout.jsx"; 
import AboutUs from "./pages/AboutUs.jsx";
import PastLocusPage from "./pages/PastLocusPage.jsx";

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
    path: "/locus-website-2025",
    // path: "/",
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
        path: "about-us",
        element: withSuspense(AboutUs),
      },
      // {
      //   path: "past-locus",
      //   element: withSuspense(PastLocusPage),
      // },
    ],
  },
  {
    path: "*",
    element: withSuspense(NotFound), // 404 fallback
  },
];
