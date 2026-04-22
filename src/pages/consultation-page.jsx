import React from 'react';
import { Video, MessageSquare, Info } from 'lucide-react';
import { FiCheckCircle } from "react-icons/fi";
import ConsultationRequest from '../Features/Consultation/ConsultationRequest';
import ConsultationDoctorInfo from '../Features/Consultation/DoctorInfo';
import ConsultationRecordsInfo from '../Features/Consultation/RecordsInfo';

function ConsultationPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F8FAFC] text-slate-900">
      
      {/* Main Content - pt-24 to clear the fixed navbar */}
      <div className="pt-24 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10">
          <p className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em] mb-2">
            Vitality Connect Nigeria
          </p>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Consultation Overview
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Your journey to wellness is our priority. We've matched you with a specialist to address your current health needs.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column: Request Details */}
          <ConsultationRequest />

          {/* Right Column: Doctor Info */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            
            {/* Doctor Profile Card */}
            <ConsultationDoctorInfo />

            {/* Records Ready Info Box */}
            <ConsultationRecordsInfo />

          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationPage;