import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

function App() {
  const router = createBrowserRouter(routes, {
    future: {
      v7_partialHydration: true,
    },
  });

  return (
    <RouterProvider router={router} />
  );
}

export default App;
