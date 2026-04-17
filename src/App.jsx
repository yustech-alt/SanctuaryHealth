import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing-page";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
