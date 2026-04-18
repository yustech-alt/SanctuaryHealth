import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/landing-page";

import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";

import DashboardHome from "./pages/dashboardPages/DashboardHome";

import AppLayout from "./ui/AppLayout";
import AuthLayout from "./ui/layouts/AuthLayout";
import DashboardLayout from "./ui/layouts/DashboardLayout";
import { HeroUIProvider } from "@heroui/react";

export default function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  );
}
