
// components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { Home, Settings, Bot, Star, Download, LineChart, Table } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "Dashboard", path: "/dashboard", icon: <LineChart size={18} /> },
  { name: "Activity", path: "/activity", icon: <Table size={18} /> },
  { name: "AI chat", path: "/Aichat", icon: <Bot size={18} /> },
  { name: "Goal & Achievements", path: "/gpa", icon: <Star size={18} /> },
  { name: "Export", path: "/export", icon: <Download size={18} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen shadow fixed left-0 top-0 flex flex-col p-1">
      <h1 className="text-5xl p-4 font-bold mb-8 text-green-600">eat'O</h1>

      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition ${
                isActive
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
