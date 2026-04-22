import React from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  ClipboardList, 
  ArrowUpRight 
} from 'lucide-react';

function RecordPage() {
  const records = [
    { id: 1, type: 'Lab Result', name: 'Comprehensive Blood Count', date: 'April 12, 2026', doctor: 'Dr. Amaka Okafor', size: '1.2 MB' },
    { id: 2, type: 'Prescription', name: 'Amoyicillin Treatment Plan', date: 'April 05, 2026', doctor: 'Dr. Ayobami James', size: '850 KB' },
    { id: 3, type: 'Immunization', name: 'Hepatitis B Booster', date: 'March 20, 2026', doctor: 'General Clinic', size: '2.1 MB' },
    { id: 4, type: 'Referral', name: 'Cardiology Specialist Referral', date: 'Feb 15, 2026', doctor: 'Dr. Amaka Okafor', size: '1.1 MB' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
      
      {/* Main Content Area */}
      <div className="pt-24 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10 flex flex-wrap justify-between items-end gap-6">
          <div>
            <p className="text-[10px] font-black text-[#006D44] uppercase tracking-[0.2em] mb-2">
              Sanctuary Health Records
            </p>
            <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              My Medical Records
            </h2>
            <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
              Securely access and download your clinical documents, test results, and immunization history.
            </p>
          </div>
          
          <button className="bg-[#5C97F8] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2">
            Request New Record
          </button>
        </header>

        {/* Stats Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-[28px] shadow-sm border border-white flex items-center gap-5">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Total Records</p>
              <h4 className="text-2xl font-bold text-slate-800">24 Files</h4>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[28px] shadow-sm border border-white flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Last Updated</p>
              <h4 className="text-2xl font-bold text-slate-800">2 days ago</h4>
            </div>
          </div>

          <div className="bg-[#E9F3F0] p-6 rounded-[28px] border border-[#D1E6E0] flex items-center gap-5">
            <div className="w-14 h-14 bg-white text-[#2D6A58] rounded-2xl flex items-center justify-center shadow-sm">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#2D6A58] uppercase">Storage Status</p>
              <h4 className="text-2xl font-bold text-slate-800">Encrypted</h4>
            </div>
          </div>
        </div>

        {/* Records Table/List Container */}
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
          
          {/* List Toolbar */}
          <div className="p-8 border-b border-slate-50 flex flex-wrap justify-between items-center gap-4">
            <div className="relative group flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search files by name or doctor..." 
                className="w-full bg-[#F3F4F6] py-3.5 pl-12 pr-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F3F4F6] text-slate-600 text-sm font-bold hover:bg-slate-200 transition-all">
                <Filter className="w-4 h-4" /> Filter
              </button>
            </div>
          </div>

          {/* List Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Document Name</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Doctor</th>
                  <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {records.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{record.name}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{record.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                        {record.type}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-500 font-medium">
                      {record.date}
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-800 font-bold">
                      {record.doctor}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-3 text-blue-500 hover:bg-blue-50 rounded-xl transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer of the List */}
          <div className="p-8 bg-slate-50/30 text-center">
            <button className="text-blue-500 text-xs font-black uppercase tracking-widest hover:text-blue-600 transition-colors">
              View All Archived Records
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RecordPage;