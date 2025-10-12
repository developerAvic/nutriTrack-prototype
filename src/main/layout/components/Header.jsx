// components/Header.jsx
import { Bell, User } from "lucide-react";

export default function Header({ location }) {
  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/dashboard":
        return "Dashboard";
      case "/activity":
        return "Activity";
      case "/Aichat":
        return "AI chat";
      case "/gpa":
        return "Goal and Achievements";
      case "/export":
        return "Export";
      case "/settings":
        return "Settings";
      default:
        return "NutriTrack";
    }
  };

  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4">
      <h2 className="text-xl font-semibold text-gray-800">
        {getPageTitle(location.pathname)}
      </h2>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
