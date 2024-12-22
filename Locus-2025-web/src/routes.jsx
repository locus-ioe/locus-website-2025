import { lazy, Suspense } from "react";
import Layout from "./Layout.jsx"; 
import AboutUs from "./pages/AboutUs.jsx";
import PastLocusPage from "./pages/PastLocusPage.jsx";
import EventDescription from "./components/EventDescription.jsx";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const Contact = lazy(() => import("./pages/Contact"));
const Events = lazy(() => import("./pages/Event"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Wrap lazy-loaded components with Suspense and a loading spinner
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full w-32 h-32 animate-spin"></div>
    </div>
  );
};


const withSuspense = (Component) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  );
};
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
        path: "about-us",
        element: withSuspense(AboutUs),
      },
      {
        path: "event/:title",
        element: withSuspense(EventDescription),
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
