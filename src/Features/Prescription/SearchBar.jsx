import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, error, setError }) => {
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    // Clear the red error line as soon as the user starts typing again
    if (error) setError(""); 
  };

  return (
    <div className="max-w-2xl mx-auto mb-10">
      <div className="relative flex items-center">
        <Search className="absolute left-6 text-slate-400 z-10" size={20} />
        
        <input
          type="text"
          placeholder="Describe symptoms or search condition..."
          className={`w-full py-5 pl-14 pr-32 rounded-full shadow-xl transition-all text-lg placeholder:text-slate-400 outline-none border-none ${
            error 
              ? 'ring-2 ring-red-500 bg-red-50/10' 
              : 'focus:ring-4 focus:ring-[#5C97F8]/20 bg-white ring-1 ring-slate-100'
          }`}
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="absolute right-2 h-[calc(100%-16px)] px-8 bg-[#5C97F8] text-white rounded-full font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-md z-20"
        >
          Search
        </button>
      </div>

      {/* Error container with fixed height to prevent "jumping" UI */}
      <div className="h-6"> 
        {error && (
          <div className="mt-4 flex items-center justify-center gap-2 text-red-500 font-bold text-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;