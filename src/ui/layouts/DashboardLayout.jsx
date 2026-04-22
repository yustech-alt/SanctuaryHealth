import { Outlet } from "react-router-dom";
import DashboardNav from "../DashboardNav";
import Footer from "../Footer";

export default function DashboardLayout() {
  return (
    <div>
      <DashboardNav /> {/* This stays forever */}
      <main>
        <Outlet /> {/* This is where the magic happens and pages swap */}
      </main>
      <Footer />
    </div>
  );
}