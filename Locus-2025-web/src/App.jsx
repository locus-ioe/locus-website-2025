import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Event from "./pages/Event";
import PastLocusPage from "./pages/PastLocusPage";
import Contact from "./pages/Contact";
import Sponsor from "./pages/Sponsor";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
    >
      <Route
        element={<Home />}
        index
      />

      <Route
        path='/about'
        element={<AboutUs />}
      />

      <Route
        path='/events'
        element=<Event />
      />

      <Route
        path='/past-locus'
        element={<PastLocusPage />}
      />

      <Route
        path='/sponsors'
        element={<Sponsor />}
      />

      <Route
        path='/contact'
        element={<Contact />}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
