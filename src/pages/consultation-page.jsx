import React from 'react';
import { Video, MessageSquare, Info } from 'lucide-react';
import { FiCheckCircle } from "react-icons/fi";
import ConsultationRequest from '../Features/Consultation/ConsultationRequest';

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
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-[24px] overflow-hidden shadow-lg border-4 border-white">
                   <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300" 
                    alt="Dr. Ayobami James" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute bottom-[-5px] right-[-5px] bg-white rounded-full p-1 shadow-md">
                   <FiCheckCircle className="text-blue-500 w-6 h-6 fill-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">Dr. Ayobami James</h3>
              <p className="text-blue-500 font-bold text-sm mb-8">General Medicine Specialist</p>

              <div className="grid grid-cols-2 gap-8 w-full border-t border-slate-50 pt-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Languages</p>
                  <p className="font-bold text-slate-700 text-xs">English, Yoruba, Igbo</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Experience</p>
                  <p className="font-bold text-slate-700 text-xs">12 Years</p>
                </div>
              </div>
            </div>

            {/* Records Ready Info Box */}
            <div className="bg-[#E6E8EA]/50 p-6 rounded-[24px] flex gap-4 border border-blue-50">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500 shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-sm mb-1">Medical Records Ready</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your previous health history from Vitality Connect has been shared with the doctor for a more precise consultation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationPage;