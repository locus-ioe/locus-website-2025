<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './App.css'

const router = createBrowserRouter(routes, {
    future: {
        v7_partialHydration: true,
    },
});
=======
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
>>>>>>> main

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
