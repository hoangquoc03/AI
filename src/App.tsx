import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import User from "./admin/User";
import Home from "./customer/pages/Home/Home";
import SignIn from "./customer/pages/SignIn_Up/SignIn";
import customerTheme from "./Theme/customerTheme";
import { useEffect } from "react";
import { fetchProduct } from "./State/fetchProduct";
function App() {
  useEffect(() => {
    fetchProduct();
  });
  return (
    <div className="min-h-screen w-full bg-white relative z-0">
      {/* Dual Gradient Overlay Swapped Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(1,87,155,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(1,87,155,0.1) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 20%, rgba(1,87,155,0.2), transparent),
      radial-gradient(circle 500px at 80% 80%, rgba(21,101,192,0.2), transparent)
    `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          backgroundRepeat: "repeat, repeat, no-repeat, no-repeat",
        }}
      />

      <div className="">
        <ThemeProvider theme={customerTheme}>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignIn />} />

              {/* ADMIN LAYOUT */}
              <Route
                path="/admin"
                element={
                  <div className="relative z-20">
                    <Dashboard />
                  </div>
                }
              >
                <Route index element={<div>Dashboard Home</div>} />
                <Route path="users" element={<User />} />
              </Route>
            </Routes>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
