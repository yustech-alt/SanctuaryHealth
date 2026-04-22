import React from 'react';
import { Info } from 'lucide-react';

function ConsultationRecordsInfo() {
    return (
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
            

)
}

export default ConsultationRecordsInfo;