import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "../../assets/image.jpg";

export default function Layout({ children }) {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <div
      className="relative min-h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat flex"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>
      <div className="relative min-h-screen flex w-full">
        <Sidebar
          collapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        <div
          className={`flex-1 relative z-10 transition-all duration-300`}
          style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
        >
          <Header location={location} />
          <main className="flex-1 pt-20"> {/* Added pt-20 for header height */}
            {children || <Outlet />}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}