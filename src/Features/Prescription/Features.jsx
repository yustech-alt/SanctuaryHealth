import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  // Define the float animation settings to keep the code clean
  const floatVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    hover: { 
      y: -15, 
      scale: 1.02,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
      
      {/* Feature Card 1 - From Left + Float */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover="hover"
        variants={floatVariant}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 shadow-slate-200/50 cursor-pointer"
      >
        <div className="text-2xl mb-3">💰</div>
        <h4 className="font-semibold text-gray-800 mb-2">Cost Transparency</h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          See estimated costs at nearby clinics and hospitals before you visit
        </p>
      </motion.div>

      {/* Feature Card 2 - Center + Float */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover="hover"
        variants={floatVariant}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer"
      >
        <div className="text-2xl mb-3">💊</div>
        <h4 className="font-semibold text-gray-800 mb-2">Affordable Options</h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          Discover generic drugs, PHCs, and community health workers
        </p>
      </motion.div>

      {/* Feature Card 3 - From Right + Float */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover="hover"
        variants={floatVariant}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 shadow-slate-200/50 cursor-pointer"
      >
        <div className="text-2xl mb-3">📋</div>
        <h4 className="font-semibold text-gray-800 mb-2">Care Guidance</h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          Get informed guidance on whether to treat at home or seek care
        </p>
      </motion.div>

    </section>
  );
}