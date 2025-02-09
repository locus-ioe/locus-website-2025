import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import BackgroundAnimation from "./components/ParticleAnimation/BackgroundAnimation";
import LocusEventPopup from "./components/popup/LocusEventPopup";

const Layout = () => {
  return (
    <div className='min-h-screen text-white flex flex-col'>
      <Navbar />
      <BackgroundAnimation />
      <main className='flex-grow max-w-5xl w-full mx-auto px-4'>
        <Outlet />
      </main>
      <Footer />
      {/* <LocusEventPopup /> */}
    </div>
  );
};

export default Layout;
