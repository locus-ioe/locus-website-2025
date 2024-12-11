import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => (
  <>
    <Navbar />
    <main >
      <Outlet /> {/* Renders the child routes */}
    </main>
    <Footer />
  </>
);

export default Layout;
