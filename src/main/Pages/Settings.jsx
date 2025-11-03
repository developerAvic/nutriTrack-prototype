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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const menuItems = [
    {
      id: "profile",
      label: "Profile",
      icon: <User size={18} />,
      content: <ProfileSettings />,
    },
    {
      id: "account",
      label: "Account",
      icon: <Lock size={18} />,
      content: <AccountSettings />,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell size={18} />,
      content: <NotificationSettings />,
    },
    {
      id: "privacy",
      label: "Privacy",
      icon: <Shield size={18} />,
      content: <PrivacySettings />,
    },
    {
      id: "activity",
      label: "Activity & Usage",
      icon: <Activity size={18} />,
      content: <ActivitySettings />,
    },
    {
      id: "appearance",
      label: "Appearance",
      icon: <Monitor size={18} />,
      content: <AppearanceSettings />,
    },
    {
      id: "about",
      label: "About",
      icon: <Info size={18} />,
      content: <AboutView />,
    },
    {
      id: "logout",
      label: "Logout",
      icon: <LogOut size={18} />,
      content: <LogoutView />,
    },
  ];

  return (
    <main className="">
      {/* MOBILE VIEW – Accordion */}
      <div className="block md:hidden p-4 sm:p-6">

        <div className="space-y-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl"
            >
              <button
                onClick={() => toggleSection(item.id)}
                className="w-full flex justify-between items-center px-4 py-3 text-left rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="text-gray-700 font-medium">
                    {item.label}
                  </span>
                </div>
                {expanded === item.id ? (
                  <ChevronUp size={18} className="text-gray-500" />
                ) : (
                  <ChevronDown size={18} className="text-gray-500" />
                )}
              </button>

              {expanded === item.id && (
                <div className="px-6 pb-4 text-sm text-gray-600 ">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW – Sidebar + Content */}
      <div className="hidden md:flex">
        <aside className="w-64 p-4 flex flex-col">
          <div>
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

        <section className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
            {activeTab} Settings
          </h1>

          <div className="rounded-xl p-6">
            {menuItems.find((item) => item.id === activeTab)?.content}
          </div>
        </section>
      </div>
    </main>
  );
}

// Placeholder Components
const ProfileSettings = () => <p>Manage your personal details and avatar.</p>;
const AccountSettings = () => <p>Change your password and 2FA options.</p>;
const NotificationSettings = () => <p>Adjust push and email notifications.</p>;
const PrivacySettings = () => (
  <p>Control visibility and data sharing preferences.</p>
);
const ActivitySettings = () => <p>Track your recent logins and usage time.</p>;
const AppearanceSettings = () => (
  <p>Choose themes, colors, and layout preferences.</p>
);
const AboutView = () => <p>App info, version, and developer details.</p>;
const LogoutView = () => (
  <p>Click logout to safely sign out of your account.</p>
);
