import React from 'react';
import { FiCheckCircle } from "react-icons/fi";


function ConsultationDoctorInfo() {
    return (
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
)
}

export default ConsultationDoctorInfo;
