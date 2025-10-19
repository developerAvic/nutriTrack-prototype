import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Settings,
  Bot,
  Star,
  Download,
  LineChart,
  Table,
  ChevronLeft,
  ChevronRight,
  Salad,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "Dashboard", path: "/dashboard", icon: <LineChart size={18} /> },
  { name: "Activity", path: "/activity", icon: <Table size={18} /> },
  { name: "AI chat", path: "/Aichat", icon: <Bot size={18} /> },
  { name: "Goal & Achievements", path: "/gpa", icon: <Star size={18} /> },
  { name: "Export", path: "/export", icon: <Download size={18} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
];

export default function Sidebar({ collapsed, setIsCollapsed }) {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mobile, sidebar is always collapsed
  const isSidebarCollapsed = isMobileView ? true : collapsed;

  return (
    <aside
      className={`${
        isSidebarCollapsed ? "w-16" : "w-64"
      } h-screen fixed left-0 top-0 flex flex-col justify-between`}
    >
      {/* Top Section: Logo */}
      <div className="flex flex-col p-2">
        <div className="text-green-600 flex font-bold text-3xl mb-8 gap-3 p-2 rounded-lg">
          {!isSidebarCollapsed ? <><Salad/><span> Eat'O</span></> : <Salad/>}
        </div>
        <nav className="flex flex-col space-y-2 w-full">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg ${
                  isActive
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                } ${isSidebarCollapsed ? "justify-center px-2" : "px-2"}`
              }
            >
              {item.icon}
              {!isSidebarCollapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section: Toggle */}
      {!isMobileView && (
        <button
          onClick={() => setIsCollapsed(!isSidebarCollapsed)}
          className="flex p-2 mb-4 gap-3 p-2 rounded-lg"
        >
          {isSidebarCollapsed ? (
            <ChevronRight size={20} className="text-gray-600" />
          ) : (
            <ChevronLeft size={20} className="text-gray-600" />
          )}
        </button>
      )}
    </aside>
  );
}
