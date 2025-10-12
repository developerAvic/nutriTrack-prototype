// components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-200 via-white to-white ">
   
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header location={location} />

        {/* Page content */}
        <main className="flex-1 p-6">{children || <Outlet />}</main>
      </div>
    </div>
  );
}
