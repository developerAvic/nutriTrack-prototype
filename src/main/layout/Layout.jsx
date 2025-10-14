// components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "../../../public/image.jpg";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div
      className="relative min-h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat flex"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>

      <div className="fixed left-0 top-0 h-full z-10">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64 relative z-10">
        <Header location={location} />
        <main className="flex-1 p-6">{children || <Outlet />}</main>
        <Footer />
      </div>
    </div>
  );
}
// bg-gradient-to-br from-white via-green-100 to-green-20