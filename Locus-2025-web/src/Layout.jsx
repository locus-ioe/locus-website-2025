import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => (
  <>
    <Navbar />
    <main className='mt-32'>
      <Outlet /> {/* Renders the child routes */}
    </main>
    <Footer />
  </>
);

export default Layout;
