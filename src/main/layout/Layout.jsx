// components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "../../../public/image.png"

export default function Layout({ children }) {
  const location = useLocation();

  return (
     <div
       className="min-h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat"
  
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
   
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header location={location} />

        {/* Page content */}
        <main className="flex-1 p-6">{children || <Outlet />}</main>
        
        <Footer/>
      </div>
    </div>
  );
}
// bg-gradient-to-br from-white via-green-100 to-green-200