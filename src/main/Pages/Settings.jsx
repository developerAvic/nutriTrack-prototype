import React, { useState } from "react";
import {
  Info,
  Monitor,
  Lock,
  Bell,
  Shield,
  Activity,
  LogOut,
  User, 
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "account", label: "Account", icon: <Lock size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "privacy", label: "Privacy", icon: <Shield size={18} /> },
    { id: "activity & usage", label: "Activity & Usage", icon: <Activity size={18} /> },
    { id: "appearance", label: "Appearance", icon: <Monitor size={18} /> },
    { id: "about", label: "About", icon: <Info size={18} /> },
    { id: "logout", label: "Logout", icon: <LogOut size={18} /> },
  ];

  return (
    <main className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="w-64 bg-white  p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6 text-gray-700">Settings</h2>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === item.id
                    ? "bg-green-100 text-green-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
          {activeTab} Settings
        </h1>

        <div className="bg-white rounded-xl  p-6">
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "privacy" && <PrivacySettings />}
          {activeTab === "activity & usage" && <ActivitySettings />}
          {activeTab === "appearance" && <AppearanceSettings />}
          {activeTab === "about" && <AboutVeiw />}
          {activeTab === "logout" && <LogoutView />}
        </div>
      </div>
    </main>
  );
}

// Placeholder Components
const ProfileSettings = () => <p>Manage your personal details and avatar.</p>;
const AccountSettings = () => <p>Change your password and 2FA options.</p>;
const NotificationSettings = () => <p>Adjust push and email notifications.</p>;
const PrivacySettings = () => <p>Control visibility and data sharing.</p>;
const ActivitySettings = () => <p>Select your preferred language.</p>;
const AppearanceSettings = () => <p>Select your preferred language.</p>;
const AboutVeiw = () => <p>Manage subscription and payment methods.</p>;
const LogoutView = () => <p>Click logout to exit your account.</p>;
