import React from 'react';
// Component imports
import DashboardNav from '../ui/DashboardNav';
import DashboardProfile from '../Features/Dashboard/Profile';
import DashboardVisitSummary from '../Features/Dashboard/VisitSummary';
import DashboardMedicationManagement from '../Features/Dashboard/MedicationManagement';
import DashboardConsultation from '../Features/Dashboard/Consultation';
import DashboardPendingRX from '../Features/Dashboard/PendingRX';
import DashboardUpcoming from '../Features/Dashboard/Upcoming';
import DashboardPrescriptionHistory from '../Features/Dashboard/PrescriptionHistory';


function HomeDashboardPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
      {/* Fixed Navbar */}
      <DashboardNav />

      {/* Main Content Wrapper */}
      <div className="pt-24 pb-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <header className="">
              <h2 className="text-4xl font-bold text-slate-900">Welcome Back, Chidi</h2>
              <p className="text-slate-500 font-medium">Your health journey is looking stable today.</p>
            </header>

            {/* Feature Components */}
            <DashboardProfile />
            <DashboardVisitSummary />
            <DashboardMedicationManagement />
            <DashboardConsultation />
          </div>

          {/* RIGHT COLUMN (WIDGETS) */}
          <div className="col-span-12 lg:col-span-4 space-y-8 lg:mt-24">
            {/* Pending RX Card */}
            <DashboardPendingRX />

            {/* Upcoming Section Card */}
            <DashboardUpcoming />

            {/* Prescription History Widget */}
            <DashboardPrescriptionHistory />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeDashboardPage;