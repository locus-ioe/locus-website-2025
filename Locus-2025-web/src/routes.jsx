import { lazy, Suspense } from "react";
import Layout from "./Layout.jsx";

// Lazy load ALL pages for optimal code splitting
const Home = lazy(() => import("./pages/Home"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const Contact = lazy(() => import("./pages/Contact"));
const Events = lazy(() => import("./pages/Event"));
const Zerone = lazy(() => import("./pages/Zerone"));
const EventCalendar = lazy(() => import("./pages/EventCalendar.jsx"));
const SingleBlogPost = lazy(() => import("./pages/SingleBlog.jsx"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Teams = lazy(() => import("./pages/Teams"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const PastLocusPage = lazy(() => import("./pages/PastLocusPage.jsx"));
const EventDescription = lazy(() => import("./components/EventDescription.jsx"));
const Blogpage = lazy(() => import("./pages/Blogpage.jsx"));
const AnalyticsPage = lazy(() => import("./pages/Analytics.jsx"));

// Wrap lazy-loaded components with Suspense and a loading spinner
const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border-8 border-t-8 border-gray-200 border-t-fuchsia-500 rounded-full w-32 h-32 animate-spin'></div>
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
        element: withSuspense(Home),
      },
      {
        path: "sponsors",
        element: withSuspense(Sponsor),
      },
      {
        path: "contact-us",
        element: withSuspense(Contact),
      },
      {
        path: "events",
        element: withSuspense(Events),
      },
      {
        path: "calendar",
        element: withSuspense(EventCalendar),
      },
      {
        path: "blogs",
        element: withSuspense(Blogpage),
      },
      {
        path: "blog/:slug",
        element: withSuspense(SingleBlogPost),
      },
      {
        path: "zerone",
        element: withSuspense(Zerone),
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
      {
        path: "teams",
        element: withSuspense(Teams),
      },
      {
        path: "analytics",
        element: withSuspense(AnalyticsPage),
      },

    ],
  },
  {
    path: "*",
    element: withSuspense(NotFound), // 404 fallback
  },
];
