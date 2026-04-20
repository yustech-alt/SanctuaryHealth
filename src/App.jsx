import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AuthLayout from "./ui/layouts/AuthLayout";
import DashboardLayout from "./ui/layouts/DashboardLayout";
import { HeroUIProvider } from "@heroui/react";

import LandingPage from "./pages/landing-page";
import SignupPage from "./pages/signup-page";
import LoginPage from "./pages/login-page";
import HomeDashboardPage from "./pages/home-dashboardPage";
import ConsultationPage from "./pages/consultation-page";
import PrescriptionPage from "./pages/prescription-page";
import RecordPage from "./pages/record-page";
import SettingPage from "./pages/setting-page";

export default function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<HomeDashboardPage />} />
            <Route path="consultation" element={<ConsultationPage />} />
            <Route path="prescription" element={<PrescriptionPage />} />
            <Route path="records" element={<RecordPage />} />
            <Route path="settings" element={<SettingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HeroUIProvider>
  );
}