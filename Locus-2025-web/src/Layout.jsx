import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar } from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Footer } from "./components/footer/Footer";

// Lazy-load the particle animation so it doesn't block initial render
const BackgroundAnimation = lazy(() => import("./components/ParticleAnimation/BackgroundAnimation"));

const Layout = () => {
  return (
    <div className='relative isolate min-h-screen text-white flex flex-col'>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <BackgroundAnimation />
      </Suspense>
      {/* Added padding-top to account for fixed navbar */}
      <main className='relative z-10 flex-grow max-w-5xl w-full mx-auto px-4 pt-24 md:pt-28 lg:pt-32'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
