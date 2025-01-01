import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { routes } from "./routes";

const router = createBrowserRouter(routes, {
  future: {
    v7_partialHydration: true,
  },
});

// Custom hook to track page views
const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics tracking for the current route
    window.gtag("config", "G-XJHWBN3CLH", {
      page_path: location.pathname,
    });
  }, [location]);
};

// Wrapper component for analytics
const AnalyticsTracker = ({ children }) => {
  useGoogleAnalytics();
  return children;
};

function App() {
  return (
    <RouterProvider router={router}>
      <AnalyticsTracker>
        {/* Your app's main content will go here */}
        <div>App Content</div>
      </AnalyticsTracker>
    </RouterProvider>
  );
}

export default App;
