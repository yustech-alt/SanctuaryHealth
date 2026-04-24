import React, { useState, useEffect } from 'react';
import { conditionData } from '../Features/Prescription/ConditionData';
import Features from '../Features/Prescription/Features';
import SearchBar from '../Features/Prescription/SearchBar';
import Conditions from '../Features/Prescription/Conditions';
import ResultView from '../Features/Prescription/ResultView';

const PrescriptionPage = () => {
  const [activeTab, setActiveTab] = useState('options');
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  // Fix: Force "options" tab on change
  useEffect(() => {
    if (selectedCondition) setActiveTab('options');
  }, [selectedCondition]);

  const handleSearch = () => {
  setError("");
  const query = searchQuery.trim().toLowerCase();

  if (!query) {
    setError("Search is required. Please type a condition or symptom.");
    return;
  }

  const keys = Object.keys(conditionData);

  // 1. HIGH PRIORITY: Check if any TITLE starts with the search query
  const titleMatch = keys.find(key => 
    conditionData[key].title.toLowerCase().startsWith(query) || 
    key.toLowerCase().startsWith(query)
  );

  if (titleMatch) {
    setSelectedCondition(titleMatch);
    return; // Stop here! We found the correct condition.
  }

  // 2. MEDIUM PRIORITY: Check if the title contains the query anywhere (e.g., "Fever" matching "Typhoid Fever")
  const looseTitleMatch = keys.find(key => 
    conditionData[key].title.toLowerCase().includes(query)
  );

  if (looseTitleMatch) {
    setSelectedCondition(looseTitleMatch);
    return;
  }

  // 3. LOW PRIORITY: Deep search inside descriptions (Only for 3+ characters)
  if (query.length >= 3) {
    const deepMatch = keys.find(key => 
      conditionData[key].warning.message.toLowerCase().includes(query)
    );
    
    if (deepMatch) {
      setSelectedCondition(deepMatch);
      return;
    }
  }

  // 4. NO MATCH FOUND
  setError(`No results found for "${searchQuery}". Try 'Malaria', 'Cough', or 'Fever'.`);
};

  const data = selectedCondition ? conditionData[selectedCondition] : null;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
      {!data ? (
        <div className="pt-28 px-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Know what your health <span className="text-orange-500">will cost you</span></h2>
          <p className="text-slate-500 mb-10">Get instant cost estimates and find affordable alternatives.</p>
          
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={(val) => {
              setSearchQuery(val);
              if(error) setError(""); // This clears the red line immediately!
            }}
            handleSearch={handleSearch}
            error={error}
          />

          <Conditions 
            conditionData={conditionData} 
            setSelectedCondition={setSelectedCondition} 
          />
          
          <div className="mt-12">
            <Features />
          </div>
        </div>
      ) : (
        <ResultView 
          data={data} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onBack={() => { setSelectedCondition(null); setSearchQuery(""); }} 
        />
      )}
    </div>
  );
};

export default PrescriptionPage;