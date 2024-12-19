import { Outlet } from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import BackgroundAnimation from "./components/ParticleAnimation/BackgroundAnimation";

const Layout = () => {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Navbar />
      <BackgroundAnimation/>
      <main className="flex-grow max-w-5xl mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;