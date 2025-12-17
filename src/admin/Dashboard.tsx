import { Bell, LayoutDashboard, Moon, Sun, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const sidebarLinks = [
  { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "Users", path: "/admin/users", icon: <Users size={20} /> },
];

const Dashboard = () => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100 dark:bg-slate-950 transition-colors">
      {/* ===== Topbar ===== */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-20">
        <h1 className="font-semibold text-indigo-600 dark:text-blue-400 text-lg tracking-wide">
          Admin Panel
        </h1>

        <div className="flex items-center gap-4">
          {/* Notification */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <span className="text-sm text-gray-600 dark:text-gray-300">
            Hi, Admin
          </span>

          <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-blue-900/40 flex items-center justify-center text-indigo-600 dark:text-blue-400 font-semibold">
            A
          </div>
        </div>
      </header>

      {/* ===== Layout ===== */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 px-3 py-4">
          <p className="px-4 mb-3 text-xs uppercase tracking-wider text-gray-400 dark:text-slate-500">
            Management
          </p>

          {sidebarLinks.map((item) => {
            const active = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={`group flex items-center gap-3 px-4 py-3 mb-1 rounded-xl transition-all
                ${
                  active
                    ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>

                <span className="text-sm font-medium">{item.name}</span>

                {/* Active indicator */}
                <span
                  className={`ml-auto h-5 w-1 rounded-full transition
                  ${active ? "bg-blue-500" : "bg-transparent"}`}
                />
              </NavLink>
            );
          })}
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-slate-950 transition-colors">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 min-h-full border border-gray-200 dark:border-slate-800">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
