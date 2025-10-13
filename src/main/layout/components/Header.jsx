// components/Header.jsx
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header({ location }) {
  const navigate = useNavigate();

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
    <header className="flex items-center justify-between  px-6 py-4">
      <h1 className="text-4xl font-bold text-gray-600">
        {getPageTitle(location.pathname)}
      </h1>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-green-200 rounded-full">
          <Bell size={20} />
        </button>
        <button onClick={() => navigate("/settings")}
        className="p-2 hover:bg-green-200 rounded-full">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
